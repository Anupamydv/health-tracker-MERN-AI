const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, default: Date.now },
    bloodPressureSys: Number,
    bloodPressureDia: Number,
    heartRate: Number,
    glucose: Number,
    weight: Number,
    sleepHours: Number,
    notes: String,
    healthScore: Number,
    aiSuggestion: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Record", recordSchema);
