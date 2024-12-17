import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  trend?: 'up' | 'down';
  description?: string;
}

export const StatCard = ({ 
  title, 
  value, 
  icon: Icon,
  change,
  trend,
  description 
}: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {change}
            </p>
          )}
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
}