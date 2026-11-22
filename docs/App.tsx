import DocsPage from '../components/DocsPage';
import SiteLayout from '../components/SiteLayout';
import { contentByLang } from '../content';
import type { Lang } from '../content/types';

interface DocsAppProps {
  lang: Lang;
  pathname: string;
}

const DocsApp = ({ lang, pathname }: DocsAppProps) => (
  <SiteLayout lang={lang} pathname={pathname}>
    <DocsPage content={contentByLang[lang]} />
  </SiteLayout>
);

export default DocsApp;
