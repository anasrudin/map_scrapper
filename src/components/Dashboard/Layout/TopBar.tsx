import React from 'react';
import { Bell, User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold">Dashboard</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <span className="text-sm font-medium">John Doe</span>
        </div>
      </div>
    </div>
  );
}