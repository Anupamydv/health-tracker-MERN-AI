import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RecordsChart = ({ records }) => {
  if (!records?.length) return null;

  const data = [...records]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((r) => ({
      date: new Date(r.date).toLocaleDateString(),
      healthScore: r.healthScore,
      heartRate: r.heartRate,
      sleepHours: r.sleepHours,
    }));

  return (
    <div className="card chart-card">
      <h3>Health Score & Vitals Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="healthScore" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="heartRate" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="sleepHours" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RecordsChart;
