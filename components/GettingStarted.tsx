import { Separator } from '@base-ui/react';
import { site } from '../config/site';
import { quickStart } from '../data/site';

const { sections } = site;

const CommandBlock = ({ title, commands, hint }: { title: string; commands: readonly string[]; hint: string }) => (
  <div className="min-w-0 space-y-2">
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">{title}</p>
    <pre className="w-full overflow-x-auto rounded-sm border border-line bg-surface p-4 font-mono text-xs leading-7 text-text">
      <code>{commands.join('\n')}</code>
    </pre>
    <p className="text-xs leading-6 text-muted">{hint}</p>
  </div>
);

const GettingStarted = () => {
  return (
    <section className="space-y-5 py-2">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">{sections.startEyebrow}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-text">{sections.startTitle}</h2>
        <p className="text-sm leading-7 text-muted">{sections.startDescription}</p>
      </div>

      <Separator className="h-px w-full bg-line" />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <CommandBlock title="WebMonitor-Agent" commands={quickStart.agent} hint="启动后访问 http://localhost:8080" />
        <CommandBlock title="WebMonitor" commands={quickStart.legacy} hint="启动后访问 http://localhost:8000" />
      </div>

      <p className="max-w-3xl text-xs leading-6 text-muted">{quickStart.note}</p>
    </section>
  );
};

export default GettingStarted;
