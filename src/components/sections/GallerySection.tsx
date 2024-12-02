import { FC, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogClose } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// תמונות מייצגות לכל קטגוריה
const THUMBNAIL_STUDENTS = '/src/assets/students/1.jpg';
const THUMBNAIL_BUSINESS = '/src/assets/business/image-001.jpg';

// מערכי תמונות לכל קטגוריה
const studentImages = Array.from({ length: 12 }, (_, i) => {
  const num = i + 1;
  const ext = num === 2 ? 'jpeg' : 'jpg';
  return `/src/assets/students/${num}.${ext}`;
});

const businessImages = Array.from({ length: 19 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `/src/assets/business/image-${num}.jpg`;
});

export const galleryCategories = [
  {
    id: 'students',
    title: 'הרצאות לתלמידים וסטודנטים',
    thumbnail: THUMBNAIL_STUDENTS,
    images: studentImages.map((src, index) => ({
      src,
      title: `הרצאה ${index + 1} לתלמידים`
    }))
  },
  {
    id: 'business',
    title: 'הרצאות לעסקים וארגונים',
    thumbnail: THUMBNAIL_BUSINESS,
    images: businessImages.map((src, index) => ({
      src,
      title: `הרצאה ${index + 1} לעסקים`
    }))
  }
];

const GallerySection: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<typeof galleryCategories[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleCategoryClick = useCallback((category: typeof galleryCategories[0]) => {
    setSelectedCategory(category);
    setIsOpen(true);
  }, []);

  const handleImageClick = useCallback((image: { src: string }, index: number) => {
    setSelectedImage(image.src);
    setCurrentImageIndex(index);
  }, []);

  const handleNavigate = useCallback((direction: 'prev' | 'next') => {
    if (!selectedCategory) return;
    
    const totalImages = selectedCategory.images.length;
    let newIndex = currentImageIndex;
    
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    } else {
      newIndex = (currentImageIndex + 1) % totalImages;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(selectedCategory.images[newIndex].src);
  }, [currentImageIndex, selectedCategory]);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          גלריה
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {galleryCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                className={cn(
                  "group relative overflow-hidden rounded-xl border-2 transition-all duration-300",
                  "hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50",
                  "transform hover:-translate-y-1",
                  "cursor-pointer"
                )}
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={category.thumbnail}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={cn(
                      "absolute inset-0 flex items-center justify-center",
                      "bg-gradient-to-t from-black/80 via-black/50 to-transparent",
                      "transition-all duration-300",
                      index === 0 
                        ? "group-hover:from-blue-900/80 group-hover:via-blue-800/50"
                        : "group-hover:from-purple-900/80 group-hover:via-purple-800/50"
                    )}>
                      <div className="text-center transform transition-all duration-300 group-hover:translate-y-0 group-hover:scale-105">
                        <span className="text-2xl font-bold text-white mb-2 block">
                          {category.title}
                        </span>
                        <span className={cn(
                          "opacity-0 group-hover:opacity-100 transition-opacity duration-300 block",
                          index === 0 ? "text-blue-200" : "text-purple-200"
                        )}>
                          לחץ לצפייה בגלריה
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Grid Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogPortal>
          <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
          <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto bg-white">
            <DialogClose className="absolute right-4 top-4">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
            {selectedCategory && (
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center">{selectedCategory.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {selectedCategory.images.map((image, index) => (
                    <motion.div 
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handleImageClick(image, index)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </DialogPortal>
      </Dialog>

      {/* Full Image Preview Dialog */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] h-[95vh] bg-black/95 border-0 p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img
                  src={selectedImage}
                  alt="תמונה מוגדלת"
                  className="max-w-full max-h-full object-contain"
                  style={{ 
                    width: 'auto', 
                    height: 'auto',
                    maxHeight: 'calc(95vh - 2rem)'
                  }}
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                {selectedCategory && `${currentImageIndex + 1} / ${selectedCategory.images.length}`}
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default GallerySection; 