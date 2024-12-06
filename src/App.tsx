import { FC } from 'react';
import ValuePropositionSection from './components/sections/ValuePropositionSection';
// import TopicsSection from './components/sections/TopicsSection';
import AboutSection from './components/sections/AboutSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import VideosSection from './components/sections/VideosSection';

const App: FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <AboutSection />
      <ValuePropositionSection />
      {/* <TopicsSection /> */}
      <VideosSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
};

export default App;