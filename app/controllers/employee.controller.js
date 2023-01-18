const moment = require("moment/moment");
const { Employee, Department } = require("../models");

const getListEmployee = async (req, res) => {
  const listEmployee = await Employee.findAll();
  res.render("./employee/list_employee.ejs", { listEmployee: listEmployee });
};
const getFormAddEmployee = async (req, res) => {
  const listDepart = await Department.findAll();
  res.render("./employee/add_employee.ejs", { listDepart: listDepart });
};
const addEmployee = async (req, res) => {
  const { fullName, address, age, joinDate, departId } = req.body;
  const employee = {
    fullName,
    address,
    age,
    joinDate,
    departId,
  };
  console.log("employee", employee);
  await Employee.create(employee)
    .then(function () {
      req.session.message = {
        type: "success",
        message: "Add Employee successfully",
      };
      res.redirect("/employee");
    })
    .catch(function (error) {
      req.session.message = {
        type: "error",
        name: error.errors[0].path,
        message: error.errors[0].message,
      };
      res.redirect("/employee/create");
    });
};
const getFormUpdateEmployee = async (req, res) => {
  const listDepart = await Department.findAll();
  const { id } = req.params;
  const employee = await Employee.findOne({
    where: {
      id,
    },
  });
  if (employee) {
    let formatDate = moment(employee.joinDate).format("YYYY-MM-DD");
    const employeeFormatDate = {
      id: employee.id,
      fullName: employee.fullName,
      age: employee.age,
      address: employee.address,
      joinDate: formatDate,
    };
    res.render("./employee/update_employee.ejs", {
      employee: employeeFormatDate,
      listDepart: listDepart,
    });
  } else {
    return false;
  }
};
const updateEmployee = async (req, res) => {
  const { id, fullName, age, address, joinDate, departId } = req.body;
  const newEmp = {
    fullName,
    age,
    address,
    joinDate,
    departId,
  };
  await Employee.update(newEmp, {
    where: {
      id,
    },
  })
    .then(function () {
      req.session.message = {
        type: "success",
        message: "Update Employee successfully",
      };
      res.redirect("/employee");
    })
    .catch(function (error) {
      req.session.message = {
        type: "error",
        name: error.errors[0].path,
        message: error.errors[0].message,
      };
      res.redirect(`/employee/update/${id}`);
    });
};
const detailEmployee = async (req, res) => {
  const listDepart = await Department.findAll();
  const { id } = req.params;
  const employee = await Employee.findOne({
    where: {
      id,
    },
  });
  if (employee) {
    let formatDate = moment(employee.joinDate).format("YYYY-MM-DD");
    const employeeFormatDate = {
      id: employee.id,
      fullName: employee.fullName,
      age: employee.age,
      address: employee.address,
      joinDate: formatDate,
    };
    res.render("./employee/detail_employee.ejs", {
      employee: employeeFormatDate,
      listDepart: listDepart,
    });
  } else {
    return false;
  }
};
const sortEmployee = (type) => async (req, res) => {
  const listSort = await Employee.findAll({
    order: [
      // Will escape title and validate DESC against a list of valid direction parameters
      ["age", type],
    ],
  });
  res.render("./employee/list_employee.ejs", { listEmployee: listSort });
};
module.exports = {
  getListEmployee,
  getFormAddEmployee,
  addEmployee,
  getFormUpdateEmployee,
  updateEmployee,
  detailEmployee,
  sortEmployee,
};
