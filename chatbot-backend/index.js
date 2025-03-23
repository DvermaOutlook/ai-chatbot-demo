const express = require('express');
const { sql, connectDB } = require('./db/db'); // Import MySQL connection

const app = express();
app.use(express.json()); // Middleware to parse JSON
const PORT = process.env.PORT || 5000;

// Route to Get All Users from SQL Server
app.get('/', async (req, res) => {
    //res.send("app is workingggg");
    try {
        const result = await sql.query('SELECT * FROM Users');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// // Route to Fetch All Users
// app.get('/', (req, res) => {
//     res.send("app is working");
//     // db.query('SELECT * FROM users', (err, results) => {
//     //     if (err) {
//     //         console.error(err);
//     //         return res.status(500).json({ error: 'Database query failed' });
//     //     }
//     //     res.json(results);
//     // });
// });


// Start Server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
});

// // Start Server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

