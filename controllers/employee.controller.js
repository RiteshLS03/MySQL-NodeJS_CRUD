const express = require("express");
const router = express.Router();

const service = require("../services/employee.service");
//http://localhost:3000/api/employees/
router.get("/", async (req, res) => {
  const employees = await service.getAllEmployees();
  res.send(employees);
});
//GET EMPLOYEE BY ID
router.get("/:id", async (req, res) => {
  const employees = await service.getEmployeeByID(req.params.id);
  if (employees == undefined)
    res.status(404).json(`No record with given id: ${req.params.id}`);
  else res.send(employees);
});
// DELETE EMPLOYEE
router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteEmployee(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("no record with given id:" + req.params.id);
  else res.send("Deleted Successfully");
});
//ADD
router.post("/", async (req, res) => {
  await service.addOrEditEmployee(req.body);
  res.status(201).send("Created Successfully");
});
//UPDATE
router.put("/:id", async (req, res) => {
  const affectedRows = await service.addOrEditEmployee(req.body, req.params.id);
  if (affectedRows == 0)
    res.status(404).json("no record with given id:" + req.params.id);
  else res.send("Updated Successfully");
});

module.exports = router;
