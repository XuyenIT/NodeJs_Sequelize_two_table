const express = require("express");
const departmentRouter = require("./department.router");
const employeeRouter = require("./employee.router");
const rootRouter = express.Router();
rootRouter.use("/employee", employeeRouter);
rootRouter.use("/department", departmentRouter);
module.exports = rootRouter;
