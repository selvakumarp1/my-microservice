const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

//  root route
app.get('/', (req, res) => {
  res.send(" Hello from Kubernetes Microservice!");
});

//  API route (THIS FIXES YOUR ISSUE)
app.get('/api', (req, res) => {
  res.send(" Hello from Kubernetes Microservice!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});