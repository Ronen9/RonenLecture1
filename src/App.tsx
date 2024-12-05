import { FC } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import TopicsSection from '@/components/sections/TopicsSection';
import VideosSection from '@/components/sections/VideosSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';

const App: FC = () => {
  return (
    <div dir="rtl" className="min-h-screen relative bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent,white)] dark:bg-grid-slate-100/[0.03]" />
        <div className="absolute h-full w-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[size:200px_200px] opacity-100 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] dark:bg-grid-slate-100/[0.03]">
            <div className="absolute -left-[750px] -top-[750px] h-[1500px] w-[1500px] rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-3xl"></div>
            <div className="absolute -right-[750px] -bottom-[750px] h-[1500px] w-[1500px] rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <AboutSection />
        <TopicsSection />
        <ValuePropositionSection />
        <VideosSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;