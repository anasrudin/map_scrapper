import React from 'react';
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Business Info', value: 8000 },
  { name: 'Reviews', value: 6000 },
  { name: 'Photos', value: 4000 },
  { name: 'Contact', value: 7000 },
  { name: 'Hours', value: 5000 }
];

export default function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#2563eb" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}