import React from 'react';
import { Card } from '../../UI/Card';
import { Search, Plus } from 'lucide-react';

export default function NewTaskForm() {
  return (
    <Card>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Query
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="e.g., restaurants in New York"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data Fields
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="all">All Fields</option>
              <option value="basic">Basic Info Only</option>
              <option value="custom">Custom Selection</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Export Format
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          <span>Create New Task</span>
        </button>
      </form>
    </Card>
  );
}