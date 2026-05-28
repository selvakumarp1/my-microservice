const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("✅ Backend is running!");
});

app.get('/api', (req, res) => {
  res.send(process.env.APP_MESSAGE || "Default Message");
});

// ✅ CRITICAL FIX HERE
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});