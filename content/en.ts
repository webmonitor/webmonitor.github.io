import type { SiteContent } from './types';

export const en: SiteContent = {
  lang: 'en',
  htmlLang: 'en',
  title: 'WebMonitor | Web change monitoring and alerts',
  description:
    'Watch prices, stock, announcements and deadlines with an XPath dashboard or a conversational assistant, and review the evidence behind each change. Get email alerts, or HTTPS Webhooks with Agent. Open source, self-hostable, and no clone needed for a normal install.',
  keywords: [
    'WebMonitor',
    'web monitoring',
    'page change alerts',
    'email notifications',
    'HTTPS Webhook',
    'self-hosted',
    'open source',
    'XPath',
  ],
  nav: {
    github: 'GitHub',
    demo: 'Live demo',
    docs: 'Docs',
    switchLabel: '中文',
  },
  hero: {
    eyebrow: 'Open source · self-hosted',
    title: 'WebMonitor',
    headline: 'A page changes. You get the evidence.',
    intro:
      'Watch prices, stock, announcements and deadlines. Select a region with XPath or describe your request in one sentence; compare before and after, then receive email or, with Agent, an HTTPS Webhook.',
    primary: 'Live demo',
    secondary: 'GitHub',
    preview: {
      label: 'Agent monitor',
      counter: '#12',
      url: 'shop.maruya-store.jp/p/8842',
      interval: 'Deployment default',
      selector: 'Notify when the price drops',
      lastCheck: 'Last check',
      lastCheckTime: '09:12',
      change: 'Change detected',
      changeTime: '09:12',
      beforeLabel: 'Before',
      afterLabel: 'After',
      before: '¥1,299',
      after: '¥1,149',
      changeNote: '¥150 below the last check',
      evidenceLabel: 'Change evidence',
      evidenceValue: 'Text comparison · 09:12',
      deliveryLabel: 'Notification delivered',
      deliveryTarget: 'Email · HTTPS Webhook',
      deliverySubject: 'Price change: ¥1,299 → ¥1,149',
    },
  },
  sections: {
    projectsTitle: 'Two ways to start',
    projectsDescription:
      'Both watch prices, stock, announcements and deadlines. WebMonitor selects an XPath region and sends email; Agent turns a conversation into conditions and supports email and HTTPS Webhooks.',
    resourcesTitle: 'Where to go next',
    resourcesDescription: 'The demo, the setup guide and the source.',
    startTitle: 'Three steps',
    startDescription:
      'Prepare Docker, download the deployment files, create .env from the template, then run the same startup command. A normal install needs no repository clone and no registry login.',
  },
  projects: [
    {
      title: 'WebMonitor',
      tag: 'Visual dashboard',
      href: 'https://github.com/webmonitor/WebMonitor',
      description:
        'Select the part of the page you actually care about with XPath, choose how often to check it, and get an email when the text changes. Tasks, run logs, public subscriptions and mail settings all live in one interface; no model service is needed.',
      stack: ['XPath region monitoring', 'Email alerts', 'Public tasks and subscriptions'],
      license: 'CC BY-NC 4.0',
    },
    {
      title: 'WebMonitor-Agent',
      tag: 'Conversational monitoring',
      href: 'https://github.com/webmonitor/WebMonitor-Agent',
      description:
        'Paste a link and say what to watch and when to notify you. The assistant opens the page for a real sample first; review the content and delivery method, then create the monitor. Price thresholds, restocks and new list entries are handled by condition rules.',
      stack: ['Create by chat', 'Conditional alerts', 'HMAC Webhooks and test delivery', 'MCP / PAT', 'Screenshots and page archives'],
      license: 'CC BY-NC 4.0',
    },
  ],
  resources: [
    {
      title: 'Live demo',
      href: 'https://webmonitor.qfpqhyl.top/',
      description: 'A separate demo instance run by the maintainer; it may be unavailable.',
      external: true,
    },
    {
      title: 'Setup and configuration guide',
      href: '/en/docs/',
      description: 'From preparing Docker to your first alert: install, email and Webhooks, task management, troubleshooting and data retention.',
    },
    {
      title: 'WebMonitor guide',
      href: '/en/docs/#webmonitor',
      description: 'Download Compose, create .env, start it, and create your first monitoring task.',
    },
    {
      title: 'Agent guide',
      href: '/en/docs/#agent',
      description: 'Download the deployment files, configure a model service, and create your first monitor by chat.',
    },
    {
      title: 'Agent integrations and operations',
      href: '/en/docs/#mcp',
      description: 'The actual boundaries of MCP/PAT, local-development Kubernetes and automatic retention cleanup.',
    },
    {
      title: 'GitHub organization',
      href: 'https://github.com/webmonitor',
      description: 'Source code, release notes and issue tracking.',
      external: true,
    },
  ],
  quickStart: {
    agent: [
      'mkdir -p webmonitor-agent && cd webmonitor-agent',
      'BASE=https://raw.githubusercontent.com/webmonitor/WebMonitor-Agent/main',
      'for file in compose.yaml .dockerignore \\',
      '  deploy/browser-seccomp.json deploy/minio.Dockerfile \\',
      '  deploy/minio-artifacts.json deploy/egress.Dockerfile \\',
      '  deploy/egress/squid.conf \\',
      '  deploy/egress/entrypoint.sh deploy/proxy/nginx.conf; do',
      '  curl -fsSL --create-dirs "$BASE/$file" -o "$file" || exit 1',
      'done',
      '# Create .env from the template at /en/docs/#agent',
      'docker compose up -d --wait',
    ],
    legacy: [
      'mkdir -p webmonitor && cd webmonitor',
      'curl -fsSLo compose.yaml https://raw.githubusercontent.com/webmonitor/WebMonitor/main/compose.yaml',
      '# Create .env from the template at /en/docs/#webmonitor',
      'docker compose up -d --wait',
    ],
  },
  footerTagline: 'WebMonitor · web change monitoring and alerts',
  footerLink: 'github.com/webmonitor',
  docs: {
    title: 'WebMonitor Docs | Install, create a monitor, configure alerts',
    description:
      'From picking a project to your first change alert: prepare Docker, download the deployment files, create .env, start the service, then create a monitor, configure email or an Agent HTTPS Webhook, manage tasks, troubleshoot and understand data retention.',
    keywords: ['WebMonitor docs', 'web monitoring setup', 'Docker deployment', 'email alerts', 'HTTPS Webhook', 'WebMonitor-Agent', 'data backup'],
    heading: 'Setup and operations manual',
    intro:
      'Pick a project, prepare Docker and whatever external service it needs, then install it in three steps: download the files, create .env, and run docker compose up -d --wait. Follow the manual to create your first monitor and configure email or an Agent HTTPS Webhook; day-to-day management, troubleshooting and data boundaries come next.',
    contents: 'Contents',
    sections: [
      {
        id: 'overview',
        title: 'Choose a project',
        blocks: [
          {
            type: 'table',
            head: ['Project', 'How you use it', 'Best for', 'Keep in mind'],
            rows: [
              ['WebMonitor', 'Enter a URL, XPath and check interval', 'Text changes in one fixed page region; public tasks and subscriptions', 'Each user configures their own email; no model service'],
              ['WebMonitor-Agent', 'Describe it in one sentence, review a real preview, confirm', 'Price thresholds, restocks, new announcements; changes made in chat', 'Needs a model service; an admin invites new members'],
            ],
          },
          {
            type: 'paragraph',
            text: 'The two projects deploy independently, so pick one to start. If you only care whether a block of text changed, use WebMonitor. If you want alerts such as “notify me when the price drops 10%”, “out of stock becomes available” or “a new list entry appears”, use the Agent. If someone already gave you an instance URL and an account, just sign in — no Docker needed.',
          },
          {
            type: 'note',
            text: 'The live demo is run separately by the maintainer, may be unavailable, and does not store your monitors.',
          },
        ],
      },
      {
        id: 'images',
        title: 'Before you start',
        blocks: [
          {
            type: 'paragraph',
            text: 'You need a computer or server that can run Docker, plus curl to download the deployment files. A normal install needs no repository clone and no registry login. The public images support both Intel/AMD and Apple Silicon; Docker picks the right one automatically.',
          },
          {
            type: 'table',
            head: ['Project', 'Also prepare', 'After install, open'],
            rows: [
              ['WebMonitor', 'A mailbox that can send mail, plus its SMTP details (used for notifications)', 'http://localhost:8000'],
              ['WebMonitor-Agent', 'A model service compatible with OpenAI Chat Completions: API URL, key and model name; notifications are optional', 'http://localhost:8080'],
            ],
          },
          {
            type: 'paragraph',
            text: 'Images follow the latest stable release, `latest`, by default. To pin a release, set `WEBMONITOR_IMAGE` in `.env` to a version such as `1.0.0`. Both projects start with `docker compose up -d --wait`, which returns only after the health checks pass.',
          },
          {
            type: 'note',
            text: 'Make sure nothing else is using port 8000 or 8080. If you change the Agent port, change `APP_ORIGIN` to the same address.',
          },
        ],
      },
      {
        id: 'webmonitor',
        title: 'Install WebMonitor',
        blocks: [
          {
            type: 'paragraph',
            text: 'WebMonitor runs as one container that serves both the web interface and the API, with SQLite and Chromium included. It needs no model key; configure email after signing in.',
          },
          {
            type: 'code',
            title: 'Step 1: create a deployment directory and download Compose',
            code: 'mkdir -p webmonitor && cd webmonitor\ncurl -fsSLo compose.yaml \\\n  https://raw.githubusercontent.com/webmonitor/WebMonitor/main/compose.yaml',
            hint: 'If the download fails, check the network and the command output before starting.',
          },
          {
            type: 'code',
            title: 'Step 2: create your own .env in the same directory',
            code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor:latest\nSECRET_KEY=\nADMIN_USERNAME=admin\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=',
            hint: 'Set SECRET_KEY to a random string of at least 32 characters, and replace ADMIN_EMAIL and ADMIN_PASSWORD with your own. Passwords need at least 6 characters and at most 72 UTF-8 bytes. Never commit .env or send it to anyone.',
          },
          {
            type: 'table',
            head: ['Set in .env', 'What it means'],
            rows: [
              ['`WEBMONITOR_IMAGE`', 'Defaults to latest; to pin a release, use `ghcr.io/webmonitor/webmonitor:1.0.3`.'],
              ['`SECRET_KEY`', 'A random string of at least 32 characters used to sign sign-in tokens.'],
              ['`ADMIN_USERNAME`, `ADMIN_PASSWORD`', 'The initial admin account; sign in with this username, not the email.'],
              ['`ADMIN_EMAIL`', 'The administrator email stored on the account.'],
            ],
          },
          {
            type: 'code',
            title: 'Step 3: start it and open the page',
            code: 'docker compose up -d --wait\n# Open http://localhost:8000',
            hint: 'When the command returns, open the page. You should see the sign-in screen; use ADMIN_USERNAME and ADMIN_PASSWORD from .env.',
          },
          {
            type: 'paragraph',
            text: 'If you reach the dashboard, the install worked. The sidebar leads to Monitors, Monitor logs, Email settings and Public tasks. If `--wait` fails or never returns, run `docker compose ps` and `docker compose logs --tail=100` to see why.',
          },
          {
            type: 'note',
            text: 'There is no data volume by default. Changing the image, running docker compose down or recreating the container starts from an empty database, losing accounts, tasks, mail settings and logs. Read “Data retention and usage boundaries” before long-term use.',
          },
          {
            type: 'link',
            label: 'WebMonitor repository and full guide',
            href: 'https://github.com/webmonitor/WebMonitor#readme',
          },
        ],
      },
      {
        id: 'agent',
        title: 'Install WebMonitor-Agent',
        blocks: [
          {
            type: 'paragraph',
            text: 'The Agent needs a model service compatible with OpenAI Chat Completions to understand your request and prepare monitor settings. The install starts a group of containers: the app, a database, page-archive storage and an egress proxy. The application image is pulled from the public registry; two helper images are built locally from the downloaded files on first start.',
          },
          {
            type: 'code',
            title: 'Step 1: download the complete set of deployment files',
            code: 'mkdir -p webmonitor-agent\ncd webmonitor-agent\n(\n  set -e\n  BASE=https://raw.githubusercontent.com/webmonitor/WebMonitor-Agent/main\n  for file in compose.yaml .dockerignore \\\n    deploy/browser-seccomp.json deploy/minio.Dockerfile \\\n    deploy/minio-artifacts.json deploy/egress.Dockerfile \\\n    deploy/egress/squid.conf \\\n    deploy/egress/entrypoint.sh deploy/proxy/nginx.conf; do\n    curl -fsSL --create-dirs "$BASE/$file" -o "$file"\n  done\n)',
            hint: 'Any failed download stops the loop with an error; fix it before starting. Keep the directory layout as is and run later commands here. When updating an existing deployment, back up the files first and keep your .env.',
          },
          {
            type: 'code',
            title: 'Step 2: create your own .env in the same directory',
            code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor-agent:latest\nWEBMONITOR_HTTP_PORT=8080\nAPP_ORIGIN=http://localhost:8080\nDEVELOPMENT_MODE=true\nPOSTGRES_PASSWORD=\nSECRET_KEY=\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=\nOPENAI_API_KEY=\nOPENAI_BASE_URL=https://api.openai.com/v1\nOPENAI_MODEL=\nSMTP_HOST=\nSMTP_PORT=465\nSMTP_USERNAME=\nSMTP_PASSWORD=\nSMTP_USE_SSL=true\nSMTP_STARTTLS=false\nMAIL_FROM=',
            hint: 'Fill in the database password, a random SECRET_KEY of at least 32 characters, your admin email and a 12–128 character password, plus the model API key, base URL and model name. SMTP may stay blank until you enable email; exactly one of SMTP_USE_SSL and SMTP_STARTTLS must be true.',
          },
          {
            type: 'table',
            head: ['Set in .env', 'What it means'],
            rows: [
              ['`WEBMONITOR_IMAGE`', 'Defaults to latest; to pin a release, use `ghcr.io/webmonitor/webmonitor-agent:1.1.0`.'],
              ['`POSTGRES_PASSWORD`, `SECRET_KEY`', 'The database password, and a random signing key of at least 32 characters.'],
              ['`ADMIN_EMAIL`, `ADMIN_PASSWORD`', 'The initial admin account; the password is 12–128 characters and you sign in with the email.'],
              ['`OPENAI_API_KEY`, `OPENAI_BASE_URL`, `OPENAI_MODEL`', 'The model service key, compatible API URL and an available model name.'],
              ['`APP_ORIGIN`, `WEBMONITOR_HTTP_PORT`', 'Local port 8080 by default; update the origin when you change the port.'],
            ],
          },
          {
            type: 'code',
            title: 'Step 3: start it and open the page',
            code: 'docker compose up -d --wait\n# Open http://localhost:8080',
            hint: 'The first start pulls images and builds the helper images locally, which can take a few minutes. --wait returns only after the health checks pass.',
          },
          {
            type: 'paragraph',
            text: 'Open the page and sign in with `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `.env`; you should land in the conversation workspace. If there is no admin account yet, or you need to invite a member, see “Troubleshooting” below.',
          },
          {
            type: 'note',
            text: 'Agent keeps its database and page archives in temporary memory: stopping, restarting or recreating the data containers loses accounts, monitors, events and saved page archives. Set up persistent storage and backups before long-term use.',
          },
          {
            type: 'link',
            label: 'WebMonitor-Agent repository and full guide',
            href: 'https://github.com/webmonitor/WebMonitor-Agent#readme',
          },
        ],
      },
      {
        id: 'webmonitor-usage',
        title: 'WebMonitor: create your first monitor',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'After signing in, open Monitors and choose Create task.',
              'Fill in the task name, monitor URL, XPath selector and check interval in seconds (minimum 10, default 300). If you are unsure about the XPath, choose Test monitor first and check the extracted text; the test sends no email.',
              'Decide whether to make the task public and whether to enable monitoring, then create the task.',
              'Open Monitor logs to review each check’s time, result and new content. The dashboard summarises task counts, recent changes and the execution success rate.',
            ],
          },
          {
            type: 'paragraph',
            text: 'The first successful scheduled check may send an initial notification; after that, email is sent only when the text changes. A task without an email configuration still collects and logs, it just sends nothing. Once a task is public, other users on the same instance can subscribe from Public tasks and receive notifications through their own email settings.',
          },
        ],
      },
      {
        id: 'agent-usage',
        title: 'Agent: create your first monitor',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'After signing in, choose New conversation in the sidebar.',
              'Describe the URL and the request together: what to watch and when to notify you. For example: “Watch this page’s price and email me when it drops 10%.”',
              'The assistant opens the page and takes one real sample. Wait while it reads the page and prepares the monitor settings.',
              'On the Create monitor card, review the extracted content, notification rules, recipients and email preview. If something is off, choose Preview again.',
              'Choose Create monitor to start scheduled checks. New monitors use the deployment’s default check frequency.',
              'Open Delivery settings on the monitor page to change the check frequency and configure an email notification group or an HTTPS Webhook.',
            ],
          },
          {
            type: 'paragraph',
            text: 'The monitor then appears under Monitors in the sidebar. Open it to see the current content, recent checks and events, plus screenshots and page archives saved by browser collection. The top right offers Pause, Resume, Check now and Edit settings. To change what is watched or when it notifies, explain it in the conversation, review the new preview and save.',
          },
          {
            type: 'note',
            text: 'The first successful collection establishes a baseline and sends no change notification; comparison starts with the second check. A failed check keeps the last successful content as the baseline. Previews never send notifications.',
          },
        ],
      },
      {
        id: 'email',
        title: 'Configure email and Webhooks',
        blocks: [
          {
            type: 'paragraph',
            text: 'WebMonitor supports email only, with each user entering SMTP and recipients in the app. Agent supports email and HTTPS Webhooks: SMTP belongs to the deployment, an admin maintains email recipients in notification groups, and Webhooks are configured in Delivery settings on the monitor page. Both projects still collect and show changes without a notification channel.',
          },
          {
            type: 'table',
            head: ['Project', 'Where to configure email', 'Other delivery methods'],
            rows: [
              ['WebMonitor', 'Email settings after signing in', 'None; email only'],
              ['WebMonitor-Agent', '.env in the deployment directory, plus notification groups under Notifications', 'HTTPS Webhook in Delivery settings on the monitor page'],
            ],
          },
          {
            type: 'paragraph',
            text: '**WebMonitor:** open Email settings and choose Add email configuration. Enter a name, SMTP server, SMTP port, sender address, SMTP password and recipient address, and turn on Use SSL if your provider requires it. The password is usually an app-specific password. Choose Test connection and confirm the test email arrives, then create or edit a task and select this configuration under Email configuration. With “Do not send notifications”, the task still collects but sends no mail.',
          },
          {
            type: 'paragraph',
            text: '**WebMonitor-Agent email:** set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD` and `MAIL_FROM` in `.env`, then run `docker compose up -d --wait` so the new settings take effect. Sign in as an admin, open Notifications → Notification groups and choose New. Enter a name and recipients (one email per line, or separated by commas or spaces). When creating or editing a monitor, choose the group under Recipients; one monitor can notify several mailboxes.',
          },
          {
            type: 'paragraph',
            text: '**WebMonitor-Agent Webhooks:** open Delivery settings on the monitor page and enter the HTTPS URL that should receive notifications. The host must be public and the port must be 443; requests use the same egress policy as collection and do not follow redirects. WebMonitor has no Webhook channel. A deployment can optionally set `WEBHOOK_SECRET`: requests carry a Unix timestamp in whole seconds, and `X-WebMonitor-Signature-256: sha256=<hex>` is HMAC-SHA256 over the exact bytes of `<timestamp>.<raw request body>`. Receivers should check timestamp freshness and use a constant-time comparison. Without a secret, the timestamp is still sent but the signature header is omitted.',
          },
          {
            type: 'paragraph',
            text: 'Endpoints should normally return `2xx`. Responses `408`, `425`, `429` and `5xx` are retried; other responses are recorded as failed, and failed deliveries can be retried from Delivery log. Administrators can also use Test email and Test webhook under Notifications → Delivery log. Tests reuse destination validation, signing and the real transports, but create no monitoring event, job or delivery-log entry.',
          },
          {
            type: 'note',
            text: 'For email, “Sent” in the delivery log means the mail server accepted the message. If an email does not arrive, check spam first. Delivery states and failure reasons for both email and Webhooks are available under Notifications.',
          },
        ],
      },
      {
        id: 'mcp',
        title: 'Agent: MCP and API tokens',
        blocks: [
          {
            type: 'paragraph',
            text: 'External models can use target discovery, draft, read and operations tools through the MCP Streamable HTTP endpoint at `/mcp`. It is disabled by default. Set `MCP_ENABLED=true` in `.env`, then run `docker compose up -d --wait`.',
          },
          {
            type: 'list',
            items: [
              'Open API tokens & MCP in the workspace, then enter a name and choose an expiry and scopes to create a PAT. The plaintext is shown once and only its hash is stored. The page shows `last_used_at`, expiry and revocation state; revocation takes effect immediately.',
              'Scopes are `read`, `discover`, `drafts:write`, `drafts:approve`, `monitors:write` and `events:write`. All except `drafts:approve` are selected by default; grant only what the client needs.',
              'Clients authenticate with `Authorization: Bearer <PAT>`. A PAT authenticates `/mcp`, not browser API sessions, and browser cookies cannot substitute for it.',
              'The same page generates Cursor and Claude Desktop configuration. Use a deployment URL reachable from the client. Browser requests with an `Origin` must exactly match `APP_ORIGIN` or the comma-separated `MCP_ALLOWED_ORIGINS` allowlist.',
            ],
          },
          {
            type: 'link',
            label: 'MCP configuration examples and full scope reference',
            href: 'https://github.com/webmonitor/WebMonitor-Agent#mcp-and-api-tokens',
          },
        ],
      },
      {
        id: 'manage',
        title: 'Manage monitors day to day',
        blocks: [
          {
            type: 'paragraph',
            text: '**WebMonitor** keeps everything in the sidebar:',
          },
          {
            type: 'list',
            items: [
              'Monitors lets you test, edit, pause or enable, and delete tasks; the list shows each check interval and attached email configuration.',
              'Monitor logs shows each check’s status, new content and error message, per task.',
              'Public tasks and My subscriptions share tasks within the instance and let you subscribe to others; each user receives notifications through their own email configuration.',
              'Admins can also adjust accounts and subscription limits under Users, and restrict which domains regular users may monitor under Blacklist.',
            ],
          },
          {
            type: 'paragraph',
            text: '**The Agent** manages conversations, monitors and notifications in one workspace:',
          },
          {
            type: 'list',
            items: [
              'Open any monitor from the Monitors list to see current content, recent checks and events; use Pause, Resume, Check now and Edit settings to control it, and Delivery settings to change its check frequency and delivery method.',
              'Events records changes, failed checks and recoveries. Filter by Unread and choose Mark as read when done.',
              'Notifications manages notification groups and shows delivery states and failure reasons for email and Webhooks.',
              'An admin invites members, and new members register through an invitation link.',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'Troubleshooting',
        blocks: [
          {
            type: 'list',
            items: [
              '**The startup command fails or never returns:** run `docker compose ps` and `docker compose logs --tail=100` in the deployment directory. Common causes are a blank value in `.env`, an occupied port, or unusable model settings. Fix it and run the startup command again.',
              '**The page will not open:** check that you are visiting http://localhost:8000 (WebMonitor) or http://localhost:8080 (Agent), and that the containers are running.',
              '**WebMonitor sign-in fails:** sign in with `ADMIN_USERNAME` from `.env`, not the email. The initial admin is created only when the database has no admin; editing `.env` later does not reset an existing account.',
              '**Agent sign-in fails:** use `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `.env`; the password must be 12–128 characters.',
              '**The Agent has no admin, or a new member cannot register:** in the deployment directory run `docker compose exec api webmonitor admin-create --email you@example.com` to create an admin, or `docker compose exec api webmonitor invite-create --email member@example.com --ttl-hours 24` to generate a one-time invitation link. An expired link or a different email will not work.',
              '**WebMonitor extracts nothing:** use Test monitor to check that the XPath selects the element that actually contains the text. Content that requires signing in cannot be monitored directly.',
              '**The Agent preview fails or the address is rejected:** the target must be a public http/https address on port 80 or 443. An unreachable site, bot blocking, a sign-in requirement, or content inside an iframe / Shadow DOM can all fail; an unavailable model service also interrupts the conversation.',
              '**No notification arrives:** for WebMonitor choose Test connection under Email settings; for the Agent check SMTP in `.env`, the notification-group recipients and the monitor’s HTTPS Webhook. Check spam for email, and inspect the state and failure reason for every delivery.',
              '**After an update the app will not open:** inspect the service logs and run the startup command again.',
            ],
          },
        ],
      },
      {
        id: 'operations',
        title: 'Update versions',
        blocks: [
          {
            type: 'paragraph',
            text: 'Back up data you need to retain and note the current image version before updating. Change `WEBMONITOR_IMAGE` in `.env` to the new version, then run the commands below in each project’s deployment directory. Check database-format changes before switching versions.',
          },
          {
            type: 'code',
            title: 'WebMonitor: pull and recreate',
            code: 'docker compose pull\ndocker compose up -d --wait',
            hint: 'The default SQLite file lives inside the container and is lost when it is recreated. Follow the backup and storage guidance before updating.',
          },
          {
            type: 'code',
            title: 'Agent: update application services',
            code: 'docker compose pull api web\ndocker compose up -d --wait --no-deps api web',
            hint: 'These commands update api and web while leaving the running postgres and s3 services in place. Their default storage is temporary; stopping or recreating those data containers loses their data.',
          },
          {
            type: 'paragraph',
            text: 'To roll back, set `WEBMONITOR_IMAGE` to a previous version that is still available and run the same commands for that project.',
          },
          {
            type: 'link',
            label: 'WebMonitor releases',
            href: 'https://github.com/webmonitor/WebMonitor/releases',
          },
          {
            type: 'link',
            label: 'Agent releases',
            href: 'https://github.com/webmonitor/WebMonitor-Agent/releases',
          },
        ],
      },
      {
        id: 'kubernetes',
        title: 'Agent: Kubernetes for local development',
        blocks: [
          {
            type: 'paragraph',
            text: 'The repository includes Kustomize manifests for a local or single-node development cluster: one API replica, a separate worker, an nginx trusted-proxy sidecar, default-deny NetworkPolicy and seccomp for the browser worker. Compose remains the standard single-host deployment. These manifests are not an HA or production ingress design.',
          },
          {
            type: 'list',
            items: [
              'The CNI must enforce NetworkPolicy. Install the required Chromium seccomp profile on every node eligible to run worker; do not replace it with `Unconfined`.',
              '`webmonitor-egress:local` and `webmonitor-minio:local` must be built from source and pushed to a registry reachable by the cluster; they are not published images. Create the Secret only from a copy of `deploy/k8s/secret.example.yaml`.',
              'The public endpoint is NodePort `30080`, and `APP_ORIGIN` must match the browser-visible origin. The API stays at one replica because login and template throttles are process-local.',
              'PostgreSQL and MinIO use `emptyDir`: recreating either Pod loses its data, and there are no migrations or bundled backups. The repository commands are deployment and acceptance steps, not a claim that an external cluster has passed acceptance.',
            ],
          },
          {
            type: 'link',
            label: 'Full Kubernetes prerequisites, render commands and acceptance guide',
            href: 'https://github.com/webmonitor/WebMonitor-Agent/blob/main/docs/kubernetes.md',
          },
        ],
      },
      {
        id: 'limits',
        title: 'Data retention and usage boundaries',
        blocks: [
          {
            type: 'paragraph',
            text: 'Neither project provides automatic backups; the data lives inside the containers, so keep your own backups outside them.',
          },
          {
            type: 'table',
            head: ['Project', 'Where the data lives', 'When it is lost'],
            rows: [
              ['WebMonitor', 'The SQLite file `/app/data/webmonitor.db` inside the container; no volume by default', 'docker compose down, changing the image or recreating the container starts from an empty database; docker compose restart keeps it'],
              ['WebMonitor-Agent', 'PostgreSQL and MinIO use temporary memory storage', 'Stopping, restarting or recreating the postgres or s3 containers loses accounts, monitors, events and page archives; restarting only api does not'],
            ],
          },
          {
            type: 'code',
            title: 'WebMonitor: back up the database before updating',
            code: 'docker compose stop\ndocker cp webmonitor:/app/data/webmonitor.db ./webmonitor-backup.db\ndocker compose start',
            hint: 'Keep the backup outside the deployment directory. To restore, put the file back at /app/data/webmonitor.db in the container.',
          },
          {
            type: 'note',
            text: 'Before serving anyone else, move the data to a persistent volume and set up backups, HTTPS and access control.',
          },
          {
            type: 'paragraph',
            text: '**Agent automatic retention:** the scheduler runs a bounded cleanup every hour, with `RETENTION_DAYS=30` by default. It removes expired terminal deliveries and old events with no remaining deliveries, then expired ordinary snapshots, unreferenced terminal jobs and their S3 evidence. The current baseline and evidence still referenced by an event or draft are always exempt. Events with queued, sending or retrying deliveries are retained. Each pass processes at most `RETENTION_GC_BATCH_SIZE=100` units. S3 objects are deleted before their database references, and storage failures retain the records needed for the next retry. Set `RETENTION_DAYS=0` to disable automatic cleanup entirely. Retention cleanup is not a backup.',
          },
          {
            type: 'paragraph',
            text: 'Monitoring limits:',
          },
          {
            type: 'table',
            head: ['Situation', 'What you will see'],
            rows: [
              ['Agent targets must be public', 'Private, localhost, metadata addresses and ports other than 80/443 are rejected.'],
              ['Agent check frequency', 'New monitors use the deployment default; change it later in Delivery settings on the monitor page.'],
              ['iframes and Shadow DOM', 'Content inside them is not extracted; the preview shows the actual coverage.'],
              ['Browser collection', 'If the browser sandbox is unavailable, that check fails; it does not switch to another collection method.'],
              ['Notification channels', 'Agent supports email and HTTPS Webhooks; WebMonitor supports email only. Neither project supports SMS.'],
            ],
          },
        ],
      },
      {
        id: 'licenses',
        title: 'Licenses and feedback',
        blocks: [
          {
            type: 'table',
            head: ['Project', 'License', 'Terms'],
            rows: [
              ['WebMonitor-Agent', 'CC BY-NC 4.0', 'Share and adapt for non-commercial use with attribution, a license link and an indication of changes.'],
              ['WebMonitor', 'CC BY-NC 4.0', 'Share and adapt with attribution, non-commercial use only.'],
            ],
          },
          {
            type: 'paragraph',
            text: 'Report issues in the relevant project with reproduction steps and a page example with sensitive data removed.',
          },
          {
            type: 'link',
            label: 'WebMonitor on GitHub',
            href: 'https://github.com/webmonitor',
          },
        ],
      },
    ],
  },
};
