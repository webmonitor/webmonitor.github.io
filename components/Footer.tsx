import { ArrowUpRight } from 'lucide-react';
import { shared } from '../config/site';
import type { SiteContent } from '../content/types';

const Footer = ({ content }: { content: SiteContent }) => (
  <footer className="site-container pb-8 pt-4">
    <div className="flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>{content.footerTagline}</p>
      <a href={shared.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono transition-colors hover:text-text">
        {content.footerLink}
        <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4" />
      </a>
    </div>
  </footer>
);

export default Footer;
