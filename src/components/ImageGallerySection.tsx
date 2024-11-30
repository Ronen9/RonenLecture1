import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import { cn } from "../lib/utils";

// Update image imports
export const images = {
  // Student images
  img1: new URL('../assets/students/1.jpg', import.meta.url).href,
  img2: new URL('../assets/students/2.jpeg', import.meta.url).href,
  img3: new URL('../assets/students/3.jpg', import.meta.url).href,
  img4: new URL('../assets/students/4.jpg', import.meta.url).href,
  img5: new URL('../assets/students/5.jpg', import.meta.url).href,
  img6: new URL('../assets/students/6.jpg', import.meta.url).href,
  img7: new URL('../assets/students/7.jpg', import.meta.url).href,
  img8: new URL('../assets/students/8.jpg', import.meta.url).href,
  img9: new URL('../assets/students/9.jpg', import.meta.url).href,
  img10: new URL('../assets/students/10.jpg', import.meta.url).href,
  img11: new URL('../assets/students/11.jpg', import.meta.url).href,
  img12: new URL('../assets/students/12.jpg', import.meta.url).href,
  // Business images
  business1: new URL('../assets/business/image-001.jpg', import.meta.url).href,
  business2: new URL('../assets/business/image-002.jpg', import.meta.url).href,
  business3: new URL('../assets/business/image-003.jpg', import.meta.url).href,
  business4: new URL('../assets/business/image-004.jpg', import.meta.url).href,
  business5: new URL('../assets/business/image-005.jpg', import.meta.url).href,
  business6: new URL('../assets/business/image-006.jpg', import.meta.url).href,
  business7: new URL('../assets/business/image-007.jpg', import.meta.url).href,
  business8: new URL('../assets/business/image-008.jpg', import.meta.url).href,
  business9: new URL('../assets/business/image-009.jpg', import.meta.url).href,
  business10: new URL('../assets/business/image-010.jpg', import.meta.url).href,
  business11: new URL('../assets/business/image-011.jpg', import.meta.url).href,
  business12: new URL('../assets/business/image-012.jpg', import.meta.url).href,
  business13: new URL('../assets/business/image-013.jpg', import.meta.url).href,
  business14: new URL('../assets/business/image-014.jpg', import.meta.url).href,
  business15: new URL('../assets/business/image-015.jpg', import.meta.url).href,
  business16: new URL('../assets/business/image-016.jpg', import.meta.url).href,
  business17: new URL('../assets/business/image-017.jpg', import.meta.url).href,
  business18: new URL('../assets/business/image-018.jpg', import.meta.url).href,
  business19: new URL('../assets/business/image-019.jpg', import.meta.url).href,
  // Other images
  ronenCNN: new URL('../assets/RonenCNN.png', import.meta.url).href,
};

console.log('Loaded images:', images);

interface GalleryCategory {
  coverImage: string;
  title: string;
  images: Array<{
    src: string;
    description: string;
  }>;
}

export const galleryCategories: GalleryCategory[] = [
  {
    coverImage: images.img2,
    title: "תלמידים וסטודנטים",
    images: [
      {
        src: images.img1,
        description: "גלויות חולון מסיטי ותואר אשון HIT"
      },
      {
        src: images.img2,
        description: "רונן מעביר הרצאה לתיכון"
      },
      {
        src: images.img3,
        description: "פגישות עם קהילת פייתון"
      },
      {
        src: images.img4,
        description: "הרצאות מטעם משרד החינוך"
      },
      {
        src: images.img5,
        description: "פייתון עם קהילת פייתון"
      },
      {
        src: images.img6,
        description: "מפגש קהילת פייתון נוסף"
      },
      {
        src: images.img7,
        description: "הרצאה על AI בתעשיה"
      },
      {
        src: images.img8,
        description: "פגישות AI של הרובוטים"
      },
      {
        src: images.img9,
        description: "הכנה עצירה - יסודות השיווק בעידן ה-AI"
      },
      {
        src: images.img10,
        description: "בינה ישראלי - ארץ הרובוטים"
      },
      {
        src: images.img11,
        description: "כנס טכנולוגיה מתקדמת"
      },
      {
        src: images.img12,
        description: "הרצאה בנושא חדשנות"
      }
    ]
  },
  {
    coverImage: images.business1,
    title: "אירועים שונים בתעשיה",
    images: [
      { src: images.business1, description: "הרצאה בכנס טכנולוגי" },
      { src: images.business2, description: "מפגש מנהלים בתעשייה" },
      { src: images.business3, description: "סדנת AI למנהלים" },
      { src: images.business4, description: "כנס חדשנות בתעשייה" },
      { src: images.business5, description: "הרצאה על טרנספורמציה דיגיטלית" },
      { src: images.business6, description: "פאנל מומחים בתחום ה-AI" },
      { src: images.business7, description: "סדנת חדשנות לארגונים" },
      { src: images.business8, description: "הרצאה על עתיד העבודה" },
      { src: images.business9, description: "כנס טכנולוגיות מתקדמות" },
      { src: images.business10, description: "מפגש מקצועי בתעשייה" },
      { src: images.business11, description: "הרצאה על מגמות טכנולוגיות" },
      { src: images.business12, description: "סדנת חדשנות ארגונית" },
      { src: images.business13, description: "כנס מובילי דיגיטל" },
      { src: images.business14, description: "הרצאה על טרנספורמציה ארגונית" },
      { src: images.business15, description: "פורום מנהלי טכנולוגיה" },
      { src: images.business16, description: "סדנת מנהיגות טכנולוגית" },
      { src: images.business17, description: "כנס חדשנות ו-AI" },
      { src: images.business18, description: "מפגש מובילי תעשייה" }
    ]
  }
];

// Add image preloading function
const preloadImages = (imageSources: string[]) => {
  imageSources.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

export default function ImageGallerySection() {
  const [selectedImage, setSelectedImage] = useState<{src: string; description: string} | null>(null);

  // Preload images on component mount
  useEffect(() => {
    const allImages = [
      ...Object.values(images),
      ...galleryCategories.flatMap(category => 
        category.images.map(img => img.src)
      )
    ];
    preloadImages(allImages);
  }, []);

  // Use in handleCategoryClick

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">גלריה</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryCategories.map((category, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img
                    src={category.coverImage}
                    alt={category.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              {category.images.length > 0 && (
                <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto">
                  <DialogClose className="absolute left-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white opacity-70 hover:opacity-100 focus:outline-none focus:ring-2">
                    <X className="h-6 w-6" />
                    <span className="sr-only">סגור</span>
                  </DialogClose>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                    {category.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative group cursor-pointer aspect-square overflow-hidden rounded-lg"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image.src}
                          alt={image.description}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>

      {/* Full screen image dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className={cn(
          "w-screen h-screen",
          "max-w-screen max-h-screen",
          "p-4 sm:p-6",
          "bg-black/80",
          "border-none",
          "flex items-center justify-center",
          "relative"
        )}>
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            <X className="h-6 w-6" />
            <span className="sr-only">סגור</span>
          </DialogClose>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="group relative max-w-full max-h-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.description}
                  className={cn(
                    "w-auto h-auto",
                    "max-w-[calc(100vw-2rem)]",
                    "max-h-[calc(100vh-2rem)]",
                    "object-contain",
                    "rounded-lg",
                    "shadow-2xl",
                    "transition-transform duration-300",
                    "group-hover:scale-[1.02]"
                  )}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center rounded-b-lg">
                  {selectedImage.description}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
} 