import React from 'react';
import { Card } from '../../UI/Card';
import BarChart from "../../Charts/BarChart";
import LineChart from "../../Charts/LineChart";


export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="API Usage Over Time">
          <LineChart />
        </Card>
        <Card title="Most Requested Data Fields">
          <BarChart />
        </Card>
      </div>
      
      <Card title="Usage Statistics">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">Total Requests</h4>
            <p className="text-2xl font-bold mt-1">1,234,567</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">Success Rate</h4>
            <p className="text-2xl font-bold mt-1">99.9%</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600">Average Response Time</h4>
            <p className="text-2xl font-bold mt-1">245ms</p>
          </div>
        </div>
      </Card>
    </div>
  );
}