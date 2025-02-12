
"use client";

import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data = [
  { name: "Active Users", value: 70, color: "#742193" }, // Purple
  { name: "Non Active", value: 30, color: "#F4B400" }, // Yellow
];



const UserPieChart = () => {
  return (
      <div className=" flex  p-2 ">
      <PieChart width={400} height={280}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        
        <Legend />
        
      </PieChart>
      
      </div>
  );
};

export default UserPieChart;
