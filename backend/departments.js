
const express = require('express');
const db = require('./db'); // Ensure this file exists and is correctly configured
const router = express.Router();

const departments = ['claims', 'underwriting', 'ict', 'management', 'finance'];

// Route to fetch files for each department
departments.forEach(dept => {
    router.get(`/files/${dept}`, (req, res) => {
        db.query('SELECT * FROM files WHERE department = ?', [dept], (err, results) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: "Database query failed" });
            }
            res.json(results);
        });
    });
});

module.exports = router;
