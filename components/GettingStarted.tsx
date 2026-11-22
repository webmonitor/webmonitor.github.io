import type { SiteContent } from '../content/types';
import CodeBlock from './CodeBlock';
import SectionHeading from './SectionHeading';

interface GettingStartedProps {
  content: SiteContent;
}

const GettingStarted = ({ content }: GettingStartedProps) => {
  const { sections, quickStart } = content;

  return (
    <section id="quick-start" className="section-block border-t border-line">
      <SectionHeading title={sections.startTitle} description={sections.startDescription} />

      <div className="mt-10 border-t border-line">
        <div className="install-row">
          <div>
            <h3 className="font-serif text-xl font-medium text-text">WebMonitor-Agent</h3>
            <p className="mt-2 font-mono text-xs text-muted">Docker Compose</p>
          </div>
          <CodeBlock code={quickStart.agent.join('\n')} />
        </div>

        <div className="install-row">
          <div>
            <h3 className="font-serif text-xl font-medium text-text">WebMonitor</h3>
            <p className="mt-2 font-mono text-xs text-muted">Docker Compose</p>
          </div>
          <CodeBlock code={quickStart.legacy.join('\n')} />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
