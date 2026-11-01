import { shared } from '../config/site';
import type { SiteContent } from '../content/types';

const Footer = ({ content }: { content: SiteContent }) => {
  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{content.footerTagline}</p>
        <a
          href={shared.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono transition-colors hover:text-text"
        >
          {content.footerLink}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
