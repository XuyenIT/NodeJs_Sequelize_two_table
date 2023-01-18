const express = require("express");
const {
  getListDepartment,
  getFormAddDepartment,
  addDepartment,
  getFormUpdateDepartment,
  updateDepartment,
} = require("../controllers/department.controller");
const departmentRouter = express.Router();
departmentRouter.get("/", getListDepartment);
departmentRouter.get("/create", getFormAddDepartment);
departmentRouter.post("/create", addDepartment);
departmentRouter.get("/update/:id", getFormUpdateDepartment);
departmentRouter.post("/update", updateDepartment);

module.exports = departmentRouter;
