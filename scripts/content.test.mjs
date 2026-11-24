import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const zh = read('content/zh.ts');
const en = read('content/en.ts');
const readme = read('README.md');

const contentValue = (source, key, docs = false) => {
  const docsStart = source.indexOf('  docs: {');
  const scope = docs ? source.slice(docsStart) : source.slice(0, docsStart);
  const match = scope.match(new RegExp(`${key}:\\s*'([^']+)'`));
  assert.ok(match, `missing ${docs ? 'docs ' : ''}${key}`);
  return match[1];
};

const contentKeywords = (source, docs = false) => {
  const docsStart = source.indexOf('  docs: {');
  const scope = docs ? source.slice(docsStart) : source.slice(0, docsStart);
  const match = scope.match(/keywords:\s*\[([^\]]+)\]/);
  assert.ok(match, `missing ${docs ? 'docs ' : ''}keywords`);
  return Array.from(match[1].matchAll(/'([^']+)'/g), (item) => item[1]);
};

const routes = [
  { source: zh, file: 'index.html', pathname: '/', lang: 'zh-CN', otherPath: '/en/' },
  { source: en, file: 'en/index.html', pathname: '/en/', lang: 'en', otherPath: '/' },
  { source: zh, file: 'docs/index.html', pathname: '/docs/', lang: 'zh-CN', otherPath: '/en/docs/', docs: true },
  { source: en, file: 'en/docs/index.html', pathname: '/en/docs/', lang: 'en', otherPath: '/docs/', docs: true },
];

test('deployment manifests do not reference the removed DNS configuration', () => {
  for (const source of [zh, en, readme]) {
    assert.doesNotMatch(source, /unbound\.conf/);
  }
});

test('Agent frequency uses deployment defaults and monitor delivery settings', () => {
  assert.match(zh, /新监控使用部署默认检查频率/);
  assert.match(zh, /打开监控页的「投递设置」，修改检查频率/);
  assert.match(en, /New monitors use the deployment’s default check frequency/);
  assert.match(en, /Open Delivery settings on the monitor page to change the check frequency/);
  assert.doesNotMatch(zh, /1 分钟到 24 小时/);
  assert.doesNotMatch(en, /1 minute to 24 hours/);
});

test('notification channels distinguish Agent from WebMonitor', () => {
  assert.match(zh, /Agent 支持邮件与 HTTPS Webhook；WebMonitor 仅支持邮件/);
  assert.match(en, /Agent supports email and HTTPS Webhooks; WebMonitor supports email only/);
  assert.doesNotMatch(zh, /两个项目都只发送邮件/);
  assert.doesNotMatch(en, /Both projects send email only/);
});

test('Agent integrations and retention stay aligned with shipped behavior', () => {
  for (const source of [zh, en]) {
    assert.match(source, /X-WebMonitor-Signature-256/);
    assert.match(source, /HMAC-SHA256/);
    assert.match(source, /MCP_ENABLED=true/);
    assert.match(source, /drafts:approve/);
    assert.match(source, /NetworkPolicy/);
    assert.match(source, /emptyDir/);
    assert.match(source, /RETENTION_DAYS=30/);
    assert.match(source, /RETENTION_GC_BATCH_SIZE=100/);
    assert.match(source, /RETENTION_DAYS=0/);
  }
  assert.match(zh, /测试 Webhook/);
  assert.match(zh, /不会创建监控事件、任务或投递记录/);
  assert.match(zh, /PAT 仅用于 `\/mcp`/);
  assert.match(zh, /不是高可用或生产入口设计/);
  assert.match(en, /Test webhook/);
  assert.match(en, /create no monitoring event, job or delivery-log entry/);
  assert.match(en, /A PAT authenticates `\/mcp`, not browser API sessions/);
  assert.match(en, /not an HA or production ingress design/);
});

test('Chinese and English manuals keep the same ordered section anchors', () => {
  const expected = [
    'overview', 'images', 'webmonitor', 'agent', 'webmonitor-usage', 'agent-usage',
    'email', 'mcp', 'manage', 'faq', 'operations', 'kubernetes', 'limits', 'licenses',
  ];
  const ids = (source) => Array.from(source.matchAll(/^        id: '([^']+)',?$/gm), (match) => match[1]);
  assert.deepEqual(ids(zh), expected);
  assert.deepEqual(ids(en), expected);
});

test('all four static routes match localized content and canonical metadata', () => {
  for (const route of routes) {
    const html = read(route.file);
    const title = contentValue(route.source, 'title', route.docs);
    const description = contentValue(route.source, 'description', route.docs);
    const keywords = contentKeywords(route.source, route.docs).join(',');
    const canonical = `https://webmonitor.github.io${route.pathname}`;
    const alternate = `https://webmonitor.github.io${route.otherPath}`;

    assert.ok(html.startsWith(`<!DOCTYPE html>\n<html lang="${route.lang}">`));
    assert.ok(html.includes(`<title>${title}</title>`), route.file);
    assert.ok(html.includes(`<meta name="description" content="${description}" />`), route.file);
    assert.ok(html.includes(`<meta name="keywords" content="${keywords}" />`), route.file);
    assert.ok(html.includes(`<meta property="og:title" content="${title}" />`), route.file);
    assert.ok(html.includes(`<meta property="og:description" content="${description}" />`), route.file);
    assert.ok(html.includes(`<meta name="twitter:title" content="${title}" />`), route.file);
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}" />`), route.file);
    assert.ok(html.includes(`<link rel="alternate" hreflang="${route.lang}" href="${canonical}" />`), route.file);
    assert.ok(html.includes(`<link rel="alternate" hreflang="x-default" href="${route.docs ? 'https://webmonitor.github.io/docs/' : 'https://webmonitor.github.io/'}" />`), route.file);
    assert.ok(html.includes(`<link rel="alternate" hreflang="${route.lang === 'en' ? 'zh-CN' : 'en'}" href="${alternate}" />`), route.file);
    assert.ok(html.includes('<div id="root"></div>'), route.file);

    const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert.ok(jsonLd, `${route.file} JSON-LD`);
    assert.ok(JSON.parse(jsonLd[1])['@graph'].length >= 2, `${route.file} structured data`);
  }
});

test('sitemap contains all four localized routes with the same maintenance date', () => {
  const sitemap = read('public/sitemap.xml');
  const entries = Array.from(sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g), (match) => match[1]);
  assert.deepEqual(entries.map((entry) => entry.match(/<loc>([^<]+)<\/loc>/)[1]), [
    'https://webmonitor.github.io/',
    'https://webmonitor.github.io/en/',
    'https://webmonitor.github.io/docs/',
    'https://webmonitor.github.io/en/docs/',
  ]);
  for (const entry of entries) {
    assert.ok(entry.includes('<lastmod>2026-11-24</lastmod>'));
    assert.ok(entry.includes('hreflang="zh-CN"'));
    assert.ok(entry.includes('hreflang="en"'));
    assert.ok(entry.includes('hreflang="x-default"'));
  }
});

test('prerender and client builds retain the same four-route contract', () => {
  const prerender = read('scripts/prerender.mjs');
  const vite = read('vite.config.ts');
  for (const route of routes) {
    assert.ok(prerender.includes(`file: '${route.file}'`), route.file);
    assert.ok(prerender.includes(`pathname: '${route.pathname}'`), route.pathname);
  }
  for (const input of ['index.html', 'docs/index.html', 'en/index.html', 'en/docs/index.html']) {
    assert.ok(vite.includes(input), input);
  }
});
