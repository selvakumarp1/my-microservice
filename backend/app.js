const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("🔥 WOW...   Zero downtime test v13!!");
});

app.get('/health', (req, res) => {
    res.send("OK");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});