const express = require('express');
const app = express();

const PORT = 3000;

// ✅ Root route (optional test)
app.get('/', (req, res) => {
  res.send("✅ Backend is running!");
});

// ✅ API route (used by frontend)
app.get('/api', (req, res) => {
  res.send(process.env.APP_MESSAGE || "Default Message");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});