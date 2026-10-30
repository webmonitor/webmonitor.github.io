import { useEffect } from 'react';
import { shared } from '../config/site';
import type { SiteContent } from '../content/types';

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
};

const SiteMeta = ({ content, pathname }: { content: SiteContent; pathname: string }) => {
  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
    document.title = content.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: content.description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: content.keywords.join(',') });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: content.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: content.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: `https://webmonitor.github.io${pathname}` });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: shared.logoUrl });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: content.hero.title });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: content.lang === 'zh' ? 'zh_CN' : 'en_US' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: content.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: content.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: shared.logoUrl });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: `https://webmonitor.github.io${pathname}` });
  }, [content, pathname]);

  return null;
};

export default SiteMeta;
