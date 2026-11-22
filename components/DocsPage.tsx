import { ArrowUpRight } from 'lucide-react';
import { Fragment } from 'react';
import type { DocBlock, SiteContent } from '../content/types';
import CodeBlock from './CodeBlock';
import Rich from './Rich';

const DocTable = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="doc-table-region" role="region" aria-label={head.join(', ')} tabIndex={0}>
    <table className="w-full min-w-[640px] border-collapse text-sm tabular-nums">
      <thead>
        <tr>
          {head.map((cell) => (
            <th key={cell} scope="col" className="border-b border-line px-4 py-3 text-left text-xs font-medium text-muted first:pl-0">
              <Rich text={cell} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={`${row[0]}-${rowIndex}`}>
            {row.map((cell, index) => (
              <td
                key={`${row[0]}-${index}`}
                className="border-b border-line/70 px-4 py-4 align-top leading-6 text-secondary first:pl-0 first:font-medium first:text-text"
              >
                <Rich text={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DocBlockView = ({ block }: { block: DocBlock }) => {
  switch (block.type) {
    case 'paragraph':
      return <p><Rich text={block.text} /></p>;
    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul';
      return (
        <ListTag className={`doc-list ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
          {block.items.map((item) => (
            <li key={item} className="pl-1"><Rich text={item} /></li>
          ))}
        </ListTag>
      );
    }
    case 'table':
      return <DocTable head={block.head} rows={block.rows} />;
    case 'code':
      return <CodeBlock title={block.title} code={block.code} hint={block.hint} />;
    case 'note':
      return (
        <aside className="border-y border-r border-line border-l-2 border-l-accent bg-raised/50 px-4 py-4 text-sm leading-7 text-secondary">
          <Rich text={block.text} />
        </aside>
      );
    case 'link':
      return (
        <p>
          <a href={block.href} target="_blank" rel="noreferrer" className="doc-link">
            {block.label}
            <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4" />
          </a>
        </p>
      );
  }
};

const DocsPage = ({ content }: { content: SiteContent }) => {
  const { docs } = content;
  const toc = (
    <ul className="space-y-1 text-sm">
      {docs.sections.map(({ id, title }, index) => (
        <li key={id}>
          <a href={`#${id}`} className="toc-link">
            <span className="w-6 shrink-0 font-mono text-[11px] tabular-nums text-muted">{String(index + 1).padStart(2, '0')}</span>
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <main id="main-content" className="site-container">
      <header className="border-b border-line py-12 sm:py-16 lg:py-20">
        <p className="eyebrow">
          <span aria-hidden className="comparison-mark"><i /><i /></span>
          WebMonitor / {docs.contents}
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-[-0.02em] text-text sm:text-5xl">
          {docs.heading}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-secondary"><Rich text={docs.intro} /></p>
      </header>

      <div className="grid gap-10 py-10 lg:grid-cols-[232px_minmax(0,1fr)] lg:gap-16 lg:py-16">
        <aside className="hidden lg:sticky lg:top-8 lg:block lg:self-start">
          <nav aria-label={docs.contents}>
            <p className="mb-4 font-mono text-xs text-muted">{docs.contents}</p>
            {toc}
          </nav>
        </aside>

        <details className="border-y border-line py-4 lg:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center text-sm font-medium text-text">{docs.contents}</summary>
          <nav aria-label={docs.contents} className="mt-4 border-t border-line/70 pt-3">{toc}</nav>
        </details>

        <article className="min-w-0 max-w-[52rem] space-y-16">
          {docs.sections.map((section, sectionIndex) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-8">
              <div className="flex items-baseline gap-4 border-b border-line pb-4">
                <span className="font-mono text-xs tabular-nums text-accent">{String(sectionIndex + 1).padStart(2, '0')}</span>
                <h2 id={`${section.id}-title`} className="font-serif text-2xl font-medium leading-8 text-text">{section.title}</h2>
              </div>
              <div className="mt-6 space-y-5 text-sm leading-7 text-secondary sm:text-[15px] sm:leading-8">
                {section.blocks.map((block, index) => (
                  <Fragment key={index}><DocBlockView block={block} /></Fragment>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
};

export default DocsPage;
