const express = require('express');
const db = require('./db'); // Import MySQL connection

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Route to Fetch All Users
app.get('/', (req, res) => {
    res.send("app is working");
    // db.query('SELECT * FROM users', (err, results) => {
    //     if (err) {
    //         console.error(err);
    //         return res.status(500).json({ error: 'Database query failed' });
    //     }
    //     res.json(results);
    // });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

