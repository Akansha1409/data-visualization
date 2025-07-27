📊 Data Visualization Dashboard

An interactive and responsive analytics dashboard built using MERN Stack + Tailwind CSS, powered by real-world data in MongoDB. Built for the Blackcoffer test assignment.


🚀 Features

📁 Uses JSON data uploaded to MongoDB

📊 Visualizes key variables: intensity, likelihood, relevance, topics, region, country, etc.

🌗 Dark/Light mode toggle

🧭 Sidebar navigation (Overview, Charts, Filters)

📱 Fully responsive design

⚡ Animated transitions & smooth scroll

🎯 Interactive filters (End year, Topics, Sector, Region, PESTLE, Country, City, etc.)

📈 Dynamic charts using Chart.js

⚙️ Built with React, Tailwind CSS, Node.js, Express.js, MongoDB

🗃 Technologies Used
Frontend
Backend
Database
Visuals
React (Vite)
Node.js
MongoDB
Chart.js
Tailwind CSS
Express.js
Lucide Icons

🧑‍💻 Local Setup Instructions

1. 🧬 Clone the repo
bash
Copy
Edit
git clone https://github.com/yourusername/data-visualization-dashboard.git
cd data-visualization-dashboard

3. 📦 Setup Backend
bash
Copy
Edit
cd backend
npm install

🔌 Connect to MongoDB
Install MongoDB locally OR use MongoDB Atlas

Import the provided jsondata.json using Compass:

Open MongoDB Compass

Connect to: mongodb://127.0.0.1:27017

Create DB: visualization_db

Create Collection: data

Click Import → select jsondata.json → Format: JSON Array

Start server:

bash
Copy
Edit
node server.js
Server runs on http://localhost:5000

3. 🎨 Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
Frontend runs on http://localhost:5173

🙌 Acknowledgements
Chart.js

Tailwind CSS

MongoDB Compass

Blackcoffer

