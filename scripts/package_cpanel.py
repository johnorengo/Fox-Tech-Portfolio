"""Validate the production site and create the cPanel upload archive."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import xml.etree.ElementTree as ET
import zipfile
import base64
import hashlib

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.assets = []
        self.ids = []
        self.headings = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'h1':
            self.headings += 1
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for attribute in ['href', 'src']:
            if attrs.get(attribute):
                self.assets.append(attrs[attribute])
        if attrs.get('srcset'):
            self.assets.extend(item.strip().split()[0] for item in attrs['srcset'].split(','))


def main():
    html = (DIST / 'index.html').read_text(encoding='utf-8')
    page = Page()
    page.feed(html)
    assert page.headings == 1, 'The pre-rendered homepage must have one H1.'
    assert '<div id="root"></div>' not in html, 'Missing pre-rendered content.'
    assert '<link rel="canonical" href="https://foxtechsolution.com/"' in html, 'Incorrect canonical URL.'
    assert 'name="robots" content="index,follow,max-image-preview:large"' in html, 'Incorrect homepage indexing policy.'
    assert len(page.ids) == len(set(page.ids)), 'Duplicate HTML IDs.'
    for section in ['hero', 'services', 'system', 'case-studies', 'about', 'contact']:
        assert section in page.ids, f'Missing pre-rendered section: {section}'
    for value in page.assets:
        url = urlsplit(value)
        if url.scheme or url.netloc or not url.path:
            continue
        asset = (DIST / unquote(url.path).lstrip('/')).resolve()
        assert asset.is_relative_to(DIST.resolve()), f'Unexpected asset path: {value}'
        assert asset.is_file(), f'Missing production asset: {value}'
    schemas = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
    assert schemas, 'Missing structured data.'
    for schema in schemas:
        data = json.loads(schema)
        types = {entry['@type'] for entry in data['@graph']}
        assert {'Organization', 'WebSite', 'WebPage'} <= types, 'Missing structured-data entities.'
    ET.parse(DIST / 'sitemap.xml')
    assert 'https://foxtechsolution.com/sitemap.xml' in (DIST / 'robots.txt').read_text()
    for name in ['.htaccess', '404.html', 'favicon.ico', 'favicon-96x96.png', 'apple-touch-icon.png']:
        assert (DIST / name).is_file(), f'Missing deployment file: {name}'
    for script in (DIST / 'assets').glob('*.js'):
        assert 'import.meta.env' not in script.read_text(encoding='utf-8'), 'Unprocessed environment settings.'
    headers = (DIST / '.htaccess').read_text(encoding='utf-8')
    assert '__INLINE_SCRIPT_HASHES__' not in headers, 'Unresolved security policy.'
    for token in ['Options -Indexes', 'Require all denied', 'LimitExcept GET HEAD', 'Content-Security-Policy', "script-src-attr 'none'", "frame-ancestors 'none'", 'Strict-Transport-Security', 'X-Content-Type-Options', 'Permissions-Policy']:
        assert token in headers, f'Missing security control: {token}'
    assert "'unsafe-eval'" not in headers
    assert "script-src 'self' https://www.googletagmanager.com 'sha256-" in headers
    for attributes, body in re.findall(r'<script\b([^>]*)>(.*?)</script>', html, re.S | re.I):
        if re.search(r'\bsrc\s*=', attributes, re.I):
            continue
        digest = base64.b64encode(hashlib.sha256(body.replace('\r\n', '\n').replace('\r', '\n').encode()).digest()).decode()
        assert f"'sha256-{digest}'" in headers, 'Inline script blocked by security policy.'
    files = sorted(path for path in DIST.rglob('*') if path.is_file())
    assert not any(path.name.startswith('.env') or path.suffix == '.map' for path in files), 'Private/build-only files in upload.'
    allowed = {'.html', '.js', '.css', '.webp', '.png', '.ico', '.svg', '.txt', '.xml', '.woff', '.woff2'}
    assert all(not path.is_symlink() and (path.name == '.htaccess' or path.suffix in allowed) for path in files), 'Unexpected deployable file.'
    archive = ROOT / 'cpanel-upload.zip'
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as package:
        for path in files:
            package.write(path, path.relative_to(DIST).as_posix())
    with zipfile.ZipFile(archive) as package:
        assert package.testzip() is None, 'Corrupt ZIP entry.'
        assert 'index.html' in package.namelist() and '.htaccess' in package.namelist()
    print(f'Validated pre-rendered SEO content, metadata, local assets and archive integrity.\nCreated {archive.name}: {len(files)} files, {archive.stat().st_size / 1024 / 1024:.2f} MB. Extract directly into the domain document root.')


if __name__ == '__main__':
    main()
