
const express = require("express")
const router = express.Router()
const employeeController = require("../controllers/employeeController")
const Employee = require("../models/Employee")


//get,post,put/patch,delete

router.post('/add-employee', employeeController.createEmployee);
//to get the all employee details
router.get('/allemployees', employeeController.getEmployees)
// to get the single employee details by ID
router.get('/employee/:id',employeeController.singleEmployee)
// to put(or)update the employee details
router.put('/update/:id',employeeController.updateEmployee)
// to delete the employee details
router.delete('/delete/:id',employeeController.deleteEmployee)

module.exports = router 