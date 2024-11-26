import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function TopicCard({ icon, title, description }: TopicCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}