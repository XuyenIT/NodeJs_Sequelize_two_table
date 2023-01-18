const { Sequelize, DataTypes } = require("sequelize");
const {
  DB,
  USER,
  PASSWORD,
  HOST,
  dialect,
  PORT,
} = require("../configs/db.config");
const DepartmentModel = require("./department.model");
const EmployeeModel = require("./employee.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  port: PORT,
});
const Employee = EmployeeModel(sequelize);
const Department = DepartmentModel(sequelize);

Department.hasMany(Employee, {
  foreignKey: "departId",
});
Employee.belongsTo(Department, {
  foreignKey: "departId",
});

module.exports = {
  sequelize,
  Department,
  Employee,
};
