const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("🔥 WOW...   Version V5.0 deployed, with CI-CD auto deployment!");
});

app.get('/health', (req, res) => {
    res.send("OK");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});