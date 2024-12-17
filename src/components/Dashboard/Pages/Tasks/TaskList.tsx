import React from 'react';
import { Card } from '../../UI/Card';


import { Play, Pause, Trash2 } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  status: 'running' | 'paused' | 'completed' | 'failed';
  progress: number;
  lastRun: string;
}

const tasks: Task[] = [
  {
    id: '1',
    name: 'Restaurants in New York',
    status: 'running',
    progress: 45,
    lastRun: '2024-03-15 14:30'
  },
  {
    id: '2',
    name: 'Hotels in Paris',
    status: 'paused',
    progress: 70,
    lastRun: '2024-03-14 09:15'
  }
];

export default function TaskList() {
  return (
    <Card>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex-1">
              <h4 className="font-medium">{task.name}</h4>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 ml-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                {task.status === 'running' ? (
                  <Pause className="w-5 h-5 text-gray-600" />
                ) : (
                  <Play className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Trash2 className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}