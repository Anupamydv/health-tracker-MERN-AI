import React, { useState } from "react";

const RecordForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({
    bloodPressureSys: "",
    bloodPressureDia: "",
    heartRate: "",
    glucose: "",
    weight: "",
    sleepHours: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="card record-form" onSubmit={handleSubmit}>
      <h3>Add Today's Health Log</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Systolic BP (mmHg)</label>
          <input
            type="number"
            name="bloodPressureSys"
            value={form.bloodPressureSys}
            onChange={handleChange}
            placeholder="e.g. 120"
          />
        </div>
        <div className="form-group">
          <label>Diastolic BP (mmHg)</label>
          <input
            type="number"
            name="bloodPressureDia"
            value={form.bloodPressureDia}
            onChange={handleChange}
            placeholder="e.g. 80"
          />
        </div>
        <div className="form-group">
          <label>Heart Rate (bpm)</label>
          <input
            type="number"
            name="heartRate"
            value={form.heartRate}
            onChange={handleChange}
            placeholder="e.g. 72"
          />
        </div>
        <div className="form-group">
          <label>Glucose (mg/dL)</label>
          <input
            type="number"
            name="glucose"
            value={form.glucose}
            onChange={handleChange}
            placeholder="e.g. 100"
          />
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="e.g. 70"
          />
        </div>
        <div className="form-group">
          <label>Sleep Hours</label>
          <input
            type="number"
            name="sleepHours"
            value={form.sleepHours}
            onChange={handleChange}
            placeholder="e.g. 7"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Notes (optional)</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="How are you feeling today?"
          rows={3}
        />
      </div>
      <button className="btn-primary" type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Log"}
      </button>
    </form>
  );
};

export default RecordForm;
