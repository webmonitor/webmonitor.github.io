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
  const onDocs = pathname.includes('/docs');
  const navLinks = [
    { label: content.nav.github, href: shared.githubUrl, external: true, current: false },
    { label: content.nav.demo, href: shared.demoUrl, external: true, current: false },
    { label: content.nav.docs, href: docsPath(lang), external: false, current: onDocs },
  ];

  return (
    <header className="border-b border-line bg-background">
      <div className="site-container flex flex-wrap items-center gap-x-4 gap-y-2 py-4 sm:h-[72px] sm:flex-nowrap sm:py-0">
        <a href={homePath(lang)} className="brand-link" aria-label={content.hero.title}>
          <span aria-hidden className="brand-mark"><i /><i /></span>
          <span>{content.hero.title}</span>
        </a>

        <a
          href={alternatePath(pathname, targetLang)}
          aria-label={content.nav.switchLabel}
          lang={targetLang === 'zh' ? 'zh-CN' : 'en'}
          className="language-link sm:order-3"
        >
          {content.nav.switchLabel}
        </a>

        <nav aria-label={lang === 'zh' ? '主导航' : 'Main navigation'} className="order-3 flex w-full items-center justify-between gap-4 border-t border-line/70 pt-2 sm:order-2 sm:ml-auto sm:w-auto sm:justify-start sm:gap-7 sm:border-0 sm:pt-0">
          {navLinks.map(({ label, href, external, current }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-current={current ? 'page' : undefined}
              className="nav-link"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
