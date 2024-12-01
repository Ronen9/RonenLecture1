import { Brain, BookOpen, Users, Calendar, Mail, X, PlayCircle } from 'lucide-react';
import { useState, useCallback, FormEvent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogClose,
} from './components/ui/dialog';
import { images, galleryCategories } from './components/ImageGallerySection';
import { Card, CardContent } from "./components/ui/card";
import { cn } from "./lib/utils";
import { ImageGalleryDialog } from './components/ImageGalleryDialog';
import ronenThumbnail from './assets/ronenThumbnail-CNN.jpg';
import ecommerceEventThumbnail from './assets/ecommerce-event-with-ai.jpg';



const topics = [
  {
    icon: <Brain className="w-10 h-10 text-blue-500" />,
    title: "בינה מלאכותית",
    description: "מומחה בהנגשת טכנולוגיות AI מתקדמות לקהלים מגוונים, כולל יישומים מעשיים בכלי בינה מלאכותית כמו יצירת שירים, הנפשת תמונות, יצירת קטעי וידאו ועד סביבות פיתוח"
  },
  {
    icon: <BookOpen className="w-10 h-10 text-purple-500" />,
    title: "חווית לקוח",
    description: "מוביל תחום Customer Experience במיקרוסופט, התמחות ב-CRM ושיווק דיגיטלי מתקדם"
  },
  {
    icon: <Users className="w-10 h-10 text-indigo-500" />,
    title: "הרצאות וסדנאות",
    description: "ניסיון עשיר בהעברת תכנים מורכבים באופן מעניין ונגיש, שילוב ייחודי של טכנולוגיה ובידור"
  }
];

const videos = [
  {
    title: "סטוריטלינג בעידן הדיגיטלי",
    url: "https://www.youtube.com/embed/NnN2rIhe6ps",
    thumbnail: ronenThumbnail,
    description: "הרצאה מרתקת על סטוריטלינג והעברת מסרים בצורה אפקטיבית"
  },
  {
    title: "עתיד המסחר האלקטרוני",
    url: "https://www.youtube.com/embed/vO_Fprisci4",
    thumbnail: ecommerceEventThumbnail,
    description: "הרצאה בכנס GOeCommerce על עתיד המסחר האלקטרוני וחווית הלקוח"
  }
];


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Add form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  // Handle input blur (when focus leaves the field)
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  // Validate individual field
  const validateField = (name: string, value: string) => {
    let error = '';
    
    if (!value.trim()) {
      error = 'שדה חובה';
    } else if (name === 'email' && !isValidEmail(value)) {
      error = 'כתובת אימייל לא תקינה';
    }

    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      fullName: !formData.fullName.trim() ? 'שדה חובה' : '',
      email: !formData.email.trim() ? 'שדה חובה' : !isValidEmail(formData.email) ? 'כתובת אימייל לא תקינה' : '',
      subject: !formData.subject.trim() ? 'שדה חובה' : '',
      message: !formData.message.trim() ? 'שדה חובה' : ''
    };

    setFormErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    // TODO: Handle form submission
    console.log('Form submitted:', formData);
  };

  // Memoize the category finding function
  const findCategory = useCallback((category: string) => {
    return galleryCategories.find(cat => 
      category === 'students' ? cat.title === "תלמידים וסטודנטים" :
      category === 'business' ? cat.title === "אירועים שונים בתעשיה" : false
    );
  }, []);

  // Optimize handleCategoryClick
  const handleCategoryClick = useCallback((category: string) => {
    const selectedCategory = findCategory(category);
    if (selectedCategory) {
      setSelectedImages(selectedCategory.images.map(img => img.src));
      setCurrentImageIndex(0);
    }
    setIsOpen(true);
  }, [findCategory]);

  // Optimize handleNavigate
  const handleNavigate = useCallback((newIndex: number) => {
    setCurrentImageIndex(newIndex);
    setSelectedImage(selectedImages[newIndex]);
  }, [selectedImages]);

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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">תחומי התמחות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {topics.map((topic, index) => (
              <Card 
                key={index}
                className={cn(
                  "group relative overflow-hidden",
                  "bg-white/50 backdrop-blur-sm",
                  "border border-gray-200/50",
                  "hover:border-blue-200/50",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:shadow-blue-100/50",
                  "transform hover:-translate-y-1",
                  "mx-2 sm:mx-0"
                )}
              >
                <CardContent className="p-6">
                  <div className="mb-6 flex justify-center">
                    <div className={cn(
                      "p-3 rounded-xl",
                      "bg-gradient-to-br from-white to-gray-50",
                      "shadow-inner",
                      "group-hover:scale-110 transition-transform duration-300",
                      "border border-gray-100"
                    )}>
                      {topic.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">סרטונים נבחרים</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card 
                key={index}
                className={cn(
                  "group relative overflow-hidden",
                  "bg-white/50 backdrop-blur-sm",
                  "border border-gray-200/50",
                  "hover:border-blue-200/50",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:shadow-blue-100/50",
                )}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    {!isPlaying[video.url] ? (
                      <>
                        <div 
                          className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-all duration-300 flex items-center justify-center cursor-pointer z-10"
                          onClick={() => setIsPlaying(prev => ({ ...prev, [video.url]: true }))}
                        >
                          <div className="bg-blue-600/90 hover:bg-blue-700 rounded-full p-4 transform hover:scale-110 transition-all duration-300">
                            <PlayCircle className="w-12 h-12 text-white" />
                          </div>
                        </div>
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </>
                    ) : (
                      <iframe
                        src={`${video.url}?autoplay=1`}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {video.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
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
            >
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={images.business17}
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
                        לחץ לצפייה בגליה
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
        <ImageGalleryDialog
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          images={selectedImages}
          currentIndex={currentImageIndex}
          onNavigate={handleNavigate}
        />
      )}

      {/* Contact Form */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">צור קשר</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 p-4 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                      שם מלא
                      <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={cn(
                        "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus:ring-2 transition-all duration-300 bg-white/50 hover:bg-white text-base",
                        formErrors.fullName 
                          ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-400 focus:ring-blue-200"
                      )}
                    />
                    {formErrors.fullName && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                      אימייל
                      <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={cn(
                        "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus:ring-2 transition-all duration-300 bg-white/50 hover:bg-white text-base",
                        formErrors.email 
                          ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-400 focus:ring-blue-200"
                      )}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                    נושא
                    <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={cn(
                      "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus:ring-2 transition-all duration-300 bg-white/50 hover:bg-white text-base",
                      formErrors.subject 
                        ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-400 focus:ring-blue-200"
                    )}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                    הודעה
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={cn(
                      "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus:ring-2 transition-all duration-300 bg-white/50 hover:bg-white text-base",
                      formErrors.message 
                        ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-400 focus:ring-blue-200"
                    )}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                  )}
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  שליחה
                </button>
              </div>
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
    </div>
  );
}

export default App;