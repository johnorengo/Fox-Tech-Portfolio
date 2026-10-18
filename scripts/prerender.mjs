import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.codex-temp/ssr/entry-server.js';

const file = new URL('../dist/index.html', import.meta.url);
const template = await readFile(file, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error('Missing pre-render mount point. Run the client build first.');
await writeFile(file, template.replace(marker, () => `<div id="root">${render()}</div>`));
console.log('Pre-rendered landing page content for static cPanel hosting.');
