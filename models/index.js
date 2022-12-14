const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
});

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   port: dbConfig.PORT,
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.max,
//     aquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error " + err);
  });

const db = {};

db.Sequilize = Sequelize;
db.sequelize = sequelize;

db.employee = require("./employee.js")(sequelize, DataTypes);
db.employeeDetails = require("./employeeDetails.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes! I'm Re-sync...");
});

// one to one connection
db.employee.hasOne(db.employeeDetails, {
  foreignKey: {
    name: "id",
  },
  constraints: false,
});

db.employeeDetails.belongsTo(db.employee, {
  foreignKey: {
    name: "id",
  },
  constraints: false,
});

module.exports = db;
