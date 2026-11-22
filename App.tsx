import GettingStarted from './components/GettingStarted';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SiteLayout from './components/SiteLayout';
import { contentByLang } from './content';
import type { Lang } from './content/types';

interface AppProps {
  lang: Lang;
  pathname: string;
}

const App = ({ lang, pathname }: AppProps) => {
  const content = contentByLang[lang];

  return (
    <SiteLayout lang={lang} pathname={pathname}>
      <main id="main-content" className="site-container">
        <Hero content={content} />
        <Projects content={content} />
        <GettingStarted content={content} />
      </main>
    </SiteLayout>
  );
};

export default App;
