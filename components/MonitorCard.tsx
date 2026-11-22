import { FileText, Send } from 'lucide-react';
import type { SiteContent } from '../content/types';

interface MonitorCardProps {
  preview: SiteContent['hero']['preview'];
}

const MonitorCard = ({ preview }: MonitorCardProps) => (
  <article className="monitor-preview" aria-label={`${preview.label} ${preview.counter}`}>
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
      <p className="text-sm text-text">
        {preview.label} <span className="ml-2 font-mono text-xs tabular-nums text-muted">{preview.counter}</span>
      </p>
      <p className="font-mono text-xs tabular-nums text-muted">
        {preview.lastCheck} {preview.lastCheckTime}
      </p>
    </header>

    <div className="px-5 py-5 sm:px-6">
      <p className="break-all font-mono text-sm leading-6 text-text">{preview.url}</p>
      <p className="mt-2 text-xs leading-5 text-muted">
        {preview.interval} · {preview.selector}
      </p>
    </div>

    <section className="mx-5 border border-line bg-background sm:mx-6" aria-label={preview.change}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-signal" />
        <h2 className="text-sm font-medium text-text">{preview.change}</h2>
        <time className="ml-auto font-mono text-xs tabular-nums text-muted">{preview.changeTime}</time>
      </div>

      <div className="diff-row text-muted">
        <span aria-hidden className="diff-symbol">−</span>
        <span className="text-xs">{preview.beforeLabel}</span>
        <span className="font-mono text-sm tabular-nums line-through decoration-line">{preview.before}</span>
      </div>
      <div className="diff-row border-t border-line/70 text-text">
        <span aria-hidden className="diff-symbol text-accent">+</span>
        <span className="text-xs text-accent">{preview.afterLabel}</span>
        <span className="font-mono text-2xl tabular-nums text-accent">{preview.after}</span>
      </div>
      <p className="border-t border-line/70 px-4 py-3 text-xs leading-5 text-muted">{preview.changeNote}</p>
    </section>

    <div className="flex flex-wrap items-center gap-3 px-5 py-4 text-xs text-muted sm:px-6">
      <FileText aria-hidden strokeWidth={1.5} className="h-4 w-4 shrink-0" />
      <span className="text-secondary">{preview.evidenceLabel}</span>
      <span className="ml-auto font-mono tabular-nums">{preview.evidenceValue}</span>
    </div>

    <footer className="border-t border-line bg-raised/50 px-5 py-4 sm:px-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <Send aria-hidden strokeWidth={1.5} className="h-4 w-4 shrink-0 text-accent" />
        <span className="font-medium text-accent">{preview.deliveryLabel}</span>
        <span className="font-mono text-muted">{preview.deliveryTarget}</span>
      </div>
      <p className="mt-2 break-words text-sm leading-6 text-text">{preview.deliverySubject}</p>
    </footer>
  </article>
);

export default MonitorCard;
