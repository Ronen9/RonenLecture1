import { FC, useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { cn } from '../../lib/utils';
import { VIDEOS } from '../../constants';

const VideosSection: FC = () => {
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  
  const handleVideoClick = (videoId: string) => {
    setIsPlaying(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">סרטונים נבחרים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {VIDEOS.map((video, index) => (
            <Card 
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-xl border-2 transition-all duration-300",
                "hover:shadow-xl",
                "transform hover:-translate-y-1"
              )}
            >
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  {isPlaying[video.url] ? (
                    <iframe
                      src={`${video.url}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <div 
                      className="relative cursor-pointer"
                      onClick={() => handleVideoClick(video.url)}
                    >
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                        <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection; 