const { DataTypes } = require("sequelize");
const EmployeeModel = (sequelize) => {
  return sequelize.define(
    "Employee",
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      joinDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "employees",
    }
  );
};
module.exports = EmployeeModel;
