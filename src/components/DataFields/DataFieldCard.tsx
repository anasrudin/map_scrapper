import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DataFieldCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  examples?: string[];
}

export default function DataFieldCard({ icon: Icon, name, description, examples }: DataFieldCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
      <Icon className="w-6 h-6 text-blue-600 mb-3" />
      <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      {examples && (
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {example}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}