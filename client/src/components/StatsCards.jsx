import React from "react";

const StatsCards = ({ stats }) => {
  const { avgHealthScore, totalRecords, lastRecordDate } = stats || {};

  return (
    <div className="stats-grid">
      <div className="card stat-card">
        <p className="stat-label">Avg Health Score</p>
        <h2 className="stat-value">{avgHealthScore ?? "-"}</h2>
        <p className="stat-sub">Based on last records</p>
      </div>
      <div className="card stat-card">
        <p className="stat-label">Total Logs</p>
        <h2 className="stat-value">{totalRecords ?? 0}</h2>
        <p className="stat-sub">Health entries saved</p>
      </div>
      <div className="card stat-card">
        <p className="stat-label">Last Update</p>
        <h2 className="stat-value">
          {lastRecordDate ? new Date(lastRecordDate).toLocaleDateString() : "No data"}
        </h2>
        <p className="stat-sub">Keep tracking daily!</p>
      </div>
    </div>
  );
};

export default StatsCards;
