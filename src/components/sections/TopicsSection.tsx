import { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TOPICS } from '@/constants';
import { motion } from 'framer-motion';

const TopicsSection: FC = () => {
  return (
    <section className="py-8 sm:py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center"
        >
          תחומי התמחות
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TOPICS.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={cn(
                    "group relative overflow-hidden rounded-xl border-0 transition-all duration-300",
                    "hover:shadow-2xl hover:shadow-blue-100/50 hover:scale-105",
                    "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm",
                    "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 before:opacity-0 before:transition-opacity before:duration-300",
                    "hover:before:opacity-100"
                  )}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4 relative">
                      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <IconComponent />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection; 