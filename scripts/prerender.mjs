import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { render } from '../.codex-temp/ssr/entry-server.js';

const file = new URL('../dist/index.html', import.meta.url);
const template = await readFile(file, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error('Missing pre-render mount point. Run the client build first.');
const html = template.replace(marker, () => `<div id="root">${render()}</div>`);
await writeFile(file, html);
// Hash final inline scripts, including analytics and structured data. Never allow arbitrary inline JS.
const hashes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
  .filter(([, attributes]) => !/\bsrc\s*=/i.test(attributes))
  .map(([, , body]) => `'sha256-${createHash('sha256').update(body.replace(/\r\n?/g, '\n')).digest('base64')}'`);
const headersFile = new URL('../dist/.htaccess', import.meta.url);
const headers = await readFile(headersFile, 'utf8');
if (!headers.includes('__INLINE_SCRIPT_HASHES__')) throw new Error('Missing CSP hash placeholder.');
await writeFile(headersFile, headers.replace('__INLINE_SCRIPT_HASHES__', hashes.join(' ')));
console.log('Pre-rendered landing page content for static cPanel hosting.');
