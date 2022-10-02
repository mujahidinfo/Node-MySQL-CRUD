// import controllers
const { addEmployee, getAllEmployees, getSingleEmployee, updateEmployee, deleteEmployee, getEmployeesDetails, deleteEmployeeDetails } = require('../controllers/employeeController')
const { addEmployeeDetails, getAllEmployeesDetails} = require('../controllers/employeeDetailsController')

// Router
const router = require("express").Router()

// use Router
router.post('/addEmployee', addEmployee)

router.get('/allEmployees', getAllEmployees)

router.post('/addEmployeeDetails', addEmployeeDetails)

router.get('/allEmployeesDetails', getAllEmployeesDetails)

// get employee details
router.get("/getEmployeesDetails", getEmployeesDetails)
// delete employee details
router.delete("/getEmployeesDetails/:id", deleteEmployeeDetails);

// router.get('/:id', getSingleEmployee)

// router.put('/:id', updateEmployee)

// router.delete('/:id', deleteEmployee)


module.exports = router;