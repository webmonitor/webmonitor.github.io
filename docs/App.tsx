import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DocsPage from '../components/DocsPage';

const DocsApp = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <DocsPage />
      <Footer />
    </div>
  );
};

export default DocsApp;
