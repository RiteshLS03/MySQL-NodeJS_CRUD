const express = require("express");
const router = express.Router();

const service = require("../services/employee.service");
//http://localhost:3000/api/employees/
router.get("/", async (req, res) => {
  const employees = await service.getAllEmployees();
  res.send(employees);
});

router.get("/:id", async (req, res) => {
  const employees = await service.getEmployeeByID(req.params.id);
  if (employees.length == 0)
    res.status(404).json(`No record with given id: ${req.params.id}`);
  else res.send(employees);
});

module.exports = router;
