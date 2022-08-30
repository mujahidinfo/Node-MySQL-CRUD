const db = require("../models")

// Model
const EmployeeDetails = db.employeeDetails

// Functions

// 1. Add Employee Details
const addEmployeeDetails = async (req,res) => {
    let detailsData = {
      salary: req.body.salary,
      availability: req.body.availability ? req.body.availability : false
    };

    const employeeDetails = await EmployeeDetails.create(detailsData)
    res.status(200).send(employeeDetails)
}

// 2. Get all the employee details
const getAllEmployeesDetails = async (req, res)=>{
    const employeesDetails = await EmployeeDetails.findAll({});
    res.status(200).send(employeesDetails);
}

// exporting controllers
module.exports = {
    addEmployeeDetails,
    getAllEmployeesDetails
}