import React from 'react';

interface CardProps {
  header: string;
  body: string;
  imageSrc: string;
  styles: string;
}

export const Card: React.FC<CardProps> = ({ header, body, imageSrc, styles }) => {
  return (
    <div className={`${styles} bg-gray-200 rounded-md p-4 shadow-md`}>
      <h2 className="text-xl font-bold mb-2">{header}</h2>
      <div className="flex">
        <img src={imageSrc} alt={header} className="rounded-md mb-4" />
        <p>{body}</p>
      </div>
    </div>
  );
};
