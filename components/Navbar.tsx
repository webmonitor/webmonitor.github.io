import { BookOpen, Github, Globe, Languages } from 'lucide-react';
import { contentByLang } from '../content';
import { alternatePath, docsPath, otherLang } from '../config/routes';
import { shared } from '../config/site';
import type { Lang } from '../content/types';

interface NavbarProps {
  lang: Lang;
  pathname: string;
}

const Navbar = ({ lang, pathname }: NavbarProps) => {
  const content = contentByLang[lang];
  const targetLang = otherLang(lang);

  const navLinks = [
    { label: content.nav.github, href: shared.githubUrl, icon: Github, external: true },
    { label: content.nav.demo, href: shared.demoUrl, icon: Globe, external: true },
    { label: content.nav.docs, href: docsPath(lang), icon: BookOpen, external: false },
  ];

  return (
    <header className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-line/80 px-1 py-3 sm:px-0">
        <a href="/" className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.08em] text-text">
          <img src={shared.logoUrl} alt="" width={24} height={24} className="h-6 w-6 rounded-lg ring-1 ring-line" />
          {content.hero.title}
        </a>

        <nav className="flex items-center gap-1 sm:gap-3">
          {navLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 text-sm text-muted transition hover:border-line hover:text-text"
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}

          <a
            href={alternatePath(pathname, targetLang)}
            aria-label={content.nav.switchLabel}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1.5 text-xs font-medium tracking-[0.08em] text-muted transition hover:text-text sm:ml-1 sm:px-3 sm:text-sm"
          >
            <Languages className="h-3.5 w-3.5" />
            {content.nav.switchLabel}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
