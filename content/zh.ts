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
    startDescription: '两个项目都以 Docker 为第一运行方式，宿主机只需要 Docker Engine 与 Compose。',
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
      'git clone https://github.com/webmonitor/WebMonitor-Agent.git',
      'cd WebMonitor-Agent',
      'cp .env.example .env',
      'docker compose up --build --wait',
    ],
    legacy: [
      'git clone https://github.com/webmonitor/WebMonitor.git',
      'cd WebMonitor',
      'cp .env.example .env',
      'docker-compose up -d',
    ],
    agentHint: '启动后访问 http://localhost:8080',
    legacyHint: '启动后访问 http://localhost:8000',
    note: 'Agent 需要 PostgreSQL 与 S3 兼容存储，启动前请按 .env.example 设置数据库密码、SECRET_KEY 与管理账号；目前面向本地开发与评估，部署前请阅读项目文档中的数据保留说明。',
    docsLink: '完整部署与配置文档',
  },
  footerTagline: 'WebMonitor · 网页监控与邮件提醒',
  footerLink: 'github.com/webmonitor',
  docs: {
    title: 'WebMonitor 文档 | 部署、配置与使用',
    description: 'WebMonitor 与 WebMonitor-Agent 的部署步骤、配置项、使用流程与限制说明。',
    eyebrow: 'Documentation',
    heading: '文档',
    intro:
      '两个项目的部署步骤、配置项与使用流程。部署方式以 Docker Compose 为准，配置项以各自仓库的 `.env.example` 为最终依据。',
    contents: 'Contents',
    sections: [
      {
        id: 'overview',
        title: '概述',
        blocks: [
          {
            type: 'paragraph',
            text: 'WebMonitor 是一个可自行部署的网页监控组织。两个项目共享同一个目标：盯住网页上的一段内容，在它变化时通过邮件通知你。它们不抓取整页做全文比较，而是比较你指定的区域或条目。',
          },
          {
            type: 'table',
            head: ['项目', '创建方式', '采集方式', '状态'],
            rows: [
              ['WebMonitor', '填写网址、XPath 与检查间隔', 'Selenium 驱动的无头浏览器', '初代版本，维护与问题修复'],
              ['WebMonitor-Agent', '对话描述需求，预览后确认', 'HTTP 抓取 + Playwright 浏览器采集', '当前持续开发的版本'],
            ],
          },
          {
            type: 'note',
            text: '先想清楚要盯什么：只需要「某块区域文字变了就通知」，用 WebMonitor 更直接；需要「价格低于阈值」「列表新增一条」这类条件，或不想手写选择器，用 WebMonitor-Agent。',
          },
        ],
      },
      {
        id: 'what-to-watch',
        title: '可以关注什么',
        blocks: [
          {
            type: 'table',
            head: ['关注的内容', 'WebMonitor：选取的区域', 'Agent：可以这样描述'],
            rows: [
              ['价格与库存', '当前价格或库存状态', '「每 10 分钟检查这个商品，价格降到 200 元以下时通知我。」'],
              ['网站公告', '通知栏或新闻列表', '「每小时检查这个公告列表，有新公告就通知我。」'],
              ['版本发布', '发布标题或更新日志', '「发布新版本时发邮件告诉我。」'],
              ['报名截止日期', '可能调整的日期或说明', '「跟踪这个页面的报名截止日期，有变化就告诉我。」'],
            ],
          },
        ],
      },
      {
        id: 'webmonitor',
        title: 'WebMonitor 部署',
        blocks: [
          {
            type: 'paragraph',
            text: '单容器部署：FastAPI 同时提供 API 和前端静态页面，浏览器只访问一个地址。数据库默认使用容器内的 SQLite 文件，不依赖外部服务。',
          },
          {
            type: 'code',
            title: '准备',
            code: 'git clone https://github.com/webmonitor/WebMonitor.git\ncd WebMonitor\ncp .env.example .env',
            hint: '已有 .env 时保留原文件。',
          },
          {
            type: 'table',
            head: ['配置项', '说明'],
            rows: [
              ['`SECRET_KEY`', '必填。至少 32 字符的随机签名密钥，没有默认值。'],
              ['`ADMIN_EMAIL`', '首次启动创建的管理员邮箱地址。'],
              ['`ADMIN_PASSWORD`', '初始密码，至少 6 字符、最多 72 个 UTF-8 字节。为空且库中没有管理员时启动会失败。'],
              ['`ADMIN_USERNAME`', '管理员用户名，默认 `admin`。'],
              ['`DATABASE_URL`', '默认 `sqlite:///./data/webmonitor.db`，一般无需修改。'],
            ],
          },
          {
            type: 'code',
            title: '启动',
            code: 'docker compose up --build -d --wait\n# http://localhost:8000',
          },
          {
            type: 'paragraph',
            text: '打开 `localhost:8000`，用管理员账号登录后创建第一个任务。运行实例自带 API 文档：`localhost:8000/docs`。',
          },
          {
            type: 'note',
            text: '**保留数据：**默认部署把数据放在容器内。正式使用前请为 `/app/data` 添加持久数据卷，否则更换容器会丢失账户、监控任务和历史记录。',
          },
        ],
      },
      {
        id: 'webmonitor-usage',
        title: 'WebMonitor 使用',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '**选好内容。**填写网址、XPath 和检查间隔创建任务；使用测试功能确认提取到的正是你关心的文字。测试只预览内容，不发送邮件。',
              '**设置通知。**在应用内添加并测试 SMTP 邮件配置，再关联到任务。也可以不配置邮件，只在应用里查看变化。',
              '**启用监控。**按计划检查并记录结果；文字变化后，通知中会展示变化前后的内容。',
            ],
          },
          {
            type: 'paragraph',
            text: '工作台还可以：只看指定区域、查看检查历史与采集错误、使用自己的 SMTP 邮箱、把任务设为实例内公开供他人订阅、随时启用或停用任务，并切换中英文界面。',
          },
          {
            type: 'note',
            text: '首次成功的定时检查**可能**发送初始通知；之后的检查只在内容变化时通知。',
          },
        ],
      },
      {
        id: 'agent',
        title: 'WebMonitor-Agent 部署',
        blocks: [
          {
            type: 'paragraph',
            text: '需要 Docker Engine、Docker Compose，以及一个兼容 OpenAI Chat Completions 的模型服务。邮件提醒还需要可用的 SMTP 服务；采集与页面存档依赖 PostgreSQL 与 S3 兼容存储，随附 Compose 已包含两者。',
          },
          {
            type: 'code',
            title: '准备',
            code: 'git clone https://github.com/webmonitor/WebMonitor-Agent.git\ncd WebMonitor-Agent\ncp .env.example .env',
            hint: '已有 .env 时保留原文件。',
          },
          {
            type: 'table',
            head: ['配置项', '说明'],
            rows: [
              ['`ADMIN_EMAIL`、`ADMIN_PASSWORD`', '初始管理员邮箱与密码，密码为 12–128 字符。'],
              ['`SECRET_KEY`', '至少 32 字符的随机密钥。'],
              ['`POSTGRES_PASSWORD`', '数据库密码。'],
              ['`OPENAI_API_KEY`', '模型服务的密钥。'],
              ['`OPENAI_BASE_URL`', '兼容 Chat Completions 的服务地址。'],
              ['`OPENAI_MODEL`', '实际可用的模型名称。'],
              ['`SMTP_HOST`、`SMTP_PORT`', '邮件服务地址与端口；不配置则不发邮件。'],
              ['`SMTP_USERNAME`、`SMTP_PASSWORD`', 'SMTP 认证信息。'],
              ['`MAIL_FROM`', '发件人地址。'],
              ['`SMTP_USE_SSL`、`SMTP_STARTTLS`', '必须恰有一个为 `true`，按邮件服务选择。'],
            ],
          },
          {
            type: 'code',
            title: '启动',
            code: 'docker compose up --build --wait\n# http://localhost:8080',
            hint: '首次启动在没有用户时自动创建管理员；修改配置不会重置已有账户。',
          },
          {
            type: 'paragraph',
            text: '默认只监听本机。更改端口时同步调整 `WEBMONITOR_HTTP_PORT` 与 `APP_ORIGIN`；本地 HTTP 部署需保留 `DEVELOPMENT_MODE=true`。',
          },
          {
            type: 'note',
            text: '**仅用于试用与开发：**随附部署的 PostgreSQL、MinIO 存储为临时存储，停止、重启或重建数据容器会丢失账户、监控与历史记录。长期使用前需配置持久存储与备份。',
          },
        ],
      },
      {
        id: 'agent-usage',
        title: 'Agent 使用',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '**描述需求。**新建对话，给出网页地址，说明要看什么、多久检查一次、什么情况下通知。',
              '**核对预览。**助手打开真实页面并执行一次实际采集，确认提取内容、检查范围、通知规则、收件人与邮件样式。',
              '**确认启用。**点击「创建监控」后才开始定时检查；之后可在工作台查看变化、暂停或恢复，也可以通过对话调整需求。',
            ],
          },
          {
            type: 'paragraph',
            text: '通知条件支持文本与关键词、数值变化与阈值、列表新增与更新；确认完整采集列表后，也可以监控条目删除。变更记录可对照变化前后的内容，查看当次采集保存的页面存档，浏览器采集还会留下截图。收件人来自管理员维护的通知组，一项监控可以通知多个邮箱。',
          },
          {
            type: 'paragraph',
            text: '新成员需要管理员签发的邀请链接。已有部署时，直接使用管理员提供的地址登录即可，无需自行部署。',
          },
          {
            type: 'note',
            text: '首次成功检查会记录初始内容作为比较基准，**不发送**变化通知；预览同样不发邮件。只有真正满足通知规则的后续变化才会触发提醒。投递记录中的 `sent` 表示邮件服务已接收，不代表目标收件箱已经收到。',
          },
        ],
      },
      {
        id: 'limits',
        title: '限制与约定',
        blocks: [
          {
            type: 'table',
            head: ['项目', '限制'],
            rows: [
              ['目标页面', '仅支持公网 HTTP/HTTPS 页面；需要登录或内网访问的页面不在范围内。'],
              ['Agent 检查间隔', '1 分钟至 24 小时。'],
              ['Agent 提取范围', 'iframe 与 Shadow DOM 内的内容暂不支持提取；预览会说明本次实际采集的范围与限制。'],
              ['采集失败', '保留上一次成功的内容作为比较依据，失败不会覆盖基准。'],
              ['邮件发送', '需要可用的 SMTP 服务；`SMTP_USE_SSL` 与 `SMTP_STARTTLS` 必须恰有一个为 `true`。'],
              ['演示站点', '由维护者单独运行，可能暂时不可用，不适合作为长期依赖。'],
            ],
          },
        ],
      },
      {
        id: 'licenses',
        title: '许可证',
        blocks: [
          {
            type: 'table',
            head: ['项目', '许可证', '说明'],
            rows: [
              ['WebMonitor', 'CC BY-NC 4.0', '可署名分享与修改，仅限非商业用途。'],
              ['WebMonitor-Agent', 'MIT', '允许使用、修改与分发，包括商业用途；需保留版权与许可声明。'],
            ],
          },
          { type: 'paragraph', text: '源码与问题反馈：' },
          { type: 'link', label: 'github.com/webmonitor', href: 'https://github.com/webmonitor' },
        ],
      },
    ],
  },
};
