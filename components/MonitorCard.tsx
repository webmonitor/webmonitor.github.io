import { Mail } from 'lucide-react';
import type { SiteContent } from '../content/types';

interface MonitorCardProps {
  preview: SiteContent['hero']['preview'];
}

const MonitorCard = ({ preview }: MonitorCardProps) => (
  <div className="w-full rounded-2xl border border-line bg-surface shadow-card">
    <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
      <p className="text-xs text-muted">
        {preview.label} <span className="tabular-nums text-text">{preview.counter}</span>
      </p>
      <p className="font-mono text-xs tabular-nums text-muted">
        {preview.lastCheck} {preview.lastCheckTime}
      </p>
    </div>

    <div className="space-y-1 px-5 py-4">
      <p className="truncate font-mono text-sm text-text">{preview.url}</p>
      <p className="truncate font-mono text-xs text-muted">
        {preview.interval} · {preview.selector}
      </p>
    </div>

    <div className="border-t border-line px-5 py-4">
      <div className="flex items-center gap-2">
        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
        <p className="text-sm text-text">{preview.change}</p>
        <p className="ml-auto font-mono text-xs tabular-nums text-muted">{preview.changeTime}</p>
      </div>

      <div className="mt-3 flex items-baseline gap-3">
        <span className="font-mono text-sm tabular-nums text-muted line-through decoration-line">{preview.before}</span>
        <span aria-hidden className="font-mono text-sm text-muted">→</span>
        <span className="font-mono text-2xl tabular-nums text-accent">{preview.after}</span>
      </div>
      <p className="mt-1 text-xs text-muted">{preview.changeNote}</p>
    </div>

    <div className="border-t border-line px-5 py-4">
      <div className="flex items-center gap-2 text-xs text-muted">
        <Mail aria-hidden strokeWidth={1.5} className="h-4 w-4 shrink-0" />
        <span>{preview.emailLabel}</span>
        <span aria-hidden className="h-3 w-px bg-line" />
        <span className="truncate font-mono">{preview.emailTo}</span>
      </div>
      <p className="mt-1 truncate text-sm text-text">{preview.emailSubject}</p>
    </div>
  </div>
);

export default MonitorCard;
