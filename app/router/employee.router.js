const express = require("express");
const {
  getListEmployee,
  getFormAddEmployee,
  addEmployee,
  getFormUpdateEmployee,
  updateEmployee,
  detailEmployee,
  sortEmployee,
} = require("../controllers/employee.controller");
const employeeRouter = express.Router();
employeeRouter.get("/", getListEmployee);
employeeRouter.get("/create", getFormAddEmployee);
employeeRouter.post("/create", addEmployee);
employeeRouter.get("/update/:id", getFormUpdateEmployee);
employeeRouter.post("/update", updateEmployee);
employeeRouter.get("/detail/:id", detailEmployee);
employeeRouter.get("/sortASC", sortEmployee("ASC"));
employeeRouter.get("/sortDESC", sortEmployee("DESC"));
module.exports = employeeRouter;
