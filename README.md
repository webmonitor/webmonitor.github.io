# WebMonitor 官网

[中文首页](https://webmonitor.github.io/) · [English](https://webmonitor.github.io/en/) · [使用文档](https://webmonitor.github.io/docs/) · [组织主页](https://github.com/webmonitor)

本仓库维护 WebMonitor 的中英文首页与部署文档。网站由 React、TypeScript、Vite 和 Base UI 构建，构建时预渲染为静态 HTML，通过 GitHub Pages 发布；不运行监控任务，也不保存应用账户或凭据。

## 页面与语言

| 内容 | 中文 | English |
| --- | --- | --- |
| 首页 | `/` | `/en/` |
| 文档 | `/docs/` | `/en/docs/` |

语言由 URL 决定。导航中的语言按钮跳到当前页面的另一语言版本，不依赖 Cookie。路径与语言映射集中在 `config/routes.ts`，服务端预渲染和客户端使用相同规则。

文档面向两个独立产品：

- [WebMonitor-Agent](https://github.com/webmonitor/WebMonitor-Agent)：通过对话创建监控，预览后确认；一个应用镜像供 API/后台和前端两个服务使用。
- [WebMonitor](https://github.com/webmonitor/WebMonitor)：输入 URL、XPath 与检查间隔；单容器同时提供界面与 API。

[在线演示](https://webmonitor.qfpqhyl.top/)是维护者单独运行的 WebMonitor 实例，可能暂时不可用。

## 文档发布约定

两个应用镜像已在 GHCR 公开，用户可匿名拉取，无需 GitHub 账户或 `docker login`：

```sh
docker pull ghcr.io/webmonitor/webmonitor-agent:1.0.2
docker pull ghcr.io/webmonitor/webmonitor:1.0.2
```

官网安装入口统一为独立部署目录：直接下载所需 `compose.yaml` 与配套文件，按文档内模板自行创建 `.env`，不要求克隆仓库或下载源码。两个产品均以 `docker compose up -d --wait` 启动，默认拉取 `latest`；可在 `.env` 中设置完整 `WEBMONITOR_IMAGE` 固定版本。应用镜像只随版本标签发布，`latest` 跟随稳定版。

修改官网文档时，同时维护以下事实：

- Agent 应用只有一个镜像；S3 和出口代理辅助镜像仍用下载的部署文件在本地构建。下载清单须包含完整代理、DNS、入口脚本、seccomp、Dockerfile 和 `.dockerignore`，并保留相对目录。
- Agent 随附 PostgreSQL 与 MinIO 为临时存储；原版 SQLite 默认位于容器内，未挂载数据卷。升级说明必须提示数据保留与备份限制。
- 普通启动、日志与更新命令无需额外 `-f`。源码开发才克隆仓库，并加载 `compose.build.yaml`。`.env` 模板分别给出所需变量，密钥和密码由用户自行填写，已有文件不能覆盖。
- 两个产品分别维护版本与发布记录。改版本示例时，同步中英文内容；不要用 Agent 的发布页代表原版发布页。
- WebMonitor-Agent 与 WebMonitor 均采用 CC BY-NC 4.0，仅限非商业用途。
- mocksite 从源码构建，没有 GHCR 镜像。Agent 不提供 mocksite 专用覆盖文件；联调网络与出口许可由采集方维护。

部署契约以各产品的 Compose、配置与实现为依据；网站重述这些契约，不能添加尚未实现的能力。完整说明见 [Agent 中文 README](https://github.com/webmonitor/WebMonitor-Agent/blob/main/README.zh-CN.md)与 [WebMonitor 中文 README](https://github.com/webmonitor/WebMonitor/blob/main/README.zh-CN.md)。

## 修改位置

| 文件 | 职责 |
| --- | --- |
| `content/zh.ts`、`content/en.ts` | 首页、快速开始与完整文档的两套内容，结构与章节标识应保持对应 |
| `content/types.ts` | `SiteContent`、文档区块与资源条目契约 |
| `content/index.ts` | 按语言选择内容 |
| `config/routes.ts` | 路由、语言与切换链接 |
| `config/site.ts` | 组织、演示和 Logo 等共享 URL |
| `components/DocsPage.tsx` | 按内容数据渲染文档、表格、代码和目录 |
| `components/Rich.tsx` | 行内代码与强调文本 |
| 四个路由的 `index.html` | 静态标题、描述、canonical、hreflang、Open Graph 与 JSON-LD |
| `entry-server.tsx`、`scripts/prerender.mjs` | 构建时生成页面正文 |
| `public/robots.txt`、`public/sitemap.xml` | 抓取入口和多语言站点地图 |

修改文档标题与简介时，同步 `docs/index.html`、`en/docs/index.html` 的静态元信息。修改首页主题时，同步根 `index.html` 与 `en/index.html`。新增章节需检查站内锚点；不要让删除的章节留下失效入口。

样式在构建期生成，不依赖运行时 Tailwind CDN 脚本。HTML 仍引用 Google Fonts，字体访问受用户网络影响；不要把网站描述为完全离线。

## 本地开发

使用与发布流程一致的 Node.js 22 和 npm，在本仓库目录执行：

```sh
npm ci
npm run dev
```

开发服务监听 `0.0.0.0:3000`，浏览器访问 `http://localhost:3000`；同一网络的其他设备可能访问该开发端口。

维护者需要时可执行以下命令：

```sh
npm run typecheck
npm run build
npm run preview
```

`build` 依次构建客户端、构建 SSR 入口，再执行预渲染。`dist/` 为发布产物，`dist-ssr/` 为预渲染使用的中间产物；两者都不应手工编辑。四个页面的正文在生成的 HTML 中，无需等待客户端 JavaScript 才能出现。站点地图的 `lastmod` 应反映实际页面维护日期。

## GitHub Pages 发布

`.github/workflows/deploy.yml` 在推送 `main` 或手工触发时运行：安装 Node.js 22、`npm ci`、类型检查、构建，上传 `dist/` 并部署 Pages。

仓库 Settings → Pages → Build and deployment → Source 需选择 **GitHub Actions**。网站位于 `https://webmonitor.github.io/` 根路径，当前 Vite 配置不设置子路径 `base`。

本地文档修改不会自动上线；只有提交、推送并由 Pages 工作流部署后，线上内容才会更新。
