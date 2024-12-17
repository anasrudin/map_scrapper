import React from 'react';
import { barChart }from "../../Charts/barChart"; // Correct case-sensitive import

// import { lineChart } from "../../Charts/lineChart";
// import { LineChart } from "../../Charts/LineChart";
import LineChart from "../Charts/LineChart"
import BarChart from "../Charts/BarChart"

// import { LineChart } from "@/components/Dashboard/Charts/LineChart";

import { Card } from "../UI/Card"; // Relative import
import { StatCard } from "../UI/StatCard";
// OR
// import { Card } from "@/components/Dashboard/UI/Card" // Absolute import using path alias



import { Activity, Database, Clock, AlertCircle } from 'lucide-react';

export default function Overview() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="API Requests"
          value="85,421"
          change="+12.5%"
          icon={Activity}
          trend="up"
        />
        <StatCard
          title="Remaining Quota"
          value="14,579"
          icon={Database}
          description="Monthly limit: 100,000"
        />
        <StatCard
          title="Active Tasks"
          value="8"
          icon={Clock}
        />
        <StatCard
          title="Failed Tasks"
          value="2"
          icon={AlertCircle}
          trend="down"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="API Usage">
          <LineChart />
        </Card>
        <Card title="Data Types Extracted">
          <BarChart />
        </Card>
      </div>
      
      <Card title="Recent Activity">
        <div className="space-y-4">
          {/* Activity items would go here */}
        </div>
      </Card>
    </div>
  );
}