import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm sm:text-base">© {new Date().getFullYear()} רונן ארנרייך. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer; 