import React, { useState } from 'react';

interface GalleryImageProps {
  imageUrl: string;
  title: string;
  location: string;
}

export function GalleryImage({ imageUrl, title, location }: GalleryImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-lg overflow-hidden aspect-video"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent
          flex items-end p-6 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-200">{location}</p>
        </div>
      </div>
    </div>
  );
}