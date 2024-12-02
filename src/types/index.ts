import { FC } from 'react';

export interface Topic {
  icon: FC;
  title: string;
  description: string;
}

export interface Video {
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

export interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  fullName: string;
  email: string;
  subject: string;
  message: string;
} 