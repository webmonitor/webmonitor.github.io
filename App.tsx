import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';
import SiteMeta from './components/SiteMeta';
import { contentByLang } from './content';
import type { Lang } from './content/types';

interface AppProps {
  lang: Lang;
  pathname: string;
}

const App = ({ lang, pathname }: AppProps) => {
  const content = contentByLang[lang];

  return (
    <div className="min-h-screen bg-background text-text">
      <SiteMeta content={content} pathname={pathname} />
      <Navbar lang={lang} pathname={pathname} />
      <main className="px-5 pb-16 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Hero content={content} />
          <Projects content={content} />
          <GettingStarted content={content} />
        </div>
      </main>
      <Footer content={content} />
    </div>
  );
};

export default App;
