const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Enable CORS (good practice, though ingress makes it less critical)
app.use(cors());

// ✅ Health check (VERY IMPORTANT for Kubernetes stability)
app.get('/health', (req, res) => {
  res.send('OK');
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send("✅ Great again, Hello from Kubernetes Microservice!");
});

// ✅ API route (IMPORTANT for Ingress /api)
app.get('/api', (req, res) => {
  res.send("🔥🧪 EV ENVIRONMENT 🚀 🚀");
});

// ✅ Start server
app.listen(3000, () => {
  console.log("✅ Server running on port 3000");
});