import type { Lang } from '../content/types';

const paths = {
  home: { zh: '/', en: '/en/' },
  docs: { zh: '/docs/', en: '/en/docs/' },
} as const;

export const langFromPath = (pathname: string): Lang =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';

export const otherLang = (lang: Lang): Lang => (lang === 'zh' ? 'en' : 'zh');

export const alternatePath = (pathname: string, target: Lang): string =>
  (pathname.includes('/docs') ? paths.docs : paths.home)[target];

export const homePath = (lang: Lang): string => paths.home[lang];
export const docsPath = (lang: Lang): string => paths.docs[lang];
