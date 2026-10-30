import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const { render } = await import(path.join(root, 'dist-ssr/entry-server.js'));

const routes = [
  { file: 'index.html', pathname: '/' },
  { file: 'docs/index.html', pathname: '/docs/' },
  { file: 'en/index.html', pathname: '/en/' },
  { file: 'en/docs/index.html', pathname: '/en/docs/' },
];

for (const route of routes) {
  const file = path.join(root, 'dist', route.file);
  const template = await readFile(file, 'utf8');
  const html = render(route.pathname);

  if (!template.includes('<div id="root"></div>')) {
    throw new Error(`missing empty root in ${route.file}`);
  }

  await writeFile(file, template.replace('<div id="root"></div>', `<div id="root">${html}</div>`), 'utf8');
  console.log(`prerendered ${route.pathname} → dist/${route.file} (${html.length} bytes of markup)`);
}
