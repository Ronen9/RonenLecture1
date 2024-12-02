import { FC } from 'react';
import { Card, CardContent } from '../ui/card';
import { cn } from '../../lib/utils';
import { TOPICS } from '../../constants';

const TopicsSection: FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">תחומי התמחות</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TOPICS.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <Card 
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-xl border-2 transition-all duration-300",
                  "hover:shadow-xl hover:shadow-blue-100/50",
                  "transform hover:-translate-y-1"
                )}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4"><IconComponent /></div>
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection; 