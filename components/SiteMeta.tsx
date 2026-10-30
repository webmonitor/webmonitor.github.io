import { useEffect } from 'react';
import { site } from '../config/site';

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

const SiteMeta = () => {
  useEffect(() => {
    document.title = site.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: site.description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: site.keywords.join(',') });
    upsertMeta('meta[name="author"]', { name: 'author', content: site.author });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: site.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: site.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: site.siteUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: site.logoUrl });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: site.siteName });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: site.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: site.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: site.logoUrl });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#f5f3ef' });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: site.siteUrl });
  }, []);

  return null;
};

export default SiteMeta;
