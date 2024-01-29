const { createPool } = require("mysql");

const pool = createPool({
  user: "admin",
  host: "lims-db.cpscuwgkqwm8.ap-south-1.rds.amazonaws.com",
  password: "rgukt123",
  connectionLimit: 500,
  database: "lims",
  // connectTimeout: 20000, // Adjust this value as needed
});

module.exports = pool;
