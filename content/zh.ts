import type { SiteContent } from './types';

export const zh: SiteContent = {
  lang: 'zh',
  htmlLang: 'zh-CN',
  title: 'WebMonitor | 网页监控与邮件提醒',
  description:
    'WebMonitor 是一个可自行部署的网页监控开源组织：盯住页面的价格、公告、库存与日期，变化时发送邮件提醒。',
  keywords: ['WebMonitor', '网页监控', '内容变化监测', '邮件提醒', '自部署', '开源', 'XPath', 'AI Agent'],
  nav: {
    github: 'GitHub',
    demo: '在线体验',
    docs: '文档',
    switchLabel: 'EN',
  },
  hero: {
    eyebrow: 'webmonitor.github.io',
    title: 'WebMonitor',
    intro:
      '把页面上的价格、公告、库存与截止日期交给它盯着，发生变化时通过邮件送达。两种监控方式：在可视化工作台里逐项配置，或者用一句话把需求说清楚。',
    primary: '在线体验',
    secondary: 'GitHub',
    icons: { github: 'GitHub', demo: '在线体验', docs: '使用文档' },
  },
  sections: {
    projectsEyebrow: 'Projects',
    projectsTitle: '两个项目',
    projectsDescription: '同一套目标，两种入口：手动配置的监控工作台，与对话创建的监控助手。',
    resourcesEyebrow: 'Resources',
    resourcesTitle: '相关入口',
    resourcesDescription: '演示站点、文档与用于验证采集器的模拟站点。',
    startEyebrow: 'Get Started',
    startTitle: '本地运行',
    startDescription: '公开 GHCR 镜像支持 amd64 与 arm64，直接拉取，无需登录；用仓库中的 Compose 文件完成部署。',
  },
  projects: [
    {
      title: 'WebMonitor',
      tag: '可视化工作台',
      href: 'https://github.com/webmonitor/WebMonitor',
      description:
        '用 XPath 框定页面上真正关心的区域，设置检查频率，内容变化时收到邮件。包含公开任务与订阅、任务与运行日志管理、中英双语界面，单体容器即可部署，不依赖 AI 服务或模型密钥。',
      stack: ['Python · FastAPI', 'Selenium', 'React', 'Docker'],
      license: 'CC BY-NC 4.0',
    },
    {
      title: 'WebMonitor-Agent',
      tag: '对话式监控',
      href: 'https://github.com/webmonitor/WebMonitor-Agent',
      description:
        '粘贴链接，用自然语言说明要看什么、多久看一次、什么条件下通知。助手先分析真实页面，生成配置草稿并预览一次实际采集结果，确认之后才创建版本化的监控。支持静态页面与浏览器渲染页面。',
      stack: ['Python 3.12 · FastAPI', 'Playwright', 'PostgreSQL', 'Next.js'],
      license: 'MIT',
    },
  ],
  resources: [
    {
      title: '在线体验',
      href: 'https://webmonitor.qfpqhyl.top/',
      description: '维护者单独运行的演示实例，可能暂时不可用。',
      external: true,
    },
    {
      title: '部署与配置文档',
      href: '/docs/',
      description: '两个项目的环境变量、启动步骤与使用流程，站内直接阅读。',
    },
    {
      title: 'WebMonitor 指南',
      href: '/docs/#webmonitor',
      description: '单容器部署、XPath 区域监控与邮件通知配置。',
    },
    {
      title: 'Agent 指南',
      href: '/docs/#agent',
      description: '模型服务配置、对话创建流程与采集范围限制。',
    },
    {
      title: 'mocksite',
      href: 'https://github.com/webmonitor/mocksite',
      description: '可控、确定性的模拟目标站点，用来验证采集器。',
      external: true,
    },
    {
      title: '组织主页与配置',
      href: 'https://github.com/webmonitor/.github',
      description: '组织介绍、标识资源与共享开发环境。',
      external: true,
    },
  ],
  quickStart: {
    agent: [
      'mkdir -p webmonitor-agent && cd webmonitor-agent',
      '# 按 /docs/#agent 下载部署文件，并按模板自行创建 .env',
      'docker compose up -d --wait',
    ],
    legacy: [
      'mkdir -p webmonitor && cd webmonitor',
      'curl -fsSLo compose.yaml https://raw.githubusercontent.com/webmonitor/WebMonitor/main/compose.yaml',
      '# 按 /docs/#webmonitor 的模板自行创建 .env，填入密钥与管理员密码',
      'docker compose up -d --wait',
    ],
    agentHint: '访问 http://localhost:8080；Agent 的 S3 与出口代理辅助镜像仍需本地构建。',
    legacyHint: '访问 http://localhost:8000；邮件账户在应用内配置，不需要模型服务。',
    note: '无需克隆仓库，也无需 docker login。两个项目都在自己的部署目录中运行相同启动命令；先下载所需文件并按模板创建 .env。Agent 数据服务为临时存储，原版 SQLite 默认位于容器内，长期运行前需配置持久存储与备份。',
    docsLink: '查看完整安装、升级与数据保留说明',
  },
  footerTagline: 'WebMonitor · 网页监控与邮件提醒',
  footerLink: 'github.com/webmonitor',
  docs: {
    title: 'WebMonitor 文档 | 公开镜像安装、配置与升级',
    description: '使用公开 GHCR 镜像部署 WebMonitor 与 WebMonitor-Agent，了解配置、通知、版本更新和数据保留限制。',
    eyebrow: 'Documentation',
    heading: '部署与使用',
    intro: '从选择项目到首次监控。使用公开 GHCR 应用镜像，无需克隆仓库；下载所需文件并按模板自行创建 .env 后，两个项目都用同一条命令启动，默认跟随稳定版。',
    contents: '目录',
    sections: [
      {
        id: 'overview', title: '选择项目', blocks: [
          { type: 'table', head: ['项目', '创建方式', '运行方式', '维护状态'], rows: [
            ['WebMonitor', '输入网址、XPath 与检查间隔', '单容器提供界面与 API，无需模型服务', '原版，维护与问题修复'],
            ['WebMonitor-Agent', '对话描述需求，核对预览后确认', '同一应用镜像运行 API/后台与前端，另有配套服务', '当前持续开发的产品'],
          ] },
          { type: 'paragraph', text: '两个项目独立部署。只跟踪某块区域的文字变化可选择 WebMonitor；需要数值阈值、列表条目规则或对话配置可选择 Agent。已有实例的用户直接登录，无需安装 Docker。' },
          { type: 'note', text: '在线演示由维护者单独运行，可能暂时不可用。它不是你本地部署的数据服务。' },
        ],
      },
      {
        id: 'images', title: '公开镜像与版本', blocks: [
          { type: 'paragraph', text: '宿主机需要 Docker Engine、Docker Compose 和用于下载部署文件的 curl，无需 Git。两个应用镜像均已公开，可匿名拉取，无需 GitHub 账户或 docker login。提供 linux/amd64 与 linux/arm64，由 Docker 自动选择。' },
          { type: 'code', title: '只下载镜像', code: 'docker pull ghcr.io/webmonitor/webmonitor-agent:1.0.0\ndocker pull ghcr.io/webmonitor/webmonitor:1.0.0', hint: 'pull 只下载镜像。启动还需要下面的 Compose 文件、配置和配套服务。' },
          { type: 'table', head: ['标签', '用途'], rows: [
            ['`1.0.0`', '选择具体发布版本，推荐部署时显式指定。'],
            ['`1.0`', '该次版本系列的发布标签，可能随补丁发布更新。'],
            ['`latest`', '跟随最新稳定发布，预发布不会移动它。'],
            ['`main`、`sha-*`', '开发或提交构建，不保证旧标签长期保留。'],
          ] },
          { type: 'note', text: '两个项目统一使用 compose.yaml，默认拉取 latest 稳定版，启动命令均为 docker compose up -d --wait。可在 .env 中设置 WEBMONITOR_IMAGE 固定版本。公开下载不改变许可证。' },
        ],
      },
      {
        id: 'webmonitor', title: '安装 WebMonitor', blocks: [
          { type: 'paragraph', text: '单个应用容器包含 React 界面、FastAPI API 与 Chromium。默认使用容器内 SQLite；不需要模型密钥，邮件账户在登录后配置。' },
          { type: 'code', title: '创建独立部署目录并下载 Compose', code: 'mkdir -p webmonitor\ncd webmonitor\ncurl -fsSLo compose.yaml https://raw.githubusercontent.com/webmonitor/WebMonitor/main/compose.yaml', hint: '无需克隆仓库。确认下载成功后，按下方模板自行创建 .env；已有文件不要覆盖。' },
          { type: 'code', title: '自行创建 .env', code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor:latest\nSECRET_KEY=\nADMIN_USERNAME=admin\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=\nDEBUG=false\nLOG_LEVEL=INFO', hint: '填写自己的邮箱与密码；SECRET_KEY 需为至少 32 字符的随机值。密码至少 6 字符、最多 72 个 UTF-8 字节。空值必须补全。保留现有 .env，不提交凭据。' },
          { type: 'table', head: ['在 .env 中设置', '说明'], rows: [
            ['`WEBMONITOR_IMAGE`', '默认 ghcr.io/webmonitor/webmonitor:latest；固定版本时可改为 :1.0.0。'],
            ['`SECRET_KEY`', '至少 32 字符的随机签名密钥。'],
            ['`ADMIN_EMAIL`、`ADMIN_USERNAME`', '初始管理员邮箱；用户名默认 admin。'],
            ['`ADMIN_PASSWORD`', '初始密码至少 6 字符，最多 72 个 UTF-8 字节。'],
            ['数据库', 'compose.yaml 固定使用 sqlite:///./data/webmonitor.db；改 .env 的 DATABASE_URL 不生效。其他数据库还需要驱动、引擎与部署配置调整。'],
          ] },
          { type: 'code', title: '配置完成后启动', code: 'docker compose up -d --wait\n# 打开 http://localhost:8000', hint: 'API 文档位于 http://localhost:8000/docs。' },
          { type: 'note', text: '默认没有数据卷。替换或删除容器会丢失账户、任务、邮件配置与历史。长期使用前为 /app/data 配置持久存储与备份；仅拉取镜像不会迁移数据。' },
          { type: 'link', label: 'WebMonitor 完整部署与开发说明', href: 'https://github.com/webmonitor/WebMonitor/blob/main/README.zh-CN.md' },
        ],
      },
      {
        id: 'webmonitor-usage', title: '使用 WebMonitor', blocks: [
          { type: 'list', ordered: true, items: [
            '登录后填写网页地址、XPath 与检查间隔，使用任务测试核对提取文字；测试不发送变化邮件。',
            '在应用内创建并测试自己的 SMTP 配置，再关联任务；不配置邮件也能采集和查看日志。',
            '启用任务，查看变化前后内容、运行记录与采集错误；需要共享时把任务设为实例内公开，让其他用户订阅。',
          ] },
          { type: 'paragraph', text: '首次成功的定时检查可能产生初始通知，后续检查按内容变化通知。界面支持中英文，公开任务和订阅仍受实例内账户权限约束。' },
        ],
      },
      {
        id: 'agent', title: '安装 WebMonitor-Agent', blocks: [
          { type: 'paragraph', text: '需要兼容 OpenAI Chat Completions 的模型服务。Compose 提供 postgres、s3、egress、api、web、proxy 六个服务；api 与 web 共用公开应用镜像，入口命令不同。S3 与出口代理辅助镜像仍使用下载的部署文件在本地构建。' },
          { type: 'code', title: '下载完整部署文件，无需克隆仓库', code: 'mkdir -p webmonitor-agent\ncd webmonitor-agent\n(\n  set -e\n  for file in compose.yaml .dockerignore deploy/browser-seccomp.json deploy/minio.Dockerfile deploy/minio-artifacts.json deploy/egress.Dockerfile deploy/egress/squid.conf deploy/egress/unbound.conf deploy/egress/entrypoint.sh deploy/proxy/nginx.conf; do\n    curl -fsSL --create-dirs "https://raw.githubusercontent.com/webmonitor/WebMonitor-Agent/main/$file" -o "$file"\n  done\n)', hint: '下载失败时先解决错误，不要启动。配置文件需保留相对目录；后续命令都在此目录运行。已有部署先备份文件再更新，保留 .env。' },
          { type: 'code', title: '自行创建 .env', code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor-agent:latest\nWEBMONITOR_HTTP_PORT=8080\nAPP_ORIGIN=http://localhost:8080\nDEVELOPMENT_MODE=true\nPOSTGRES_PASSWORD=\nSECRET_KEY=\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=\nOPENAI_API_KEY=\nOPENAI_BASE_URL=https://api.openai.com/v1\nOPENAI_MODEL=\nTARGET_POLICY=public\nSMTP_HOST=\nSMTP_PORT=465\nSMTP_USERNAME=\nSMTP_PASSWORD=\nSMTP_USE_SSL=true\nSMTP_STARTTLS=false\nMAIL_FROM=', hint: '补全数据库密码、至少 32 字符的随机 SECRET_KEY、自己的管理员邮箱与 12–128 字符密码，以及可用的模型配置。SMTP 可留空；启用邮件时再填写。不要把凭据提交到仓库。' },
          { type: 'table', head: ['在 .env 中设置', '说明'], rows: [
            ['`WEBMONITOR_IMAGE`', '默认 ghcr.io/webmonitor/webmonitor-agent:latest；固定版本时可改为 :1.0.0。'],
            ['`ADMIN_EMAIL`、`ADMIN_PASSWORD`', '初始管理员邮箱与密码；密码为 12–128 字符。'],
            ['`SECRET_KEY`、`POSTGRES_PASSWORD`', '至少 32 字符的随机签名密钥，以及数据库密码。'],
            ['`OPENAI_API_KEY`、`OPENAI_BASE_URL`、`OPENAI_MODEL`', '模型服务密钥、兼容接口地址与可用模型名称。'],
            ['`APP_ORIGIN`、`WEBMONITOR_HTTP_PORT`', '默认使用本机 8080；更改端口时同步修改访问源。'],
          ] },
          { type: 'code', title: '配置完成后启动', code: 'docker compose up -d --wait\n# 打开 http://localhost:8080', hint: '本地 HTTP 保留 DEVELOPMENT_MODE=true。初始管理员配置不会重置已有账户。' },
          { type: 'paragraph', text: '启用邮件需设置 SMTP_HOST、SMTP_PORT、SMTP_USERNAME、SMTP_PASSWORD 与 MAIL_FROM。SMTP_USE_SSL 和 SMTP_STARTTLS 必须恰好一个为 true，按邮件服务要求选择。管理员在应用内维护通知组与收件人。' },
          { type: 'note', text: '随附 PostgreSQL 与 MinIO 使用 tmpfs 临时存储，停止、重启或重建数据容器会丢数据。长期运行前更换为持久存储并建立备份；公开应用镜像不会改变这项限制。' },
          { type: 'link', label: 'Agent 完整部署、管理与开发说明', href: 'https://github.com/webmonitor/WebMonitor-Agent/blob/main/README.zh-CN.md' },
        ],
      },
      {
        id: 'agent-usage', title: '使用 Agent', blocks: [
          { type: 'list', ordered: true, items: [
            '新建对话，提供网页地址、关注内容、检查间隔与通知条件，例如每十分钟检查价格，低于指定值时通知。',
            '核对真实采集预览：提取字段、覆盖范围、变化规则、收件人与邮件样式。预览不会发送邮件。',
            '确认创建后才开始定时检查；在工作台查看事件、页面存档与运行记录，按需暂停、恢复或通过对话修改。',
          ] },
          { type: 'paragraph', text: '支持文本与关键词、数值变化与阈值、列表新增和更新；删除规则要求完整列表覆盖。浏览器采集保存截图。新成员通过管理员签发的邀请链接注册。' },
          { type: 'note', text: '首次成功采集只建立基准，不发变化通知。失败保留最后可信基准。邮件记录 sent 表示 SMTP 接受，不保证已进入收件箱。' },
        ],
      },
      {
        id: 'operations', title: '查看状态与更新版本', blocks: [
          { type: 'code', title: '通用状态与日志命令', code: 'docker compose ps\ndocker compose logs --tail=100', hint: '在各自部署目录执行；Agent 可追加 api web proxy，原版可追加 webmonitor 来选择服务。' },
          { type: 'paragraph', text: '升级前先阅读对应项目发布记录，备份数据与 .env，保存当前镜像版本。需要新部署文件时，按对应下载清单更新，并保留自己的 .env；在其中选择目标 WEBMONITOR_IMAGE 后执行更新命令。' },
          { type: 'code', title: '更新 Agent 应用服务', code: 'docker compose pull api web\ndocker compose up -d --wait api web', hint: '检查 Compose 与依赖配置变化；避免为更新应用而停止临时数据服务。' },
          { type: 'code', title: '更新 WebMonitor', code: 'docker compose pull webmonitor\ndocker compose up -d --wait webmonitor', hint: '此操作可能替换容器；默认 SQLite 无卷，先解决数据持久化与备份。' },
          { type: 'note', text: '回退时把 WEBMONITOR_IMAGE 改回仍可用的旧版本，再执行相同拉取与启动命令。两个项目均没有自动数据库迁移或降级机制；旧镜像不能保证兼容新数据，必要时恢复对应备份。' },
          { type: 'link', label: 'Agent 发布记录', href: 'https://github.com/webmonitor/WebMonitor-Agent/releases' },
          { type: 'link', label: 'WebMonitor 发布记录', href: 'https://github.com/webmonitor/WebMonitor/releases' },
        ],
      },
      {
        id: 'limits', title: '限制与开发入口', blocks: [
          { type: 'table', head: ['项目', '约定'], rows: [
            ['Agent 目标与间隔', '默认公网 HTTP/HTTPS 页面，检查间隔 1 分钟至 24 小时；不提供登录态页面监控。'],
            ['Agent 提取', '不支持 iframe 与 Shadow DOM 内的内容；以实际预览覆盖范围为准。'],
            ['浏览器采集', 'Agent 沙箱不可用时返回失败，不降级为无沙箱浏览器。'],
            ['邮件配置', 'Agent 使用部署级 SMTP 与通知组；WebMonitor 使用各用户在应用内保存的邮件账户。'],
            ['源码构建', '仅开发者需要克隆源码，再执行 docker compose -f compose.yaml -f compose.build.yaml up --build -d --wait；普通使用只下载部署文件。'],
          ] },
          { type: 'paragraph', text: 'mocksite 是独立的可控通知页，仍从源码构建，没有在这里发布的 GHCR 镜像。需要联调时，由采集方自行配置共享网络、目标许可与精确出口白名单；Agent 不提供 mocksite 专用覆盖文件。普通部署保持默认公网目标策略。' },
          { type: 'link', label: 'mocksite 使用与接口契约', href: 'https://github.com/webmonitor/mocksite' },
          { type: 'note', text: '不要把真实 .env、API 密钥、SMTP 密码、Cookie 或个人数据提交到仓库和问题反馈中。部署到公网前配置 HTTPS、持久存储与访问控制。' },
        ],
      },
      {
        id: 'licenses', title: '许可证与反馈', blocks: [
          { type: 'table', head: ['项目', '许可证', '使用条件'], rows: [
            ['WebMonitor-Agent', 'MIT', '允许商业使用、修改与分发，保留版权与许可声明。'],
            ['WebMonitor', 'CC BY-NC 4.0', '署名分享与修改，仅限非商业用途。'],
          ] },
          { type: 'paragraph', text: '公开镜像允许匿名下载，不改变许可证。问题请提交到对应项目，附复现步骤和脱敏页面。' },
          { type: 'link', label: 'WebMonitor GitHub 组织', href: 'https://github.com/webmonitor' },
        ],
      },
    ],
  },
};
