import type { SiteContent } from '../content/types';
import CodeBlock from './CodeBlock';

interface GettingStartedProps {
  content: SiteContent;
}

const GettingStarted = ({ content }: GettingStartedProps) => {
  const { sections, quickStart } = content;

  return (
    <section className="border-t border-line py-16 lg:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-medium text-text">{sections.startTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-muted">{sections.startDescription}</p>
      </div>

      <div className="mt-10 divide-y divide-line/70 border-t border-line">
        <div className="grid gap-4 py-6 sm:grid-cols-[176px_1fr] sm:gap-8 lg:grid-cols-[224px_1fr] lg:gap-12">
          <h3 className="text-[15px] font-medium text-text">WebMonitor-Agent</h3>
          <CodeBlock code={quickStart.agent.join('\n')} />
        </div>

        <div className="grid gap-4 py-6 sm:grid-cols-[176px_1fr] sm:gap-8 lg:grid-cols-[224px_1fr] lg:gap-12">
          <h3 className="text-[15px] font-medium text-text">WebMonitor</h3>
          <CodeBlock code={quickStart.legacy.join('\n')} />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
