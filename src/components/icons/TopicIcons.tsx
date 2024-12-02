import { FC } from 'react';
import { Brain, BookOpen, Users } from 'lucide-react';

export const BrainIcon: FC = () => (
  <Brain className="w-10 h-10 text-blue-500" />
);

export const BookIcon: FC = () => (
  <BookOpen className="w-10 h-10 text-purple-500" />
);

export const UsersIcon: FC = () => (
  <Users className="w-10 h-10 text-indigo-500" />
); 