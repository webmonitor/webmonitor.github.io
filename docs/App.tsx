import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DocsPage from '../components/DocsPage';
import { contentByLang } from '../content';
import type { Lang } from '../content/types';

interface DocsAppProps {
  lang: Lang;
  pathname: string;
}

const DocsApp = ({ lang, pathname }: DocsAppProps) => {
  const content = contentByLang[lang];

  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar lang={lang} pathname={pathname} />
      <DocsPage content={content} />
      <Footer content={content} />
    </div>
  );
};

export default DocsApp;
