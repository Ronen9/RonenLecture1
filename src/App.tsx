import { Brain, BookOpen, Users, Calendar, Mail, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { TopicCard } from './components/TopicCard';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogClose,
} from './components/ui/dialog';
import { images, galleryCategories } from './components/ImageGallerySection';
import { Card, CardContent } from "./components/ui/card";
import { cn } from "./lib/utils";



const topics = [
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "בינה מלאכותית",
    description: "מומחה בהנגשת טכנולוגיות AI מתקדמות לקהלים מגוונים, כולל יישומים מעשיים בכלי בינה מלאכותית כמו יצירת שירים, הנפשת תמונות, יצירת קטעי וידאו ועד סביבות פיתוח"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "חווית לקוח",
    description: "מוביל תחום Customer Experience במיקרוסופט, התמחות ב-CRM ושיווק דיגיטלי מתקדם"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "הרצאות וסדנאות",
    description: "ניסיון עשיר בהעברת תכנים מורכבים באופן מעניין ונגיש, שילוב ייחודי של טכנולוגיה ובידור"
  }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoverText, setHoverText] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleCategoryClick = (category: string) => {
    const selectedCategory = galleryCategories.find(cat => cat.title === "תלמידים וסטודנטים");
    if (selectedCategory) {
      setSelectedImages(selectedCategory.images.map(img => img.src));
      setCurrentImageIndex(0);
    }
    setIsOpen(true);
  };

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
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center">
            <div className="max-w-4xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">רונן ארנרייך</h1>
              <p className="text-xl md:text-2xl text-white drop-shadow-md">מרצה מוביל בתחום הבינה המלאכותית והשפעתה על עולמנו המודרני</p>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-12">
            <div className="w-full md:w-1/3">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 p-4 sm:p-6 h-full">
                <img
                  src={images.ronenCNN}
                  alt="רונן ארנרייך"
                  className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6 hover:scale-[1.02] transition-transform duration-300"
                />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">רונן ארנרייך</h2>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">פרטי התקשרות</h3>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    <span className="text-sm sm:text-base text-gray-700">ronener@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/80 rounded-lg hover:bg-blue-50/80 transition-all duration-300">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    <span className="text-sm sm:text-base text-gray-700">זמין להרצאות ברחבי הארץ</span>
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
                    בהרצאותיו, הוא מתמד בהשפעות המעשיות, העקיות והחברתיות של טכנולוגיות מתקדמות.
                  </span>

                  <span className="block p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-200 mt-4">
                    לרונן 
                    <span className="font-semibold text-purple-700 px-2 py-1 bg-purple-50 rounded-md mx-1 inline-block hover:scale-105 transition-transform">
                      רקע ייחודי
                    </span> - 
                    את דרכו המקצועית החל דווקא בתחום הבידור, כשהופיע במחזות זמר בתל אביב, 
                    שיחק בטלנובלה ואף עבד בצוות הבידור באית. לאחר סיום לימודיו בטכניון, 
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
      <section className="bg-white py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">תחומי התמחות</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {topics.map((topic, index) => (
              <TopicCard key={index} {...topic} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">גלריה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <Card 
              className={cn(
                "group relative overflow-hidden rounded-xl border-2 transition-all duration-300",
                "hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50",
                "transform hover:-translate-y-1",
                "cursor-pointer"
              )}
              onClick={() => handleCategoryClick('students')}
              onMouseEnter={() => setHoverText('הרצאות לתלמידים וסטודנטים')}
              onMouseLeave={() => setHoverText('')}
            >
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={images.img1} 
                    alt="קטגוריה תלמידים" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center",
                    "bg-gradient-to-t from-black/80 via-black/50 to-transparent",
                    "transition-all duration-300",
                    "group-hover:from-blue-900/80 group-hover:via-blue-800/50"
                  )}>
                    <div className="text-center transform transition-all duration-300 group-hover:translate-y-0 group-hover:scale-105">
                      <span className="text-2xl font-bold text-white mb-2 block">
                        הרצאות לתלמידים וסטודנטים
                      </span>
                      <span className="text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">
                        לחץ לצפייה בגלריה
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className={cn(
                "group relative overflow-hidden rounded-xl border-2 transition-all duration-300",
                "hover:border-purple-400 hover:shadow-xl hover:shadow-purple-100/50",
                "transform hover:-translate-y-1",
                "cursor-pointer"
              )}
              onClick={() => handleCategoryClick('business')}
              onMouseEnter={() => setHoverText('הרצאות לעסקים וארגונים')}
              onMouseLeave={() => setHoverText('')}
            >
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={images.img7} 
                    alt="קטגוריה עסקים" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center",
                    "bg-gradient-to-t from-black/80 via-black/50 to-transparent",
                    "transition-all duration-300",
                    "group-hover:from-purple-900/80 group-hover:via-purple-800/50"
                  )}>
                    <div className="text-center transform transition-all duration-300 group-hover:translate-y-0 group-hover:scale-105">
                      <span className="text-2xl font-bold text-white mb-2 block">
                        הרצאות לעסקים וארגונים
                      </span>
                      <span className="text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">
                        לחץ לצפייה בגלריה
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogPortal>
          <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
          <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto bg-white">
            <DialogClose className="absolute right-4 top-4">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
              {selectedImages.map((imageSrc, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => {
                    setSelectedImage(imageSrc);
                    setCurrentImageIndex(index);
                  }}
                >
                  <img 
                    src={imageSrc} 
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>

      {/* Full Image Dialog */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogPortal>
            <DialogOverlay className="bg-black/90 backdrop-blur-sm" />
            <DialogContent className={cn(
              "w-[95vw] h-[90vh]",
              "max-w-[95vw] max-h-[90vh]",
              "p-0 bg-transparent border-none",
              "overflow-hidden",
              "my-4"
            )}>
              <DialogTitle className="sr-only">תצוגה מורחבת של תמונה</DialogTitle>
              <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
                <X className="h-4 w-4" />
                <span className="sr-only">סגור</span>
              </DialogClose>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => {
                  const newIndex = (currentImageIndex - 1 + selectedImages.length) % selectedImages.length;
                  setCurrentImageIndex(newIndex);
                  setSelectedImage(selectedImages[newIndex]);
                }}
                className={cn(
                  "absolute left-4 top-1/2 -translate-y-1/2 z-50",
                  "p-2 rounded-full bg-black/50 text-white",
                  "hover:bg-black/70 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-white/20",
                  currentImageIndex === 0 && "opacity-50 cursor-not-allowed"
                )}
                disabled={currentImageIndex === 0}
              >
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">תמונה קודמת</span>
              </button>

              <button
                onClick={() => {
                  const newIndex = (currentImageIndex + 1) % selectedImages.length;
                  setCurrentImageIndex(newIndex);
                  setSelectedImage(selectedImages[newIndex]);
                }}
                className={cn(
                  "absolute right-4 top-1/2 -translate-y-1/2 z-50",
                  "p-2 rounded-full bg-black/50 text-white",
                  "hover:bg-black/70 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-white/20",
                  currentImageIndex === selectedImages.length - 1 && "opacity-50 cursor-not-allowed"
                )}
                disabled={currentImageIndex === selectedImages.length - 1}
              >
                <ArrowRight className="h-6 w-6" />
                <span className="sr-only">תמונה הבאה</span>
              </button>

              {/* Image Container */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="תמונה מוגדלת"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {selectedImages.length}
              </div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      )}

      {/* Contact Form */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">צור קשר</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 p-4 sm:p-8">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-2">שם מלא</label>
                  <input 
                    type="text" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 hover:bg-white text-sm sm:text-base" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-2">אימייל</label>
                  <input 
                    type="email" 
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 hover:bg-white text-sm sm:text-base" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-2">נושא</label>
                <input 
                  type="text" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 hover:bg-white text-sm sm:text-base" 
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-2">הודעה</label>
                <textarea 
                  rows={4} 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 hover:bg-white text-sm sm:text-base"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base"
              >
                שליחה
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base">© {new Date().getFullYear()} רונן ארנרייך. כל הזכויות שמורות.</p>
        </div>
      </footer>

      {/* Display Hover Text */}
      {hoverText && (
        <div className="absolute top-0 left-0 p-4 bg-gray-800 text-white rounded">
          {hoverText}
        </div>
      )}

      {/* Example of an element that sets hoverText */}
      <div
        onMouseEnter={() => setHoverText('Your hover text here')}
        onMouseLeave={() => setHoverText('')}
      >
        {/* Your content here */}
      </div>
    </div>
  );
}

export default App;