
"use client";

import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data = [
  { name: "Pre Added", value: 60, color: "#742193" }, // Purple
  { name: "AI Generated", value: 40, color: "#F4B400" }, // Yellow
];



const AdminPieChart = () => {
  return (
      <div className="  pt-7">
      <PieChart width={450} height={330}>
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

export default AdminPieChart;
