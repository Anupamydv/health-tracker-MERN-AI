import React from "react";

const RecordsTable = ({ records }) => {
  if (!records?.length) {
    return (
      <div className="card">
        <p>No records yet. Add your first health log to see history.</p>
      </div>
    );
  }

  return (
    <div className="card table-card">
      <h3>Recent Logs</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>BP</th>
              <th>HR</th>
              <th>Glucose</th>
              <th>Sleep</th>
              <th>Score</th>
              <th>Suggestion</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r._id}>
                <td>{new Date(r.date).toLocaleDateString()}</td>
                <td>
                  {r.bloodPressureSys || "-"} / {r.bloodPressureDia || "-"}
                </td>
                <td>{r.heartRate || "-"}</td>
                <td>{r.glucose || "-"}</td>
                <td>{r.sleepHours || "-"}</td>
                <td>{r.healthScore ?? "-"}</td>
                <td className="suggestion-cell">{r.aiSuggestion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordsTable;
