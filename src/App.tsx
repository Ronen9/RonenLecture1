import React from 'react';
import { Brain, BookOpen, Users, Calendar, Mail, Cpu, Bot, Globe } from 'lucide-react';
import { TopicCard } from './components/TopicCard';
import { GalleryImage } from './components/GalleryImage';

const topics = [
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "יסודות הבינה המלאכותית",
    description: "סקירה מקיפה של עקרונות הבינה המלאכותית והתפתחותה"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "למידת מכונה בעולם המודרני",
    description: "הבנת היישומים היומיומיים של למידת מכונה"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "AI וחברה",
    description: "השפעות חברתיות ואתיות של בינה מלאכותית"
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    title: "עיבוד שפה טבעית",
    description: "כיצד AI מבין ומעבד שפה אנושית"
  },
  {
    icon: <Bot className="w-8 h-8 text-blue-600" />,
    title: "רובוטיקה וAI",
    description: "שילוב בינה מלאכותית במערכות רובוטיות"
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "AI בעולם העסקי",
    description: "יישומי בינה מלאכותית בתעשייה ועסקים"
  }
];

const galleryItems = [
  {
    imageUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&q=80",
    title: "עתיד הבינה המלאכותית",
    location: "אוניברסיטת תל אביב"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?auto=format&fit=crop&q=80",
    title: "מהפכת ה-AI בתעשייה",
    location: "מרכז החדשנות חיפה"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80",
    title: "אתיקה ובינה מלאכותית",
    location: "הטכניון"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    title: "AI במערכת החינוך",
    location: "מכון ויצמן למדע"
  }
];

function App() {
  return (
    <div dir="rtl" className="min-h-screen relative bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.2" />
            </linearGradient>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            </filter>
          </defs>
          <g filter="url(#goo)">
            <circle className="animate-blob1" cx="80%" cy="20%" r="100" fill="url(#gradient)" />
            <circle className="animate-blob2" cx="20%" cy="40%" r="120" fill="url(#gradient)" />
            <circle className="animate-blob3" cx="60%" cy="70%" r="80" fill="url(#gradient)" />
          </g>
        </svg>
      </div>
      {/* Hero Section */}
      <header className="relative w-full">
        <div className="relative pt-[28%]">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D16AQEXuEhtoaa8uw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1611844678030?e=1738195200&v=beta&t=9tjeFM76BmS-ethBtEXp6gOVZuwFklu64mSrIrjGKHQ"
            alt="רונן ארנרייך"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
            <div className="max-w-4xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">רונן ארנרייך</h1>
              <p className="text-xl md:text-2xl text-gray-200">מרצה מוביל בתחום הבינה המלאכותית והשפעתה על עולמנו המודרני</p>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-12">
            <div className="w-full md:w-1/3">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 p-6 h-full">
                <img
                  src="[Placeholder for profile image]"
                  alt="רונן ארנרייך"
                  className="w-full h-64 object-cover rounded-lg mb-6 hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">פרטי התקשרות</h3>
                  <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">example@email.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">זמין להרצאות ברחבי הארץ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">אודות</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed space-y-6">
                  <span className="block p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
                    רונן הוא 
                    <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">
                      מומחה מוביל בתחום הבינה המלאכותית
                    </span>, 
                    עם ניסיון של למעלה מ-20 שנה בתעשיית ההיי-טק. כיום הוא 
                    <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">
                      מוביל את תחום חווית הלקוח במיקרוסופט במחלקת BizApps
                    </span>, 
                    ולאורך הקריירה שלו עבד בחברות מובילות כמו אינטל, אמדוקס ואורקל.
                  </span>

                  <span className="block p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200 mt-4">
                    רונן מתמחה בהנגשת נושאי בינה מלאכותית לקהלים מגוונים - 
                    <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">
                      החל מתלמידים וסטודנטים ועד אנשי מקצוע
                    </span>. 
                    בהרצאותיו, הוא מתמקד בהשפעות המעשיות, העסקיות והחברתיות של טכנולוגיות מתקדמות.
                  </span>

                  <span className="block p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-200 mt-4">
                    לרונן 
                    <span className="font-semibold text-purple-700 px-2 py-1 bg-purple-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">
                      רקע ייחודי
                    </span> - 
                    את דרכו המקצועית החל דווקא בתחום הבידור, כשהופיע במחזות זמר בתל אביב, 
                    שיחק בטלנובלה ואף עבד בצוות הבידור באילת. לאחר סיום לימודיו בטכניון, 
                    עבר לתחום ההיי-טק.
                  </span>

                  <span className="block p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-green-200 mt-4">
                    ב-2022 זכה במקום הראשון 
                    <span className="font-semibold text-green-700 px-2 py-1 bg-green-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">
                      בתחרות Technical Story Telling באורקל בשבדיה
                    </span>, 
                    שם שילב באופן יצירתי את ריקוד הסלסה כמטאפורה למוצרי שיווק טכנולוגיים. כיום הוא מרצה בנושאים כמו 
                    <span className="font-semibold text-blue-700 px-2 py-1 bg-blue-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">
                      שיווק דיגיטלי מתקדם ו-CRM Sales בעידן הבינה המלאכותית
                    </span> 
                    עם Copilot.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">נושאי הרצאה מרכזיים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <TopicCard key={index} {...topic} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">גלריה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <GalleryImage key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">צור קשר</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">שם מלא</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 hover:bg-white" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">אימייל</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 hover:bg-white" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">נושא</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 hover:bg-white" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">הודעה</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 hover:bg-white"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                שליחה
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© {new Date().getFullYear()} רונן ארנרייך. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;