# WebMonitor 官网与文档

[中文首页](https://webmonitor.github.io/) · [English](https://webmonitor.github.io/en/) · [使用文档](https://webmonitor.github.io/docs/) · [组织主页](https://github.com/webmonitor)

本仓库维护 WebMonitor 的中英双语官网与使用文档，不是监控应用。网站使用 React、TypeScript 和 Vite，构建时预渲染为静态 HTML，并通过 GitHub Pages 发布。本站不执行监控任务，也不处理应用账户、凭据或监控数据。

## 路由与双语内容

| 页面 | 中文路由 | English route |
| --- | --- | --- |
| 首页 | `/` | `/en/` |
| 文档 | `/docs/` | `/en/docs/` |

- `config/routes.ts` 统一维护四个路由、语言归属和语言切换链接；客户端与预渲染共用这些规则。语言由 URL 决定，不依赖 Cookie。
- `content/zh.ts` 与 `content/en.ts` 分别维护中文和英文内容，`content/types.ts` 定义共享内容契约。修改文案、章节、表格、锚点或操作步骤时，必须同步另一种语言；文档章节顺序与锚点由测试检查。
- `content/index.ts` 按语言选择内容。共享组件只负责渲染，不应在组件内另建一套产品说明或语言映射。

## 维护位置

| 文件或目录 | 职责 |
| --- | --- |
| `components/` | 四个路由共用的布局、导航、首页和文档渲染组件 |
| `config/site.ts` | 组织、演示和 Logo 等共享 URL |
| 根目录、`docs/`、`en/`、`en/docs/` 下的 `index.html` | 各路由的静态元信息和预渲染模板 |
| `entry-server.tsx`、`scripts/prerender.mjs` | 服务端渲染入口与四个页面的构建时预渲染 |
| `public/robots.txt`、`public/sitemap.xml` | 抓取入口、四个本地化路由及其备用语言链接 |
| `scripts/content.test.mjs` | 双语内容、部署事实、静态元信息、sitemap 与预渲染契约测试 |

修改首页或文档的标题、描述和关键词时，同步对应 `content/*.ts` 与入口 HTML。静态元信息包括 `lang`、canonical、hreflang、Open Graph、Twitter 和 JSON-LD；新增或删除章节时还要检查站内锚点及语言切换链接。

`sitemap.xml` 只列上述四个路由，各条目保留相同的实际维护日期和完整的备用语言链接。不要手工编辑 `dist/` 或 `dist-ssr/`。

样式在构建期生成，不依赖运行时 Tailwind CDN；页面仍引用 Google Fonts，因此不要将网站描述为完全离线。

## 产品文档同步规则

[WebMonitor-Agent](https://github.com/webmonitor/WebMonitor-Agent)（[中文 README](https://github.com/webmonitor/WebMonitor-Agent/blob/main/README.zh-CN.md)）与 [WebMonitor](https://github.com/webmonitor/WebMonitor)（[中文 README](https://github.com/webmonitor/WebMonitor/blob/main/README.zh-CN.md)）是独立产品，分别维护版本、发布记录和部署契约。

产品的安装、配置、首次使用、升级与数据保留、安全边界、通知渠道和许可证信息，以对应应用仓库的 README、Compose 文件和实现为准。修改官网相关内容前必须核对这些来源，并遵守以下规则：

- 中英文首页与文档同步更新，不遗漏数据丢失风险、备份限制、凭据要求或采集边界等警告。
- 不用一个产品的镜像、版本、发布页、功能或许可证推断另一个产品；不承诺应用尚未实现的能力。
- 镜像标签、部署文件清单、环境变量和启动命令必须与实际发布内容一致；源码开发命令与独立部署流程不得混用。
- 演示环境是维护者单独运行的 WebMonitor 实例，不代表网站自身提供监控服务，也不保证持续可用。

## 本地开发与检查

使用 Node.js 22 和 npm：

```sh
npm ci
npm run dev
```

开发服务监听 `0.0.0.0:3000`，访问 `http://localhost:3000`。同一网络的其他设备也可能访问此端口。

提交前按需运行：

```sh
npm run typecheck
npm test
npm run build
npm run preview
```

`npm test` 使用 Node.js 内置测试运行器，检查双语章节与锚点、产品部署事实、四路由静态元信息、sitemap 和预渲染入口。`npm run build` 依次构建客户端与 SSR 入口，再把四个页面的正文预渲染到 `dist/` 中的 HTML；`dist-ssr/` 是中间产物。页面正文无需等待客户端 JavaScript 即可显示。

## GitHub Pages 发布

`.github/workflows/deploy.yml` 在推送到 `main` 或手动触发时运行，依次执行 Node.js 22 环境准备、`npm ci`、类型检查、测试和构建，然后上传 `dist/` 并部署到 GitHub Pages。

仓库的 **Settings → Pages → Build and deployment → Source** 必须选择 **GitHub Actions**。网站发布在 `https://webmonitor.github.io/` 根路径，Vite 不配置子路径 `base`。本地修改只有提交、推送并成功完成 Pages 部署后才会上线。

## 问题反馈与许可证

网站或文档问题请提交到[本仓库 Issues](https://github.com/webmonitor/webmonitor.github.io/issues)；产品问题请提交到对应应用仓库。两个应用的许可证及非商业使用限制见各自 README，本仓库 README 不替代产品授权条款。
