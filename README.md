# webmonitor.github.io

Organization website for [WebMonitor](https://github.com/webmonitor), live at <https://webmonitor.github.io>.

React 19 + Vite + Base UI, same flat warm-paper design as [qfpqhyl.top](https://github.com/ox0pine/qfpqhyl.top): `#f5f3ef` background, `#111111` text, `#ded8cf` hairlines, Noto Serif SC.

## 先改哪里

`config/site.ts` 集中放可替换的组织信息：站点标题、简介、关键词、演示、GitHub 与文档地址、区块文案。

页面内容在 `data/site.ts`：

- `projects` — 两个项目（WebMonitor、WebMonitor-Agent）的定位、描述、技术栈与许可证
- `resources` — 演示、站内文档、mocksite、组织主页等入口
- `quickStart` — 本地 Docker 启动命令与说明

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
