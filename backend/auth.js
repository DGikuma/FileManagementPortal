
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('./db'); // Assuming a separate db connection file

const router = express.Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ success: false, message: 'Invalid credentials' });
        
        const user = results[0];
        bcrypt.compare(password, user.password, (err, match) => {
            if (match) {
                res.json({ success: true, user });
            } else {
                res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
        });
    });
});

router.get('/files', (req, res) => {
    db.query('SELECT * FROM files', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
