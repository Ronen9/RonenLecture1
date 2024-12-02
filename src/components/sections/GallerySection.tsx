import { FC, useState, useCallback } from 'react';
import { Card, CardContent } from '../ui/card';
import { cn } from '../../lib/utils';
import { images, galleryCategories } from '../ImageGallerySection';
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogClose } from '../ui/dialog';
import { X } from 'lucide-react';
import { ImageGalleryDialog } from '../ImageGalleryDialog';

const GallerySection: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const findCategory = useCallback((category: string) => {
    return galleryCategories.find(cat => 
      category === 'students' ? cat.title === "תלמידים וסטודנטים" :
      category === 'business' ? cat.title === "אירועים שונים בתעשיה" : false
    );
  }, []);

  const handleCategoryClick = useCallback((category: string) => {
    const selectedCategory = findCategory(category);
    if (selectedCategory) {
      setSelectedImages(selectedCategory.images.map(img => img.src));
      setCurrentImageIndex(0);
    }
    setIsOpen(true);
  }, [findCategory]);

  const handleNavigate = useCallback((newIndex: number) => {
    setCurrentImageIndex(newIndex);
    setSelectedImage(selectedImages[newIndex]);
  }, [selectedImages]);

  return (
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
                      לחץ לצפייה בגלריה
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>

      {/* Full Image Preview Dialog */}
      {selectedImage && (
        <ImageGalleryDialog
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          images={selectedImages}
          currentIndex={currentImageIndex}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
};

export default GallerySection; 