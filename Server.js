const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;  // Set default to 5000 if .env file is missing

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example API routes
app.get('/api/weather', (req, res) => {
    res.json({ location: "Your City", temperature: 28, rainfall: 120 });
});

app.get('/api/crops', (req, res) => {
    res.json([
        { id: 1, name: "Wheat", soil: "Clay", tempRange: "10-25", rainfallRange: "50-100" },
        { id: 2, name: "Rice", soil: "Loamy", tempRange: "20-35", rainfallRange: "150-250" },
    ]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

