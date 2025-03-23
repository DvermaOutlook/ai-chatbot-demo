require('dotenv').config(); // Load environment variables
const sql = require('mssql');

// MySQL Database Configuration
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER,  
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 1433,  // Ensure port is a number
    options: {
        encrypt: false, // 🔹 Disable encryption to fix SSL error
        trustServerCertificate: true, // 🔹 Bypass certificate validation
        enableArithAbort: true
    }
};

// Function to Connect to SQL Server
async function connectDB() {
    try {
        await sql.connect(config);
        console.log('✅ Connected to SQL Server');
    } catch (err) {
        console.error('❌ Database Connection Failed:', err.message);
        process.exit(1); // Exit if connection fails
    }
}

// Export connection
module.exports = { sql, connectDB };
