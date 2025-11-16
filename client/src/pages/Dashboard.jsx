import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RecordForm from "../components/RecordForm";
import StatsCards from "../components/StatsCards";
import RecordsChart from "../components/RecordsChart";
import RecordsTable from "../components/RecordsTable";
import api from "../api/axios";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [stats, setStats] = useState(null);
  const [loadingRecord, setLoadingRecord] = useState(false);

  const fetchData = async () => {
    try {
      const [recordsRes, statsRes] = await Promise.all([
        api.get("/records"),
        api.get("/records/stats"),
      ]);
      setRecords(recordsRes.data);
      setStats(statsRes.data);
    } catch (err) {
      console.error("Error fetching records:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddRecord = async (formData) => {
  setLoadingRecord(true);
  try {
    await api.post("/records", formData);
    await fetchData();
  } catch (err) {
    console.error("Error creating record:", err);
  } finally {
    setLoadingRecord(false);
  }
};


  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <section className="hero-section">
          <div>
            <h1>Your daily health, visualized.</h1>
            <p>
              Log your vitals, track trends and get smart suggestions powered by simple AI logic.
            </p>
          </div>
          <div className="hero-pill">
            <span className="pill-dot" />
            <span>Consistent tracking = better insights.</span>
          </div>
        </section>
        <StatsCards stats={stats} />
        <div className="grid-2">
          <RecordForm onSubmit={handleAddRecord} loading={loadingRecord} />
          <RecordsChart records={records} />
        </div>
        <RecordsTable records={records} />
      </main>
    </div>
  );
};

export default Dashboard;
