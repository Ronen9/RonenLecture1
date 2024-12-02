import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="relative w-full">
      <div className="relative pt-[28%]">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D16AQEXuEhtoaa8uw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1611844678030?e=1738195200&v=beta&t=9tjeFM76BmS-ethBtEXp6gOVZuwFklu64mSrIrjGKHQ"
          alt="רונן ארנרייך"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">רונן ארנרייך</h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-md">מרצה מוביל בתחום הבינה המלאכותית והשפעתה על עולמנו המודרני</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 