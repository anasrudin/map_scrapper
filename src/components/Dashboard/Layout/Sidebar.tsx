import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, ListTodo, Database, 
  BarChart2, Settings, Map 
} from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/', icon: LayoutDashboard },
  { name: 'Tasks', href: '/tasks', icon: ListTodo },
  { name: 'Data', href: '/data', icon: Database },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Map className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">MapScraper</span>
        </div>
      </div>
      
      <nav className="mt-6">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => `
              flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50
              ${isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''}
            `}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}