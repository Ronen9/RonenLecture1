import { FC } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';
import TopicsSection from '@/components/sections/TopicsSection';
import VideosSection from '@/components/sections/VideosSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';

const App: FC = () => {
  return (
    <div dir="rtl" className="min-h-screen relative bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        {/* ... SVG background ... */}
      </div>
      
      <Header />
      <AboutSection />
      <TopicsSection />
      <VideosSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;