
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db'); // Ensure this exists
const departmentRoutes = require('./departments'); // Ensure this exists

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('File Management Portal Backend is running.');
});

// Use department routes
app.use('/api/departments', departmentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
