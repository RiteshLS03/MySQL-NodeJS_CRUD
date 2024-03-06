const db = require("../db");

module.exports.getAllEmployees = async () => {
  const [records] = await db.query("SELECT * FROM employees");
  return records;
};
module.exports.getEmployeeByID = async (id) => {
  // pre-prepared statements
  const [record] = await db.query("SELECT * FROM employees WHERE id = ?", [id]);
  return record;
};
