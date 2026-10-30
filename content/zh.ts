import type { SiteContent } from './types';

export const zh: SiteContent = {
  lang: 'zh',
  htmlLang: 'zh-CN',
  title: 'WebMonitor | 网页变化监控与邮件提醒',
  description:
    '盯住价格、库存、公告与截止日期：在可视化工作台里逐项配置，或一句话交给对话助手；页面变化时发邮件提醒。开源、可自行部署，普通安装无需克隆仓库。',
  keywords: ['WebMonitor', '网页监控', '网页变化提醒', '邮件通知', '自部署', '开源', 'XPath', '网页监控安装'],
  nav: {
    github: 'GitHub',
    demo: '在线体验',
    docs: '文档',
    switchLabel: 'EN',
  },
  hero: {
    eyebrow: '开源 · 可自行部署',
    title: 'WebMonitor',
    intro:
      '盯住价格、库存、公告和截止日期。你可以在可视化工作台里逐项填写，也可以用一句话把需求说清楚；真正变化时，邮件提醒你。',
    primary: '在线体验',
    secondary: 'GitHub',
    icons: { github: 'GitHub', demo: '在线体验', docs: '使用文档' },
  },
  sections: {
    projectsEyebrow: 'Projects',
    projectsTitle: '两种用法，选一个开始',
    projectsDescription: '同一件事——替你看页面——两种上手方式：逐项填写的监控工作台，和一句话交代清楚的对话助手。',
    resourcesEyebrow: 'Resources',
    resourcesTitle: '相关入口',
    resourcesDescription: '演示站点、安装文档与源码入口。',
    startEyebrow: 'Get Started',
    startTitle: '三步开始',
    startDescription:
      '准备 Docker，下载部署文件，按模板创建 .env，然后执行同一条启动命令。普通安装不需要克隆仓库，也不需要登录镜像仓库。',
  },
  projects: [
    {
      title: 'WebMonitor',
      tag: '可视化工作台',
      href: 'https://github.com/webmonitor/WebMonitor',
      description:
        '用 XPath 框定页面上真正关心的区域，设置检查频率，文字变化时收到邮件。任务、运行日志、公开订阅和邮件账户都在同一界面里管理，不需要模型服务。',
      stack: ['XPath 区域监控', '邮件通知', '公开任务与订阅'],
      license: 'CC BY-NC 4.0',
    },
    {
      title: 'WebMonitor-Agent',
      tag: '对话式监控',
      href: 'https://github.com/webmonitor/WebMonitor-Agent',
      description:
        '粘贴链接，用一句话说明看什么、多久看一次、什么情况下通知。助手先打开页面试采集，核对内容与收件人后再创建监控；价格阈值、补货和列表新增都能交给条件规则。',
      stack: ['对话创建', '条件通知', '截图与页面存档'],
      license: 'CC BY-NC 4.0',
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
      description: '从准备 Docker 到第一封提醒：安装、邮件、任务管理、排错与数据保留。',
    },
    {
      title: 'WebMonitor 指南',
      href: '/docs/#webmonitor',
      description: '下载 Compose、创建 .env、启动，并创建第一个监控任务。',
    },
    {
      title: 'Agent 指南',
      href: '/docs/#agent',
      description: '下载部署文件、配置模型服务，用对话创建第一个监控。',
    },
    {
      title: 'GitHub 组织',
      href: 'https://github.com/webmonitor',
      description: '源码、发布记录与问题反馈。',
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
      '# 按 /docs/#webmonitor 的模板自行创建 .env',
      'docker compose up -d --wait',
    ],
    agentHint:
      '打开 http://localhost:8080，用 .env 里的管理员邮箱和密码登录；还没有管理员时按文档创建。首次启动会在本地构建两个辅助镜像，需要几分钟。',
    legacyHint: '打开 http://localhost:8000，用 .env 里的用户名和密码登录；邮件在应用内配置。',
    note: '普通使用不需要克隆仓库，也不需要 docker login。两个项目都拉取公开的 latest 镜像，在自己的部署目录里用同一条命令启动。Agent 的数据库与页面存档使用临时存储，停止或重建数据容器会丢失数据；长期使用前请先看文档中的数据保留说明。',
    docsLink: '查看完整安装、首次监控与数据保留说明',
  },
  footerTagline: 'WebMonitor · 网页变化监控与邮件提醒',
  footerLink: 'github.com/webmonitor',
  docs: {
    title: 'WebMonitor 文档 | 安装、首次监控与邮件通知',
    description:
      '从选择项目到第一封变化邮件：准备 Docker、下载部署文件、创建 .env、启动服务，再完成首次监控、邮件配置、任务管理、故障排查与数据保留。',
    eyebrow: 'Documentation',
    heading: '安装与使用',
    intro:
      '先选一个项目，准备 Docker 和它需要的外部服务，然后按三步完成安装：下载文件、创建 .env、执行 docker compose up -d --wait。安装完成后照着步骤创建第一个监控，邮件、日常管理和排错都写在后面。',
    contents: '目录',
    sections: [
      {
        id: 'overview',
        title: '选择产品',
        blocks: [
          {
            type: 'table',
            head: ['项目', '你怎么用', '适合', '需要留意'],
            rows: [
              ['WebMonitor', '填写网址、XPath 和检查间隔', '只盯一块固定区域的文字变化；需要公开任务与订阅', '邮件由每位用户自己配置；无需模型服务'],
              ['WebMonitor-Agent', '用一句话说需求，核对真实预览后确认', '价格阈值、补货、公告新增；想在对话里调整', '需要模型服务；新成员由管理员发邀请'],
            ],
          },
          {
            type: 'paragraph',
            text: '两个项目各自独立部署，选一个开始就行。只关心某块文字是否变了，用 WebMonitor；要按“降价 10%”“缺货变有货”“列表新增”这类条件通知，用 Agent。已经拿到别人的实例地址和账号时，直接登录即可，不用安装 Docker。',
          },
          {
            type: 'note',
            text: '在线演示由维护者单独运行，可能暂时不可用；它不是你的部署，也不保存你的监控数据。',
          },
        ],
      },
      {
        id: 'images',
        title: '开始前准备',
        blocks: [
          {
            type: 'paragraph',
            text: '你只需要一台能运行 Docker 的电脑或服务器，以及用于下载部署文件的 curl。普通安装不用克隆仓库，也不用注册或登录镜像仓库。公开镜像同时支持 Intel/AMD 与 Apple Silicon，Docker 会自动选择。',
          },
          {
            type: 'table',
            head: ['项目', '还要准备', '安装后访问'],
            rows: [
              ['WebMonitor', '一个可发信的邮箱和它的 SMTP 信息（配置通知时用）', 'http://localhost:8000'],
              ['WebMonitor-Agent', '兼容 OpenAI Chat Completions 的模型服务：接口地址、密钥、模型名；邮件通知可选', 'http://localhost:8080'],
            ],
          },
          {
            type: 'paragraph',
            text: '镜像默认跟随最新稳定版 `latest`。想固定版本，把 `.env` 里的 `WEBMONITOR_IMAGE` 改成 `1.0.0` 这样的发布版本。两个项目最后都用 `docker compose up -d --wait` 启动，命令会等到健康检查通过才返回。',
          },
          {
            type: 'note',
            text: '安装前先确认 8000 或 8080 端口没有被别的程序占用。Agent 如果改了端口，还要把 `APP_ORIGIN` 改成相同的地址。',
          },
        ],
      },
      {
        id: 'webmonitor',
        title: '安装 WebMonitor',
        blocks: [
          {
            type: 'paragraph',
            text: 'WebMonitor 用一个容器同时提供网页界面和数据接口，自带 SQLite 与 Chromium。不需要模型密钥，邮件在登录后配置。',
          },
          {
            type: 'code',
            title: '第 1 步：新建部署目录并下载 Compose 文件',
            code: 'mkdir -p webmonitor\ncd webmonitor\ncurl -fsSLo compose.yaml https://raw.githubusercontent.com/webmonitor/WebMonitor/main/compose.yaml',
            hint: '不用克隆仓库。下载失败时先检查网络和命令输出，不要继续启动。',
          },
          {
            type: 'code',
            title: '第 2 步：在同目录自行创建 .env',
            code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor:latest\nSECRET_KEY=\nADMIN_USERNAME=admin\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=',
            hint: '把 SECRET_KEY 填成至少 32 字符的随机串，ADMIN_EMAIL 和 ADMIN_PASSWORD 换成自己的。密码至少 6 字符、最多 72 个 UTF-8 字节。不要把 .env 提交到仓库或发给别人。',
          },
          {
            type: 'table',
            head: ['在 .env 中填写', '说明'],
            rows: [
              ['`WEBMONITOR_IMAGE`', '默认 latest；想固定版本时改成 `ghcr.io/webmonitor/webmonitor:1.0.0`。'],
              ['`SECRET_KEY`', '至少 32 字符的随机串，用于登录令牌签名。'],
              ['`ADMIN_USERNAME`、`ADMIN_PASSWORD`', '初始管理员账号和密码；登录时用这个用户名，不是邮箱。'],
              ['`ADMIN_EMAIL`', '管理员邮箱，用于账户信息。'],
            ],
          },
          {
            type: 'code',
            title: '第 3 步：启动并打开',
            code: 'docker compose up -d --wait\n# 打开 http://localhost:8000',
            hint: '命令返回后打开页面。看到登录页，用 .env 里的 ADMIN_USERNAME 和 ADMIN_PASSWORD 登录。',
          },
          {
            type: 'paragraph',
            text: '登录后看到仪表板，就说明安装完成。左侧可以进入「监控任务」「监控日志」「邮件配置」和「公开任务」。如果 `--wait` 报错或迟迟不返回，先执行 `docker compose ps` 和 `docker compose logs --tail=100` 查看原因。',
          },
          {
            type: 'note',
            text: '默认没有数据卷。更换镜像、执行 docker compose down 或重建容器，都会从空数据库开始，账户、任务、邮件配置和日志一并丢失。长期使用前先看「数据保留与使用边界」。',
          },
          {
            type: 'link',
            label: 'WebMonitor 仓库与完整说明',
            href: 'https://github.com/webmonitor/WebMonitor/blob/main/README.zh-CN.md',
          },
        ],
      },
      {
        id: 'agent',
        title: '安装 WebMonitor-Agent',
        blocks: [
          {
            type: 'paragraph',
            text: 'Agent 需要兼容 OpenAI Chat Completions 的模型服务，用来理解你的描述并整理监控设置。安装会启动应用、数据库、页面存档和出站代理等一组容器；应用镜像直接拉取公开版本，另外两个辅助镜像会在首次启动时用下载的文件在本地构建。',
          },
          {
            type: 'code',
            title: '第 1 步：下载完整部署文件',
            code: 'mkdir -p webmonitor-agent\ncd webmonitor-agent\n(\n  set -e\n  for file in compose.yaml .dockerignore deploy/browser-seccomp.json deploy/minio.Dockerfile deploy/minio-artifacts.json deploy/egress.Dockerfile deploy/egress/squid.conf deploy/egress/unbound.conf deploy/egress/entrypoint.sh deploy/proxy/nginx.conf; do\n    curl -fsSL --create-dirs "https://raw.githubusercontent.com/webmonitor/WebMonitor-Agent/main/$file" -o "$file"\n  done\n)',
            hint: '不用克隆仓库。任一下载失败都会停下并报错，先解决再启动。目录结构要保持原样，之后的命令都在这个目录里执行。已有部署要更新时，先备份文件，保留自己的 .env。',
          },
          {
            type: 'code',
            title: '第 2 步：在同目录自行创建 .env',
            code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor-agent:latest\nWEBMONITOR_HTTP_PORT=8080\nAPP_ORIGIN=http://localhost:8080\nDEVELOPMENT_MODE=true\nPOSTGRES_PASSWORD=\nSECRET_KEY=\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=\nOPENAI_API_KEY=\nOPENAI_BASE_URL=https://api.openai.com/v1\nOPENAI_MODEL=\nSMTP_HOST=\nSMTP_PORT=465\nSMTP_USERNAME=\nSMTP_PASSWORD=\nSMTP_USE_SSL=true\nSMTP_STARTTLS=false\nMAIL_FROM=',
            hint: '填写数据库密码、至少 32 字符的随机 SECRET_KEY、自己的管理员邮箱和 12–128 字符密码，以及模型服务的密钥、接口地址和模型名。SMTP 可以留空，启用邮件时再填；SMTP_USE_SSL 与 SMTP_STARTTLS 必须恰好一个为 true。',
          },
          {
            type: 'table',
            head: ['在 .env 中填写', '说明'],
            rows: [
              ['`WEBMONITOR_IMAGE`', '默认 latest；想固定版本时改成 `ghcr.io/webmonitor/webmonitor-agent:1.0.0`。'],
              ['`POSTGRES_PASSWORD`、`SECRET_KEY`', '数据库密码，以及至少 32 字符的随机签名密钥。'],
              ['`ADMIN_EMAIL`、`ADMIN_PASSWORD`', '初始管理员账号；密码为 12–128 字符，登录时用邮箱。'],
              ['`OPENAI_API_KEY`、`OPENAI_BASE_URL`、`OPENAI_MODEL`', '模型服务的密钥、兼容接口地址和可用的模型名称。'],
              ['`APP_ORIGIN`、`WEBMONITOR_HTTP_PORT`', '默认本机 8080；改端口时同步修改访问地址。'],
            ],
          },
          {
            type: 'code',
            title: '第 3 步：启动并打开',
            code: 'docker compose up -d --wait\n# 打开 http://localhost:8080',
            hint: '首次启动要拉取镜像并本地构建辅助镜像，可能需要几分钟。--wait 等到健康检查通过才返回。',
          },
          {
            type: 'paragraph',
            text: '打开页面后，用 `.env` 里的 `ADMIN_EMAIL` 和 `ADMIN_PASSWORD` 登录，会看到对话工作台。如果还没有管理员账户，或需要邀请成员，看下面的「遇到问题」。',
          },
          {
            type: 'note',
            text: 'Agent 的数据库和页面存档使用临时内存存储。停止、重启或重建数据容器会丢失账户、监控、事件和已保存的页面证据；只重启应用服务不受影响。长期使用前先安排持久存储与备份。',
          },
          {
            type: 'link',
            label: 'WebMonitor-Agent 仓库与完整说明',
            href: 'https://github.com/webmonitor/WebMonitor-Agent/blob/main/README.zh-CN.md',
          },
        ],
      },
      {
        id: 'webmonitor-usage',
        title: 'WebMonitor：创建第一个监控',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '登录后打开「监控任务」，点「创建新任务」。',
              '填写任务名称、监控 URL、XPath 选择器和检查间隔（秒，最小 10，默认 300）。不确定 XPath 时先点「测试监控」，看到提取到的文字再继续；测试不会发邮件。',
              '决定是否公开任务、是否「启用监控」，然后点「创建任务」。',
              '到「监控日志」查看每次检查的时间、结果和新内容；仪表板会汇总任务数、最近变化和执行成功率。',
            ],
          },
          {
            type: 'paragraph',
            text: '首次成功的定时检查可能先发一封初始通知，之后只在文字变化时通知。任务不绑定邮件配置也会照常采集和记录日志，只是不发邮件。把任务设为公开后，同一实例的其他用户可以在「公开任务」里订阅，并用自己的邮件配置接收通知。',
          },
        ],
      },
      {
        id: 'agent-usage',
        title: 'Agent：创建第一个监控',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '登录后在左侧点「新对话」。',
              '把网址和要求一起说清楚：看什么、多久检查一次、什么条件下通知。例如：「监控这个页面的价格，降价 10% 时邮件提醒我。」',
              '助手会打开页面试采集一次，稍等它读取页面并整理监控设置。',
              '在「创建监控」卡片里核对采集到的内容、通知条件、收件人和邮件预览；不满意可以点「重新预览」。',
              '点「创建监控」，开始定时检查。',
            ],
          },
          {
            type: 'paragraph',
            text: '创建后，监控会出现在左侧「监控」列表。打开后可以看当前内容、最近检查、事件，以及浏览器采集留下的截图和页面存档；右上角有「暂停」「恢复」「立即检查」和「修改设置」。要改监控的内容或条件，回到对话里说明，重新核对预览后保存。',
          },
          {
            type: 'note',
            text: '第一次成功采集只用来建立基线，不会因为“页面有内容”就发变化邮件；从第二次采集开始比较。采集失败时保留上一次成功的内容作为比较依据。预览不会发送邮件。',
          },
        ],
      },
      {
        id: 'email',
        title: '配置邮件通知',
        blocks: [
          {
            type: 'paragraph',
            text: '两个项目的邮件配置方式不同：WebMonitor 由每位用户在应用里填写 SMTP 和收件人；Agent 的 SMTP 属于整套部署，收件人由管理员在通知组里维护。不配置邮件也能采集和查看变化，只是收不到提醒。',
          },
          {
            type: 'table',
            head: ['项目', '在哪里配置', '谁收到邮件'],
            rows: [
              ['WebMonitor', '登录后的「邮件配置」页', '该配置里填写的接收者邮箱'],
              ['WebMonitor-Agent', '部署目录的 .env，以及「通知」里的通知组', '所选通知组里的邮箱'],
            ],
          },
          {
            type: 'paragraph',
            text: '**WebMonitor：** 打开「邮件配置」，点「添加邮件配置」，填写配置名称、SMTP 服务器、SMTP 端口、发件人邮箱、SMTP 密码和接收者邮箱，按邮件服务商的要求勾选「使用 SSL 加密」。密码通常使用邮箱的应用专用密码。点「测试连接」确认能收到测试邮件，再创建或编辑任务，在「邮件配置」里选择这条配置。选「不发送通知」时任务照常采集，只是不发邮件。',
          },
          {
            type: 'paragraph',
            text: '**WebMonitor-Agent：** 在 `.env` 里填写 `SMTP_HOST`、`SMTP_PORT`、`SMTP_USERNAME`、`SMTP_PASSWORD` 和 `MAIL_FROM`，改完执行 `docker compose up -d --wait` 让配置生效。然后用管理员登录，打开「通知」→「通知组」，点「新建」，填写名称和收件人（每行一个邮箱，也可以用逗号或空格分隔）。创建或修改监控时，在「收件人」里选择通知组；一个监控可以通知多个邮箱。',
          },
          {
            type: 'note',
            text: '投递记录里的「已发送」表示邮件服务器已接收，不代表已经进入收件箱。没收到邮件时，先查垃圾邮件，再看「通知」页的投递记录和失败原因。',
          },
        ],
      },
      {
        id: 'manage',
        title: '日常管理任务',
        blocks: [
          {
            type: 'paragraph',
            text: '**WebMonitor** 的管理入口都在左侧导航里：',
          },
          {
            type: 'list',
            items: [
              '「监控任务」可以测试、编辑、暂停或启用、删除任务，列表里能看到检查间隔和绑定的邮件配置。',
              '「监控日志」按任务查看每次检查的状态、新内容和错误信息。',
              '「公开任务」与「我的订阅」用来分享和订阅实例内的任务；每位用户用自己的邮件配置接收通知。',
              '管理员还可以在「用户管理」里调整账户和订阅额度，在「黑名单管理」里限制普通用户可监控的域名。',
            ],
          },
          {
            type: 'paragraph',
            text: '**Agent** 在一个工作台里管理对话、监控和通知：',
          },
          {
            type: 'list',
            items: [
              '「监控」列表打开任一监控，查看当前内容、最近检查和事件；用「暂停」「恢复」「立即检查」「修改设置」控制它。',
              '「事件」记录变化、采集失败和恢复，可以只看「未读」，看完点「标为已读」。',
              '「通知」里维护通知组，并查看每封邮件的收件人、状态和失败原因。',
              '成员由管理员邀请；新成员用邀请链接注册，不能用公开注册。',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: '遇到问题',
        blocks: [
          {
            type: 'list',
            items: [
              '**启动命令报错或一直不返回：** 在部署目录执行 `docker compose ps` 和 `docker compose logs --tail=100`。常见原因是 `.env` 还有空值、端口被占用、模型配置不可用。修好后重新执行启动命令。',
              '**网页打不开：** 确认访问的是 http://localhost:8000（WebMonitor）或 http://localhost:8080（Agent），并确认容器正在运行。',
              '**WebMonitor 登录失败：** 登录用 `.env` 里的 `ADMIN_USERNAME`，不是邮箱。初始管理员只在数据库还没有管理员时创建；之后修改 `.env` 不会重置已有账户。',
              '**Agent 登录失败：** 用 `.env` 里的 `ADMIN_EMAIL` 和 `ADMIN_PASSWORD` 登录，密码要求 12–128 字符。',
              '**Agent 没有管理员，或新成员注册不了：** 在部署目录执行 `docker compose exec api webmonitor admin-create --email you@example.com` 创建管理员，或执行 `docker compose exec api webmonitor invite-create --email member@example.com --ttl-hours 24` 生成一次性邀请链接。链接过期或邮箱不匹配都不能用。',
              '**WebMonitor 提取不到内容：** 先用「测试监控」检查 XPath 是否选中了真正包含文字的元素；需要登录才能看到的内容无法直接监控。',
              '**Agent 预览失败或提示地址不允许：** 目标必须是公网 http/https 地址（80 或 443 端口）。站点打不开、拦爬虫、需要登录，或内容在 iframe / Shadow DOM 里时都可能失败；模型服务不可用也会让对话中断。',
              '**没有收到邮件：** WebMonitor 先在「邮件配置」点「测试连接」；Agent 检查 `.env` 的 SMTP 设置和通知组收件人。也看看垃圾邮件和投递记录。',
              '**更新后打不开或数据不对：** 两个项目都没有自动数据库迁移。先恢复对应备份，或把 `WEBMONITOR_IMAGE` 改回原来的版本再启动。',
            ],
          },
        ],
      },
      {
        id: 'operations',
        title: '更新版本',
        blocks: [
          {
            type: 'paragraph',
            text: '更新前先备份数据，并记下当前使用的镜像版本。把 `.env` 里的 `WEBMONITOR_IMAGE` 改成新版本，然后在各自的部署目录执行下面的命令。',
          },
          {
            type: 'code',
            title: 'WebMonitor：拉取并重建',
            code: 'docker compose pull\ndocker compose up -d --wait',
            hint: '只有一个应用服务，直接更新即可。',
          },
          {
            type: 'code',
            title: 'Agent：只更新应用服务',
            code: 'docker compose pull api web\ndocker compose up -d --wait api web',
            hint: '不要拉取或重建 postgres、s3：它们保存的是临时数据。更新后打开页面确认能登录、任务和监控还在；若你同时重建了数据容器，未备份的数据无法恢复。',
          },
          {
            type: 'paragraph',
            text: '需要回退时，把 `WEBMONITOR_IMAGE` 改回之前仍可用的版本，再执行对应项目的同样命令。没有数据库降级机制，旧版本不一定能读新版本写过的数据；必要时恢复更新前的备份。',
          },
          {
            type: 'link',
            label: 'WebMonitor 发布记录',
            href: 'https://github.com/webmonitor/WebMonitor/releases',
          },
          {
            type: 'link',
            label: 'Agent 发布记录',
            href: 'https://github.com/webmonitor/WebMonitor-Agent/releases',
          },
        ],
      },
      {
        id: 'limits',
        title: '数据保留与使用边界',
        blocks: [
          {
            type: 'paragraph',
            text: '两个项目都不提供自动备份或数据迁移工具。数据能不能留下来，取决于你有没有在容器之外保存它。',
          },
          {
            type: 'table',
            head: ['项目', '数据放在哪里', '什么情况下会丢'],
            rows: [
              ['WebMonitor', '容器内的 SQLite 文件 `/app/data/webmonitor.db`，默认没有数据卷', '执行 docker compose down、更换镜像或重建容器时，会从空数据库开始；docker compose restart 不会丢'],
              ['WebMonitor-Agent', 'PostgreSQL 与 MinIO 使用临时内存存储', '停止、重启或重建 postgres、s3 容器会丢失账户、监控、事件和页面存档；只重启 api 不受影响'],
            ],
          },
          {
            type: 'code',
            title: 'WebMonitor：更新前备份数据库',
            code: 'docker compose stop\ndocker cp webmonitor:/app/data/webmonitor.db ./webmonitor-backup.db\ndocker compose start',
            hint: '把备份放在部署目录之外。恢复时把文件放回容器的 /app/data/webmonitor.db。',
          },
          {
            type: 'note',
            text: '这不是“以后再说”的小问题：没有持久存储时，更新或清理容器都可能让账户、任务和通知记录消失；Agent 的临时存储还会在重启后清空。对外提供服务前，应把数据放到持久卷，建立自己的备份，并配置 HTTPS 与访问控制。',
          },
          {
            type: 'paragraph',
            text: '还有几项会直接影响能不能监控成功：',
          },
          {
            type: 'table',
            head: ['情况', '你会遇到什么'],
            rows: [
              ['Agent 只能访问公网页面', '内网、localhost、元数据地址和 80/443 以外的端口会被拒绝。'],
              ['Agent 检查频率', '间隔可设 1 分钟到 24 小时。'],
              ['iframe 与 Shadow DOM', '里面的内容不会被提取；预览会显示实际覆盖范围，以预览为准。'],
              ['浏览器采集', '浏览器沙箱不可用时这次采集直接失败，不会退回不安全的采集方式。'],
              ['通知渠道', '两个项目都只发送邮件，没有短信或 webhook。'],
            ],
          },
          {
            type: 'note',
            text: '不要把真实的 .env、API 密钥、SMTP 密码、Cookie 或页面上的个人信息提交到仓库和问题反馈里。',
          },
        ],
      },
      {
        id: 'licenses',
        title: '许可证与反馈',
        blocks: [
          {
            type: 'table',
            head: ['项目', '许可证', '使用条件'],
            rows: [
              ['WebMonitor-Agent', 'CC BY-NC 4.0', '署名、附许可链接并注明修改后，可分享与修改，仅限非商业用途。'],
              ['WebMonitor', 'CC BY-NC 4.0', '署名分享与修改，仅限非商业用途。'],
            ],
          },
          {
            type: 'paragraph',
            text: '遇到问题请提交到对应项目，附上复现步骤和去掉敏感信息的页面示例。',
          },
          {
            type: 'link',
            label: 'WebMonitor GitHub 组织',
            href: 'https://github.com/webmonitor',
          },
        ],
      },
    ],
  },
};
