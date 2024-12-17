import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-lg font-semibold transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-white text-blue-600 hover:bg-blue-50',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}