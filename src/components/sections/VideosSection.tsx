import { FC, useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { VIDEOS } from '@/constants';
import { motion } from 'framer-motion';

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
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          סרטונים נבחרים
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={cn(
                  "group relative overflow-hidden rounded-xl border-0 transition-all duration-300",
                  "hover:shadow-2xl hover:shadow-blue-100/50",
                  "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm"
                )}
              >
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    {isPlaying[video.url] ? (
                      <motion.iframe
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={`${video.url}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full rounded-t-xl"
                      />
                    ) : (
                      <motion.div 
                        className="relative cursor-pointer overflow-hidden rounded-t-xl"
                        onClick={() => handleVideoClick(video.url)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-all" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {video.title}
                    </h3>
                    <p className="text-gray-600">
                      {video.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection; 