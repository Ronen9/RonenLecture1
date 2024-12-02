import { FC } from 'react';
import { motion } from 'framer-motion';

const Header: FC = () => {
  return (
    <header className="relative w-full">
      <div className="relative pt-[28%]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          src="https://media.licdn.com/dms/image/v2/C4D16AQEXuEhtoaa8uw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1611844678030?e=1738195200&v=beta&t=9tjeFM76BmS-ethBtEXp6gOVZuwFklu64mSrIrjGKHQ"
          alt="רונן ארנרייך"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-20" />
        <div className="absolute inset-0 flex items-center justify-center text-center z-30">
          <div className="max-w-4xl px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg bg-clip-text">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  רונן ארנרייך
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-blue-100 drop-shadow-md font-light">
                מרצה מוביל בתחום 
                <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mx-2">
                  הבינה המלאכותית
                </span>
                והשפעתה על עולמנו המודרני
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
    </header>
  );
};

export default Header; 