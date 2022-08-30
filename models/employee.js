module.exports = (sequelize, DataTypes) => {
    const employee = sequelize.define(
      "employee",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        designation: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { timestamps: false }
    );

    return employee
}
