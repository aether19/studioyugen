import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CursorProvider } from '@/context/CursorContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/animation/ScrollProgress';
import HomePage from '@/pages/HomePage';
import WorkPage from '@/pages/WorkPage';
import WorkSinglePage from '@/pages/WorkSinglePage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CursorProvider>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<WorkSinglePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </CursorProvider>
  );
}
