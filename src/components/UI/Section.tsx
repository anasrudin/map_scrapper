import React from 'react';
import Container from '../Layout/Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  description?: string;
}

export default function Section({ 
  children, 
  id, 
  className = '',
  title,
  description 
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <Container>
        {title && (
          <h2 className="text-4xl font-bold text-center mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}