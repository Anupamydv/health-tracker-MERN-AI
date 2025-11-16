SMART HEALTH TRACKER (MERN)

Project structure:
- server/  -> Node.js + Express + MongoDB backend
- client/  -> React frontend with beautiful dashboard UI

========================================
1. PREREQUISITES
========================================
- Node.js installed (v16+ recommended)
- MongoDB running locally
  OR a MongoDB Atlas URI

========================================
2. BACKEND SETUP (server)
========================================
1) Open VS Code
2) Go to: File -> Open Folder -> select 'health-tracker-mern'
3) Open a terminal in VS Code.

In terminal:

cd server
npm install

4) Create a file named '.env' inside the 'server' folder.

Copy this content (edit values if needed):

MONGO_URI=mongodb://localhost:27017
DB_NAME=health_tracker
JWT_SECRET=your_jwt_secret_here
PORT=5000

5) Start MongoDB (if local), then run backend:

npm run dev

Server should print: "Server running on port 5000" and "MongoDB Connected".

========================================
3. FRONTEND SETUP (client)
========================================
Open a second terminal in VS Code.

From project root:

cd client
npm install

Optionally create a .env file in client/ if your backend URL is different:

REACT_APP_API_URL=http://localhost:5000

Then start React dev server:

npm start

This opens http://localhost:3000 in your browser.

========================================
4. HOW TO USE
========================================
1) Open browser at http://localhost:3000
2) Click "Create Account" and register a new user.
3) After login, you will see:
   - Nice dashboard
   - Health stats cards
   - Form to log daily vitals
   - Chart showing health score trends
   - Table with AI-style suggestions

4) Add health records daily to show more chart points.
5) You can show this in interviews as:
   - Complete MERN project
   - Auth + protected routes
   - Clean UI
   - Basic AI logic for health scoring.

========================================
5. SCRIPTS QUICK REFERENCE
========================================
Backend (server folder):
- npm run dev     -> run backend with nodemon
- npm start       -> run backend with node

Frontend (client folder):
- npm start       -> run React app
- npm run build   -> production build

========================================
6. DEPLOYMENT (SHORT HINT)
========================================
Backend:
- Deploy server to Render/Railway
- Set environment variables (MONGO_URI, DB_NAME, JWT_SECRET, PORT)

Frontend:
- In client/, run: npm run build
- Deploy 'client/build' folder to Netlify or Vercel
- Set REACT_APP_API_URL to your backend URL, rebuild and deploy.

========================================
Enjoy building & customizing this project!
