import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const { render } = await import(path.join(root, 'dist-ssr/entry-server.js'));

const routes = [
  { file: 'index.html', pathname: '/' },
  { file: 'docs/index.html', pathname: '/docs/' },
  { file: 'en/index.html', pathname: '/en/' },
  { file: 'en/docs/index.html', pathname: '/en/docs/' },
];

const rootCall = (method) => new RegExp(
  `\\b${method}\\s*\\(\\s*document\\.getElementById\\(\\s*["']root["']\\s*\\)`,
);
const anyRootCall = /\b(?:createRoot|hydrateRoot)\s*\(\s*document\.getElementById\(\s*["']root["']\s*\)/;

for (const route of routes) {
  const html = await readFile(path.join(dist, route.file), 'utf8');
  const serverMarkup = render(route.pathname);
  assert.ok(serverMarkup.length > 0, `${route.pathname}: SSR render returned no markup`);
  assert.ok(
    html.includes(`<div id="root">${serverMarkup}</div>`),
    `${route.file}: built HTML does not contain its route's complete SSR markup`,
  );

  // Check the generated browser entry, not its TypeScript source. The shared
  // React bundle defines both APIs, so only scripts that actually mount #root
  // are candidates.
  const entries = [];
  for (const tag of html.match(/<script\b[^>]*>/g) ?? []) {
    if (!/\btype="module"/.test(tag)) continue;
    const src = tag.match(/\bsrc="([^"]+)"/)?.[1];
    if (!src) continue;
    const assetPath = new URL(src, 'https://webmonitor.github.io').pathname.replace(/^\/+/, '');
    const source = await readFile(path.join(dist, assetPath), 'utf8');
    if (anyRootCall.test(source)) entries.push({ src, source });
  }

  assert.equal(entries.length, 1, `${route.file}: expected one browser entry that mounts #root`);
  assert.match(entries[0].source, rootCall('hydrateRoot'), `${entries[0].src}: #root is not hydrated`);
  assert.doesNotMatch(entries[0].source, rootCall('createRoot'), `${entries[0].src}: SSR markup would be replaced`);
  console.log(`verified SSR markup and hydration for ${route.pathname} → ${entries[0].src}`);
}
