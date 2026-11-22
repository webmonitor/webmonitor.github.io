import type { ReactNode } from 'react';
import { contentByLang } from '../content';
import type { Lang } from '../content/types';
import Footer from './Footer';
import Navbar from './Navbar';
import SiteMeta from './SiteMeta';

interface SiteLayoutProps {
  lang: Lang;
  pathname: string;
  children: ReactNode;
}

const SiteLayout = ({ lang, pathname, children }: SiteLayoutProps) => (
  <div className="min-h-screen bg-background text-text">
    <SiteMeta content={contentByLang[lang]} pathname={pathname} />
    <a href="#main-content" className="skip-link">
      {lang === 'zh' ? '跳到正文' : 'Skip to content'}
    </a>
    <Navbar lang={lang} pathname={pathname} />
    {children}
    <Footer content={contentByLang[lang]} />
  </div>
);

export default SiteLayout;
