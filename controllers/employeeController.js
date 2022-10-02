const db = require("../models");

// creating our main model
const Employee = db.employee;
const EmployeeDetails = db.employeeDetails;

// main work
// create employee

const addEmployee = async (req, res) => {
  let info = {
    name: req.body.name,
    designation: req.body.designation,
  };

  const employee = await Employee.create(info);
  res.status(200).send(employee);
  console.log(employee);
};

// get all employees

const getAllEmployees = async (req, res) => {
  let employees = await Employee.findAll({});
  res.status(200).send(employees);
};

// get single employee

const getSingleEmployee = async (req, res) => {
  let id = req.params.id;
  let employee = await Employee.findOne({ where: { id: id } });
  res.status(200).send(employee);
};

// Update employee

const updateEmployee = async (req, res) => {
  let id = req.params.id;
  const employee = await Employee.update(req.body, { where: { id: id } });
  res.status(200).send(employee);
};

// delete single employee

const deleteEmployee = async (req, res) => {
  let id = req.params.id;
  await Employee.destroy({ where: { id: id } });
  res.status(200).send("Employee is deleted!");
};

const getEmployeesDetails = async (req, res) => {
  const data = await EmployeeDetails.findAll({
    include: [
      {
        model: Employee,
        as: "employee",
        required: false,
      },
    ],
  });
  res.status(200).send(data);
};

const deleteEmployeeDetails = async (req, res) => {
  let id = req.params.id;
  await EmployeeDetails.destroy(
    { where: { id: id } }
  );
  res.status(200).send("Employee details is deleted!");
};

module.exports = {
  addEmployee,
  getAllEmployees,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeesDetails,
  deleteEmployeeDetails,
};
