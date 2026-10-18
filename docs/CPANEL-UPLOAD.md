# cPanel upload

Run `npm run package:cpanel` from the repository to build, pre-render, validate and replace `cpanel-upload.zip`.
The ZIP contains the deployable website only, with `index.html`, `.htaccess`, icons and `assets/` at its root.
Source code stays in Git. Do not upload the repository, `.env`, `node_modules` or the temporary SSR build.

1. Back up the existing website files in cPanel File Manager.
2. Open the document root assigned to `foxtechsolution.com` (usually `public_html`, or the directory shown under Domains).
3. Upload `cpanel-upload.zip` and extract its contents directly there. Do not create an extra `dist` folder.
4. Enable **Show Hidden Files** and confirm `.htaccess` was extracted. Merge it with any existing domain rules you must retain.
5. Confirm the domain has a valid SSL certificate. The supplied Apache configuration redirects HTTP and `www` to `https://foxtechsolution.com/`.
6. Open the HTTPS homepage and check the mobile menu, tagline, favicon, project form, WhatsApp, case selector and back-to-top control.
7. Purge any hosting/CDN cache. The homepage revalidates; hashed assets can stay cached. The favicon uses a new version URL.
8. Remove the uploaded ZIP from the public directory after extraction. Check that HTTPS responses include `Content-Security-Policy`, `Strict-Transport-Security` and `X-Content-Type-Options`. See [security configuration](SECURITY.md) for the included protections and hosting requirements.

Use the `.htaccess` inside the ZIP. The source version in `public/` is a build template; production script hashes are inserted during packaging.

If replacing the earlier upload after a 403, overwrite the old `.htaccess` and site files with the corrected archive. Confirm regular files (including `.htaccess` and `index.html`) have permissions `0644` and directories have `0755`. The rebuilt archive explicitly stores file permissions as `0644`; do not use `0666` or `0777`. The homepage and assets must be directly in the domain document root.

No Node.js or Python process is needed on the web server. These tools are used locally to produce static files.
The public EmailJS settings are compiled during the build. Keep the site's domain allowed in EmailJS and retain the configured notification and acknowledgement templates.
Email delivery still depends on the external EmailJS account and templates; the packaging step does not send test messages.

## Search readiness

The production homepage contains pre-rendered HTML and hydrates into the interactive React app.
It includes a descriptive title and meta description, canonical URL, social-sharing metadata,
Organization/WebSite/WebPage structured data and a service catalog. `robots.txt`, `sitemap.xml`,
a square fox favicon and an actual 404 page are included. Section anchors remain parts of one canonical page.

After deployment, submit `https://foxtechsolution.com/sitemap.xml` in Google Search Console and request a homepage crawl.
Search rankings, crawl timing and favicon appearance are determined by search engines.
