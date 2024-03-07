const mysql2 = require("mysql2/promise");

const mysqlPool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "Ls03@1234",
  database: "employee_db",
});

module.exports = mysqlPool;

// DATABASE CONNECTIVITY
