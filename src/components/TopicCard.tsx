import type { ReactNode } from 'react';

interface TopicCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function TopicCard({ icon, title, description }: TopicCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start">
        <div className="transform scale-90 sm:scale-100">{icon}</div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-center sm:text-right">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 text-center sm:text-right leading-relaxed">{description}</p>
    </div>
  );
}