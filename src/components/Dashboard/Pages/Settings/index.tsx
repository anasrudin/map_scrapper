import React from 'react';
import { Card } from '../../UI/Card';
import { Key, Bell, User, CreditCard } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <Card title="API Keys">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Key className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Production Key</p>
                <p className="text-sm text-gray-600">Last used 2 hours ago</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              Regenerate
            </button>
          </div>
        </div>
      </Card>
      
      <Card title="Notification Settings">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates about your tasks</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Profile">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-gray-600" />
              </div>
              <button className="text-blue-600 hover:text-blue-700">
                Change Avatar
              </button>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg"
                defaultValue="John Doe"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg"
                defaultValue="john@example.com"
              />
            </div>
          </div>
        </Card>
        
        <Card title="Billing">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Current Plan: Professional</p>
                <p className="text-sm text-gray-600">100,000 API calls per month</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              Upgrade Plan
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}