# health-tracker-MERN-AI

# 🧠 AI-Enabled Health Tracker (MERN + Llama 3.3)

A production-ready **AI-powered Health Tracking System** built using the **MERN stack** (MongoDB, Express, React, Node.js) integrated with **Groq Llama 3.3 (70B)** to generate personalized, safe, wellness-focused suggestions based on user vitals.

This project allows users to log their daily vitals, analyze trends, and receive instant AI wellness insights.  
Perfect for real-world use, final-year projects, hackathons, and portfolios.

---

## 🚀 Features

### ⭐ User Features
- Secure authentication (register/login)
- Add daily health vitals:
  - Blood Pressure (Sys & Dia)
  - Heart Rate
  - Glucose Level
  - Weight
  - Sleep Hours
  - Notes
- AI-generated health suggestions (Llama 3.3 70B)
- Dynamic dashboard with:
  - Average health score
  - Records count
  - Last update date
- Health score calculation logic
- Interactive charts (Recharts)
- Fully responsive UI

---

## 🤖 AI Features (Groq Llama 3.3)

- Uses **Llama 3.3 70B Versatile** model
- Generates:
  - Summary of today's health
  - Key insights
  - Lifestyle recommendations (diet, sleep, hydration, activity)
- Avoids medical diagnosis
- Fast & free using Groq API
- If AI fails → **safe fallback message** ensures logs still save

---

## 🏗️ Tech Stack

### **Frontend**
- React.js  
- Axios  
- Recharts  
- Context API  
- Modern CSS  

### **Backend**
- Node.js  
- Express.js  
- JWT Authentication  
- Groq AI (Llama 3.3)  
- Mongoose ORM  

### **Database**
- MongoDB Atlas

---

## 📸 Screenshots (Add yours here)

### Dashboard  
![Dashboard Screenshot](your-image-url)

### Add Health Log  
![Form Screenshot](your-image-url)

### AI Suggestions  
![AI Screenshot](your-image-url)

*(Upload images to GitHub Issues → copy URLs here)*

---

## ⚙️ Installation & Setup

### 🔌 Step 1 — Clone Repo
```bash
git clone https://github.com/Anupamydv/health-tracker-MERN-AI.git
cd health-tracker-MERN-AI
# 🧠 AI-Enabled Health Tracker (MERN + Llama 3.3)

A production-ready **AI-powered Health Tracking System** built using the **MERN stack** (MongoDB, Express, React, Node.js) integrated with **Groq Llama 3.3 (70B)** to generate personalized, safe, wellness-focused suggestions based on user vitals.

This project allows users to log their daily vitals, analyze trends, and receive instant AI wellness insights.  
Perfect for real-world use, final-year projects, hackathons, and portfolios.

---

## 🚀 Features

### ⭐ User Features
- Secure authentication (register/login)
- Add daily health vitals:
  - Blood Pressure (Sys & Dia)
  - Heart Rate
  - Glucose Level
  - Weight
  - Sleep Hours
  - Notes
- AI-generated health suggestions (Llama 3.3 70B)
- Dynamic dashboard with:
  - Average health score
  - Records count
  - Last update date
- Health score calculation logic
- Interactive charts (Recharts)
- Fully responsive UI

---

## 🤖 AI Features (Groq Llama 3.3)

- Uses **Llama 3.3 70B Versatile** model
- Generates:
  - Summary of today's health
  - Key insights
  - Lifestyle recommendations (diet, sleep, hydration, activity)
- Avoids medical diagnosis
- Fast & free using Groq API
- If AI fails → **safe fallback message** ensures logs still save

---

## 🏗️ Tech Stack

### **Frontend**
- React.js  
- Axios  
- Recharts  
- Context API  
- Modern CSS  

### **Backend**
- Node.js  
- Express.js  
- JWT Authentication  
- Groq AI (Llama 3.3)  
- Mongoose ORM  

### **Database**
- MongoDB Atlas

---

## 📸 Screenshots (Add yours here)

### Dashboard  
![Dashboard Screenshot](your-image-url)

### Add Health Log  
![Form Screenshot](your-image-url)

### AI Suggestions  
![AI Screenshot](your-image-url)

*(Upload images to GitHub Issues → copy URLs here)
---

## ⚙️ Installation & Setup

### 🔌 Step 1 — Clone Repo
```bash
git clone https://github.com/Anupamydv/health-tracker-MERN-AI.git
cd health-tracker-MERN-AI

🖥️ Backend Setup (server)
Step 2 — Install dependencies
cd server
npm install

Step 3 — Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
DB_NAME=health_tracker
GROQ_API_KEY=your_groq_api_key

Step 4 — Start server
npm run dev

💻 Frontend Setup (client)
Step 1 — Install dependencies
cd client
npm install

Step 2 — (Optional) Create .env
REACT_APP_API_URL=http://localhost:5000

Step 3 — Start frontend
npm start


Your app will be available at:
👉 http://localhost:3000

🔥 API Endpoints (Backend)
Auth Routes

| Method | Route                | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login`    | Login         |
| GET    | `/api/auth/me`       | Get profile   |


Health Logs
| Method | Route                | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/records`       | Add new health log  |
| GET    | `/api/records`       | Get user logs       |
| GET    | `/api/records/stats` | Stats for dashboard |

🤖 How AI Works

User submits vitals

Backend calculates a health score (0–100)

Backend sends vitals to Llama 3.3 (70B) model

AI returns:

Summary

Insights

Recommendations

Saves in MongoDB

Displayed in dashboard

If AI key is missing or model fails → fallback text:
"AI could not generate a suggestion at this moment."

📈 Health Score Logic

BP abnormal → -15

Heart rate abnormal → -10

Glucose abnormal → -15

Sleep < 6 or > 9 → -10

Weight > 100kg → -10

Minimum = 0
Maximum = 100

Displayed on dashboard.

📦 Project Structure

health-tracker-MERN-AI/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── client/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── api/
    │   ├── context/
    │   └── App.js


