const { Department } = require("../models");

const getListDepartment = async (req, res) => {
  const listDepart = await Department.findAll();
  res.render("./department/list_depart.ejs", { listDepart: listDepart });
};
const getFormAddDepartment = (req, res) => {
  res.render("./department/add_depart.ejs");
};
const addDepartment = async (req, res) => {
  const { departName } = req.body;
  const depart = {
    departName: departName,
  };
  await Department.create(depart)
    .then(function () {
      req.session.message = {
        type: "success",
        message: "Add department successfully",
      };
      res.redirect("/department");
    })
    .catch(function (error) {
      req.session.message = {
        type: "error",
        name: error.errors[0].path,
        message: error.errors[0].message,
      };
      res.redirect("/department/create");
    });
};
const getFormUpdateDepartment = async (req, res) => {
  const { id } = req.params;
  const depart = await Department.findOne({
    where: {
      id,
    },
  });
  if (depart) {
    res.render("./department/update_depart.ejs", { depart: depart });
  } else {
    return false;
  }
};
const updateDepartment = async (req, res) => {
  const { id, departName } = req.body;
  const depart = {
    departName: departName,
  };
  await Department.update(depart, {
    where: {
      id,
    },
  })
    .then(function () {
      req.session.message = {
        type: "success",
        message: "Update department successfully",
      };
      res.redirect("/department");
    })
    .catch(function (error) {
      req.session.message = {
        type: "error",
        name: error.errors[0].path,
        message: error.errors[0].message,
      };
      res.redirect(`/department/update/${id}`);
    });
};

module.exports = {
  getListDepartment,
  getFormAddDepartment,
  addDepartment,
  getFormUpdateDepartment,
  updateDepartment,
};
