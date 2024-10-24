const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies

// Simple in-memory storage for IPs (replace with a real database for production)
let storedIPs = [];

// Endpoint to store the IP address
app.post('/store-ip', (req, res) => {
    const ip = req.body.ip;
    if (ip && !storedIPs.includes(ip)) {
        storedIPs.push(ip);
        console.log(`Stored IP: ${ip}`);
    }
    res.status(200).send({ message: 'IP stored successfully' });
});

// Endpoint to retrieve stored IPs
app.get('/get-ips', (req, res) => {
    res.status(200).send({ ips: storedIPs });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
