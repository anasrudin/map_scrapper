import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
};
