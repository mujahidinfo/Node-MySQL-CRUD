module.exports = (sequelize, DataTypes) =>{
    const employeeDetails = sequelize.define(
      "employeeDetails",
      {
        salary: {
          type: DataTypes.INTEGER,
        },
        availability: {
          type: DataTypes.BOOLEAN,
        }
      },
      { timestamps: false }
    );

    return employeeDetails
}