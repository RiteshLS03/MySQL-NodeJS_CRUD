const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const db = require("./db");
require("express-async-errors");
const employeeRoutes = require("./controllers/employee.controller");

//middleware
app.use(bodyParser.json());
app.use("/api/employees", employeeRoutes);
app.use((err, req, res, next) => {
  res.status(err.status || 500).send("Something went wrong");
});
//First make sure db connection successful
//Then start the express server

db.query("SELECT 1")
  .then(() => {
    console.log("Database connection Succeeded");
    app.listen(3000, () => {
      console.log("server is started on http://localhost:3000");
    });
  })
  .catch((err) => console.log(err, "Database connection failed"));

// DATABASE CONNECTION VERIFICATION
