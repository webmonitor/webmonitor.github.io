import React from 'react';
import ReactDOM from 'react-dom/client';
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DocsApp />
  </React.StrictMode>,
);
