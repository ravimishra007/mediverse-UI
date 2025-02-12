import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', free: 500, planA: 1000, planB: 1500 },
  { month: 'Feb', free: 800, planA: 1200, planB: 1700 },
  { month: 'Mar', free: 1300, planA: 1400, planB: 2200 },
  { month: 'Apr', free: 1800, planA: 1600, planB: 3000 },
  { month: 'May', free: 2400, planA: 2000, planB: 3700 },
  { month: 'June', free: 3000, planA: 2700, planB: 4500 },
];

const SubscribersChart = () => {
  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold">Subscribers</h2>
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
          <Legend />
          <Line type="monotone" dataKey="free" stroke="#606060" strokeWidth={2} dot={{ r: 6 }} />
          <Line type="monotone" dataKey="planA" stroke="#742193" strokeWidth={2} dot={{ r: 6 }} />
          <Line type="monotone" dataKey="planB" stroke="#F9A825" strokeWidth={2} dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-2 flex justify-around text-sm">
        <span className="flex items-center">
          <span className="w-4 h-4 bg-gray-500 inline-block mr-2"></span> Free: 340
        </span>
        <span className="flex items-center">
          <span className="w-4 h-4 bg-purple-700 inline-block mr-2"></span> Plan A: 340
        </span>
        <span className="flex items-center">
          <span className="w-4 h-4 bg-yellow-500 inline-block mr-2"></span> Plan B: 4500
        </span>
      </div>
    </div>
  );
};

export default SubscribersChart;
