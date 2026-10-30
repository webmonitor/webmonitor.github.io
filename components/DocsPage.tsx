import type { ReactNode } from 'react';
import { Separator } from '@base-ui/react';
import { ArrowUpRight } from 'lucide-react';
import { site } from '../config/site';
import CodeBlock from './CodeBlock';

const docSections = [
  { id: 'overview', label: '概述' },
  { id: 'what-to-watch', label: '可以关注什么' },
  { id: 'webmonitor', label: 'WebMonitor 部署' },
  { id: 'webmonitor-usage', label: 'WebMonitor 使用' },
  { id: 'agent', label: 'Agent 部署' },
  { id: 'agent-usage', label: 'Agent 使用' },
  { id: 'limits', label: '限制与约定' },
  { id: 'licenses', label: '许可证' },
];

const DocSection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="scroll-mt-6 space-y-4">
    <div className="space-y-2">
      <h2 className="text-xl font-semibold tracking-tight text-text">{title}</h2>
      <Separator className="h-px w-full bg-line" />
    </div>
    <div className="space-y-4 text-sm leading-7 text-muted">{children}</div>
  </section>
);

const DocTable = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[520px] border-collapse text-sm">
      <thead>
        <tr>
          {head.map((cell) => (
            <th key={cell} className="border-b border-line py-2 pr-4 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell, index) => (
              <td
                key={`${row[0]}-${index}`}
                className="border-b border-line/60 py-2 pr-4 align-top leading-6 text-muted first:whitespace-nowrap first:text-text"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Note = ({ children }: { children: ReactNode }) => (
  <div className="rounded-sm border border-line bg-surface px-4 py-3 text-xs leading-6 text-muted">{children}</div>
);

const DocsPage = () => {
  return (
    <main className="px-4 pb-12 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="space-y-3 border-b border-line pb-6 pt-4">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Documentation</p>
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">文档</h1>
          <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
            两个项目的部署步骤、配置项与使用流程。部署方式以 Docker Compose 为准，配置项以各自仓库的{' '}
            <span className="text-text">.env.example</span> 为最终依据。
          </p>
        </div>

        <div className="grid gap-10 pt-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <nav aria-label="文档目录">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-muted">Contents</p>
              <ul className="space-y-1.5 text-sm">
                {docSections.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-muted transition hover:text-text">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 space-y-10">
            <DocSection id="overview" title="概述">
              <p>
                WebMonitor 是一个可自行部署的网页监控组织。两个项目共享同一个目标：盯住网页上的一段内容，在它变化时通过邮件通知你。
                它们不抓取整页做全文比较，而是比较你指定的区域或条目。
              </p>
              <DocTable
                head={['项目', '创建方式', '采集方式', '状态']}
                rows={[
                  ['WebMonitor', '填写网址、XPath 与检查间隔', 'Selenium 驱动的无头浏览器', '初代版本，维护与问题修复'],
                  ['WebMonitor-Agent', '对话描述需求，预览后确认', 'HTTP 抓取 + Playwright 浏览器采集', '当前持续开发的版本'],
                ]}
              />
              <Note>
                先想清楚要盯什么：只需要「某块区域文字变了就通知」，用 WebMonitor 更直接；需要「价格低于阈值」「列表新增一条」这类条件，
                或不想手写选择器，用 WebMonitor-Agent。
              </Note>
            </DocSection>

            <DocSection id="what-to-watch" title="可以关注什么">
              <DocTable
                head={['关注的内容', 'WebMonitor：选取的区域', 'Agent：可以这样描述']}
                rows={[
                  ['价格与库存', '当前价格或库存状态', '「每 10 分钟检查这个商品，价格降到 200 元以下时通知我。」'],
                  ['网站公告', '通知栏或新闻列表', '「每小时检查这个公告列表，有新公告就通知我。」'],
                  ['版本发布', '发布标题或更新日志', '「发布新版本时发邮件告诉我。」'],
                  ['报名截止日期', '可能调整的日期或说明', '「跟踪这个页面的报名截止日期，有变化就告诉我。」'],
                ]}
              />
            </DocSection>

            <DocSection id="webmonitor" title="WebMonitor 部署">
              <p>
                单容器部署：FastAPI 同时提供 API 和前端静态页面，浏览器只访问一个地址。数据库默认使用容器内的 SQLite
                文件，不依赖外部服务。
              </p>
              <CodeBlock
                title="准备"
                code={`git clone https://github.com/webmonitor/WebMonitor.git
cd WebMonitor
cp .env.example .env`}
                hint="已有 .env 时保留原文件。"
              />
              <DocTable
                head={['配置项', '说明']}
                rows={[
                  ['SECRET_KEY', '必填。至少 32 字符的随机签名密钥，没有默认值。'],
                  ['ADMIN_EMAIL', '首次启动创建的管理员邮箱地址。'],
                  ['ADMIN_PASSWORD', '初始密码，至少 6 字符、最多 72 个 UTF-8 字节。为空且库中没有管理员时启动会失败。'],
                  ['ADMIN_USERNAME', '管理员用户名，默认 admin。'],
                  ['DATABASE_URL', '默认 sqlite:///./data/webmonitor.db，一般无需修改。'],
                ]}
              />
              <CodeBlock
                title="启动"
                code={`docker compose up --build -d --wait
# http://localhost:8000`}
              />
              <p>
                打开 <span className="text-text">localhost:8000</span>，用管理员账号登录后创建第一个任务。运行实例自带 API 文档：
                <span className="text-text"> localhost:8000/docs</span>。
              </p>
              <Note>
                <span className="text-text">保留数据：</span>
                默认部署把数据放在容器内。正式使用前请为 <span className="text-text">/app/data</span> 添加持久数据卷，
                否则更换容器会丢失账户、监控任务和历史记录。
              </Note>
            </DocSection>

            <DocSection id="webmonitor-usage" title="WebMonitor 使用">
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  <span className="text-text">选好内容。</span>
                  填写网址、XPath 和检查间隔创建任务；使用测试功能确认提取到的正是你关心的文字。测试只预览内容，不发送邮件。
                </li>
                <li>
                  <span className="text-text">设置通知。</span>
                  在应用内添加并测试 SMTP 邮件配置，再关联到任务。也可以不配置邮件，只在应用里查看变化。
                </li>
                <li>
                  <span className="text-text">启用监控。</span>
                  按计划检查并记录结果；文字变化后，通知中会展示变化前后的内容。
                </li>
              </ol>
              <p>
                工作台还可以：只看指定区域、查看检查历史与采集错误、使用自己的 SMTP 邮箱、把任务设为实例内公开供他人订阅、
                随时启用或停用任务，并切换中英文界面。
              </p>
              <Note>首次成功的定时检查<span className="text-text">可能</span>发送初始通知；之后的检查只在内容变化时通知。</Note>
            </DocSection>

            <DocSection id="agent" title="WebMonitor-Agent 部署">
              <p>
                需要 Docker Engine、Docker Compose，以及一个兼容 OpenAI Chat Completions 的模型服务。邮件提醒还需要可用的 SMTP 服务；
                采集与页面存档依赖 PostgreSQL 与 S3 兼容存储，随附 Compose 已包含两者。
              </p>
              <CodeBlock
                title="准备"
                code={`git clone https://github.com/webmonitor/WebMonitor-Agent.git
cd WebMonitor-Agent
cp .env.example .env`}
                hint="已有 .env 时保留原文件。"
              />
              <DocTable
                head={['配置项', '说明']}
                rows={[
                  ['ADMIN_EMAIL、ADMIN_PASSWORD', '初始管理员邮箱与密码，密码为 12–128 字符。'],
                  ['SECRET_KEY', '至少 32 字符的随机密钥。'],
                  ['POSTGRES_PASSWORD', '数据库密码。'],
                  ['OPENAI_API_KEY', '模型服务的密钥。'],
                  ['OPENAI_BASE_URL', '兼容 Chat Completions 的服务地址。'],
                  ['OPENAI_MODEL', '实际可用的模型名称。'],
                  ['SMTP_HOST、SMTP_PORT', '邮件服务地址与端口；不配置则不发邮件。'],
                  ['SMTP_USERNAME、SMTP_PASSWORD', 'SMTP 认证信息。'],
                  ['MAIL_FROM', '发件人地址。'],
                  ['SMTP_USE_SSL、SMTP_STARTTLS', '必须恰有一个为 true，按邮件服务选择。'],
                ]}
              />
              <CodeBlock
                title="启动"
                code={`docker compose up --build --wait
# http://localhost:8080`}
                hint="首次启动在没有用户时自动创建管理员；修改配置不会重置已有账户。"
              />
              <p>
                默认只监听本机。更改端口时同步调整 <span className="text-text">WEBMONITOR_HTTP_PORT</span> 与{' '}
                <span className="text-text">APP_ORIGIN</span>；本地 HTTP 部署需保留{' '}
                <span className="text-text">DEVELOPMENT_MODE=true</span>。
              </p>
              <Note>
                <span className="text-text">仅用于试用与开发：</span>
                随附部署的 PostgreSQL、MinIO 存储为临时存储，停止、重启或重建数据容器会丢失账户、监控与历史记录。
                长期使用前需配置持久存储与备份，并阅读仓库中的数据保留说明。
              </Note>
            </DocSection>

            <DocSection id="agent-usage" title="Agent 使用">
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  <span className="text-text">描述需求。</span>
                  新建对话，给出网页地址，说明要看什么、多久检查一次、什么情况下通知。
                </li>
                <li>
                  <span className="text-text">核对预览。</span>
                  助手打开真实页面并执行一次实际采集，确认提取内容、检查范围、通知规则、收件人与邮件样式。
                </li>
                <li>
                  <span className="text-text">确认启用。</span>
                  点击「创建监控」后才开始定时检查；之后可在工作台查看变化、暂停或恢复，也可以通过对话调整需求。
                </li>
              </ol>
              <p>
                通知条件支持文本与关键词、数值变化与阈值、列表新增与更新；确认完整采集列表后，也可以监控条目删除。
                变更记录可对照变化前后的内容，查看当次采集保存的页面存档，浏览器采集还会留下截图。收件人来自管理员维护的通知组，
                一项监控可以通知多个邮箱。
              </p>
              <p>
                新成员需要管理员签发的邀请链接。已有部署时，直接使用管理员提供的地址登录即可，无需自行部署。
              </p>
              <Note>
                首次成功检查会记录初始内容作为比较基准，<span className="text-text">不发送</span>变化通知；预览同样不发邮件。
                只有真正满足通知规则的后续变化才会触发提醒。投递记录中的 <span className="text-text">sent</span> 表示邮件服务已接收，
                不代表目标收件箱已经收到。
              </Note>
            </DocSection>

            <DocSection id="limits" title="限制与约定">
              <DocTable
                head={['项目', '限制']}
                rows={[
                  ['目标页面', '仅支持公网 HTTP/HTTPS 页面；需要登录或内网访问的页面不在范围内。'],
                  ['Agent 检查间隔', '1 分钟至 24 小时。'],
                  ['Agent 提取范围', 'iframe 与 Shadow DOM 内的内容暂不支持提取；预览会说明本次实际采集的范围与限制。'],
                  ['采集失败', '保留上一次成功的内容作为比较依据，失败不会覆盖基准。'],
                  ['邮件发送', '需要可用的 SMTP 服务；SMTP_USE_SSL 与 SMTP_STARTTLS 必须恰有一个为 true。'],
                  ['演示站点', '由维护者单独运行，可能暂时不可用，不适合作为长期依赖。'],
                ]}
              />
            </DocSection>

            <DocSection id="licenses" title="许可证">
              <DocTable
                head={['项目', '许可证', '说明']}
                rows={[
                  ['WebMonitor', 'CC BY-NC 4.0', '可署名分享与修改，仅限非商业用途。'],
                  ['WebMonitor-Agent', 'MIT', '允许使用、修改与分发，包括商业用途；需保留版权与许可声明。'],
                ]}
              />
              <p>
                源码与问题反馈：
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 inline-flex items-center gap-1 underline decoration-line underline-offset-4 transition hover:text-text"
                >
                  github.com/webmonitor
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </p>
            </DocSection>
          </article>
        </div>
      </div>
    </main>
  );
};

export default DocsPage;
