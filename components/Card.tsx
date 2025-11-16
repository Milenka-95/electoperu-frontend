import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export default function Card({ children, className = '', title, onClick }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 ${className}`}
      onClick={onClick}
    >
      {title && <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>}
      {children}
    </div>
  );
}
