import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogClose } from './ui/dialog';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "../lib/utils";
import { useState } from 'react';

interface ImageGalleryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export function ImageGalleryDialog({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate
}: ImageGalleryDialogProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="bg-black/90 backdrop-blur-sm" />
        <DialogContent className={cn(
          "w-[95vw] h-[95vh]",
          "max-w-[95vw] max-h-[95vh]",
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
            onClick={() => onNavigate(currentIndex - 1)}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-50",
              "p-2 rounded-full bg-black/50 text-white",
              "hover:bg-black/70 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-white/20",
              currentIndex === 0 && "opacity-50 cursor-not-allowed"
            )}
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">תמונה קודמת</span>
          </button>

          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-50",
              "p-2 rounded-full bg-black/50 text-white",
              "hover:bg-black/70 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-white/20",
              currentIndex === images.length - 1 && "opacity-50 cursor-not-allowed"
            )}
            disabled={currentIndex === images.length - 1}
          >
            <ArrowRight className="h-6 w-6" />
            <span className="sr-only">תמונה הבאה</span>
          </button>

          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center p-4 relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
              </div>
            )}
            <img
              src={images[currentIndex]}
              alt={`תמונה ${currentIndex + 1}`}
              className={cn(
                "max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-300",
                isLoading ? "opacity-0" : "opacity-100"
              )}
              style={{ maxHeight: 'calc(95vh - 2rem)' }}
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
} 