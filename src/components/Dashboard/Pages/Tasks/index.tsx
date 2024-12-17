import React from 'react';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

export default function Tasks() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Scraping Tasks</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <NewTaskForm />
        </div>
        <div className="lg:col-span-2">
          <TaskList />
        </div>
      </div>
    </div>
  );
}