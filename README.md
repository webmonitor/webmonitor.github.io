# webmonitor.github.io

Organization website for [WebMonitor](https://github.com/webmonitor), live at <https://webmonitor.github.io>.

React 19 + Vite + Base UI, same flat warm-paper design as [qfpqhyl.top](https://github.com/ox0pine/qfpqhyl.top): `#f5f3ef` background, `#111111` text, `#ded8cf` hairlines, Noto Serif SC. Tailwind 在构建期编译成 `dist/assets/styles-*.css`，页面不依赖 CDN 脚本。

## 可索引性

每个路由都在构建时预渲染成真实 HTML（`entry-server.tsx` + `scripts/prerender.mjs`），JS 被禁用时正文、标题与链接依然完整可读：

- `vite build` 产出四个入口：`dist/index.html`、`dist/docs/index.html`、`dist/en/index.html`、`dist/en/docs/index.html`
- `vite build --ssr entry-server.tsx` 产出 `dist-ssr/entry-server.js`
- `scripts/prerender.mjs` 把 `renderToString` 的结果写进 `<div id="root">…</div>`

配套的索引线索：

- `public/robots.txt` — 允许全站抓取并指向 sitemap
- `public/sitemap.xml` — 四个语言版本 URL，附 `xhtml:link` hreflang 互指
- 每个入口各自的 `canonical`、`hreflang`（zh-CN / en / x-default）、`description`、Open Graph、Twitter Card
- JSON-LD：首页 `Organization` / `WebSite` / 两个 `SoftwareApplication`，文档页 `TechArticle` / `BreadcrumbList`，均带 `inLanguage`

改动页面内容后，如需更新 sitemap 的 `lastmod`，直接编辑 `public/sitemap.xml`。

## 中英文版本

路径即语言，不依赖 cookie 或前端开关：

| 页面 | 中文 | English |
| --- | --- | --- |
| 首页 | `/` | `/en/` |
| 文档 | `/docs/` | `/en/docs/` |

导航右侧的胶囊按钮跳到当前页面的另一语言版本（`components/Navbar.tsx` 用 `config/routes.ts:alternatePath` 计算），并带 `hreflang` 标注。路由判定集中在 `config/routes.ts`，服务端预渲染与客户端首屏使用同一个 `langFromPath`。

## 先改哪里

文案与内容全部集中在 `content/`，组件不再硬编码字符串：

- `content/zh.ts`、`content/en.ts` — 同一份 `SiteContent` 结构的两套文案
- `content/types.ts` — 类型定义，含文档区块（段落 / 列表 / 表格 / 代码 / 提示 / 链接）
- `content/index.ts` — `contentByLang[lang]` 查表

文档正文由 `components/DocsPage.tsx` 根据 `DocBlock` 数据渲染，两种语言共用同一套排版；`components/Rich.tsx` 支持 `` `code` `` 与 `**强调**` 两种行内标记。

`config/site.ts` 只保留跨语言共享的 URL（官网组织、演示、Logo）。

四个 HTML 入口（`index.html`、`docs/index.html`、`en/index.html`、`en/docs/index.html`）各自持有 title / description / canonical / hreflang / JSON-LD；改文案时这里要与 `content/*.ts` 同步。

文档页是独立的 Vite 入口：`docs/index.html` + `docs/main.tsx`，正文在 `components/DocsPage.tsx`，内容取自两个项目的 README（部署步骤、配置项、使用流程、限制与许可证）。构建后输出 `dist/docs/index.html`，站内链接为 `/docs/` 与 `/docs/#<section>`，不再跳转 GitHub。

组件在 `components/`：`Navbar`、`Hero`、`Projects`、`GettingStarted`、`Footer`、`SiteMeta`（运行时写入 title 与 meta）。

## 本地使用

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # 产物在 dist/
npm run preview
```

## 部署

`.github/workflows/deploy.yml` 在推送到 `main` 时构建并部署：`npm ci` → `npm run typecheck` → `npm run build` → `actions/upload-pages-artifact` → `actions/deploy-pages`。

仓库 Pages 的发布源必须设为 **GitHub Actions**（Settings → Pages → Build and deployment → Source: GitHub Actions）。站点位于根路径，`vite.config.ts` 不需要 `base`。
