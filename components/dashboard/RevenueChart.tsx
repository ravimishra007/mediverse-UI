import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 1000 },
  { month: 'Feb', revenue: 2000 },
  { month: 'Mar', revenue: 3000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 4000 },
];

const RevenueChart = () => {
  return (
    <div className=" p-4 ">
      <h2 className="text-xl font-bold">Revenue</h2>
      <div className="flex justify-end space-x-4 mb-2">
        <select className="border rounded px-2 py-1">
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
        <select className="border rounded px-2 py-1">
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#742193"
            strokeWidth={2}
            dot={{ r: 6, fill: '#F9A825' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
