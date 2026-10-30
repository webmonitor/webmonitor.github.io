import { BookOpen, Github, Globe } from 'lucide-react';
import { site } from '../config/site';
import type { SocialLink } from '../types';

const navLinks: SocialLink[] = [
  { label: 'GitHub', href: site.githubUrl, icon: Github, external: true },
  { label: '在线体验', href: site.demoUrl, icon: Globe, external: true },
  { label: '文档', href: site.docsUrl, icon: BookOpen },
];

const Navbar = () => {
  return (
    <header className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-line/80 px-1 py-3 sm:px-0">
        <a href="/" className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.08em] text-text">
          <img
            src={site.logoUrl}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 rounded-lg ring-1 ring-line"
          />
          {site.siteName}
        </a>

        <nav className="hidden items-center gap-3 sm:flex">
          {navLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 text-sm text-muted transition hover:border-line hover:text-text"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
