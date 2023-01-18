const { DataTypes } = require("sequelize");
const DepartmentModel = (sequelize) => {
  return sequelize.define(
    "Department",
    {
      departName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notContains: "bar",
        },
      },
    },
    {
      timestamps: true,
      tableName: "departments",
    }
  );
};
module.exports = DepartmentModel;
