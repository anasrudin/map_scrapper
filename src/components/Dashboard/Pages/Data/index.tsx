import React from 'react';
import DataTable from './DataTable';

export default function Data() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Scraped Data</h1>
      </div>
      
      <DataTable />
    </div>
  );
}