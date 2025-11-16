const Record = require("../models/Record");
const Groq = require("groq-sdk");

// Initialize Groq client (FREE AI)
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// -------------------------------------------------------
//  HEALTH SCORE CALCULATION
// -------------------------------------------------------
function calculateHealthScore(record) {
  let score = 100;

  if (record.bloodPressureSys && (record.bloodPressureSys < 90 || record.bloodPressureSys > 140))
    score -= 15;

  if (record.heartRate && (record.heartRate < 50 || record.heartRate > 100))
    score -= 10;

  if (record.glucose && (record.glucose < 70 || record.glucose > 140))
    score -= 15;

  if (record.sleepHours && (record.sleepHours < 6 || record.sleepHours > 9))
    score -= 10;

  if (record.weight && record.weight > 100)
    score -= 10;

  if (score < 0) score = 0;
  return score;
}

// -------------------------------------------------------
//  AI SUGGESTION USING FREE GROQ LLAMA 3 MODEL
// -------------------------------------------------------
async function generateAISuggestion(record) {
  const prompt = `
You are a friendly wellness assistant. 
Do NOT give medical diagnoses. Give short, safe, helpful guidance.

Vitals:
- Systolic BP: ${record.bloodPressureSys}
- Diastolic BP: ${record.bloodPressureDia}
- Heart Rate: ${record.heartRate}
- Glucose: ${record.glucose}
- Weight: ${record.weight}
- Sleep Hours: ${record.sleepHours}
- Notes: ${record.notes || "None"}

Format your answer:
1. Summary
2. Key Insights
3. Recommendations (diet, sleep, hydration, activity)

Keep your reply under 120 words.
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}


// -------------------------------------------------------
//  CREATE RECORD
// -------------------------------------------------------
exports.createRecord = async (req, res, next) => {
  try {
    const data = req.body;

    const recordData = {
      ...data,
      user: req.user._id,
    };

    // 1. Calculate health score
    const healthScore = calculateHealthScore(recordData);
    recordData.healthScore = healthScore;

    // 2. Try generating AI suggestion (with fallback)
    let aiSuggestion = "AI could not generate a suggestion at this moment.";

    try {
      aiSuggestion = await generateAISuggestion(recordData);
    } catch (err) {
      console.error("AI Error:", err.message);
    }

    recordData.aiSuggestion = aiSuggestion;

    // 3. Save record
    const record = await Record.create(recordData);

    res.status(201).json(record);
  } catch (err) {
    next(err);
  }
};

// -------------------------------------------------------
//  GET RECORDS
// -------------------------------------------------------
exports.getRecords = async (req, res, next) => {
  try {
    const records = await Record.find({ user: req.user._id })
      .sort({ date: -1 })
      .limit(60);

    res.json(records);
  } catch (err) {
    next(err);
  }
};

// -------------------------------------------------------
//  GET STATISTICS
// -------------------------------------------------------
exports.getStats = async (req, res, next) => {
  try {
    const records = await Record.find({ user: req.user._id }).sort({ date: 1 });

    if (!records.length) {
      return res.json({
        avgHealthScore: 0,
        totalRecords: 0,
        lastRecordDate: null,
      });
    }

    const avgHealthScore =
      records.reduce((sum, r) => sum + (r.healthScore || 0), 0) /
      records.length;

    res.json({
      avgHealthScore: Math.round(avgHealthScore),
      totalRecords: records.length,
      lastRecordDate: records[records.length - 1].date,
    });
  } catch (err) {
    next(err);
  }
};
