import React from 'react';
import { Card } from '../../UI/Card';
import { Download, Filter } from 'lucide-react';

const headers = ['Name', 'Address', 'Phone', 'Rating', 'Reviews'];
const data = [
  {
    name: "Joe's Pizza",
    address: '123 Main St, New York',
    phone: '+1 234-567-8900',
    rating: '4.5',
    reviews: '1,234'
  },
  {
    name: "Mike's Diner",
    address: '456 Broadway, New York',
    phone: '+1 234-567-8901',
    rating: '4.2',
    reviews: '890'
  }
];

export default function DataTable() {
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
          <input
            type="text"
            placeholder="Search data..."
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Download className="w-5 h-5" />
          <span>Export</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              {headers.map((header) => (
                <th key={header} className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.address}</td>
                <td className="px-4 py-3">{row.phone}</td>
                <td className="px-4 py-3">{row.rating}</td>
                <td className="px-4 py-3">{row.reviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}