import { contentByLang } from '../content';
import { alternatePath, docsPath, homePath, otherLang } from '../config/routes';
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
    { label: content.nav.github, href: shared.githubUrl, external: true },
    { label: content.nav.demo, href: shared.demoUrl, external: true },
    { label: content.nav.docs, href: docsPath(lang), external: false },
  ];

  return (
    <header className="px-5 pt-5 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-b border-line pb-4">
        <a href={homePath(lang)} className="shrink-0 text-[15px] font-medium text-text sm:text-base">
          {content.hero.title}
        </a>

        <nav className="flex items-center gap-4 whitespace-nowrap sm:gap-7">
          {navLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {label}
            </a>
          ))}

          <span aria-hidden className="h-4 w-px bg-line" />

          <a
            href={alternatePath(pathname, targetLang)}
            aria-label={content.nav.switchLabel}
            lang={targetLang === 'zh' ? 'zh-CN' : 'en'}
            className="text-sm text-muted transition-colors hover:text-text"
          >
            {content.nav.switchLabel}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
