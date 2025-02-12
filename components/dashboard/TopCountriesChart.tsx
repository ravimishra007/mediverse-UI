import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data = [
  { country: 'India', count: 100 },
  { country: 'India', count: 80 },
  { country: 'India', count: 70 },
  { country: 'India', count: 60 },
  { country: 'India', count: 50 },
];

const barColor = "#742193";  // Purple color for the bars

const TopCountriesChart = () => {
  return (
    <div className=" ">
      <h2 className="text-xl font-bold mb-4">Top Countries</h2>

      <ResponsiveContainer width="100%" height={350} className="mt-10 ">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 0}}
          barCategoryGap="30%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="country" />
          <Tooltip />
          <Bar dataKey="count" fill={barColor} radius={[0, 10, 10, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopCountriesChart;
