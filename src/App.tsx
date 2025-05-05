import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
// import ContactPage from '@/pages/ContactPage';
import GalleryPage from '@/pages/GalleryPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="interior-theme-preference">
      <Router>
        <Layout >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;