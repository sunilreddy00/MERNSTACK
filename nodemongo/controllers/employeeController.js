
const Employee = require("../models/Employee")

const createEmployee = async(req,res) =>{
  try{
    const { name, email, phone, city} = req.body
    if (!name || !email || !phone || !city) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const employee = new Employee({
      name,
      email,
      phone,
      city,
    })
    await employee.save()
    res.status(201).json(employee)
  }catch(error){
    console.log("There is an error:",error)
    res.status(500).json({message:'Server error'})
  }
}

// to get employees
const getEmployees = async(req,res)=>{
  try{
    const employees = await Employee.find()
    res.status(200).json(employees)
  }catch(error){
    console.log("There is an error:",error)
    res.status(500).json({messages:"server error"})
  }
}

// to get single employee
const singleEmployee = async(req,res)=>{
  try{
    const employee = await Employee.findById(req.params.id)
    if(!employee){
      return res.status(404).json
    {message: "Employee not found"}
    }
    res.status(200).json(employee)
  }
  catch(error){
    console.error("There is an error",error)
    res.status(500).json({message:"Server error"})
  }
}

// to put(or)push the employee details
const updateEmployee = async(req,res)=>{
  try{
    const{name,email,phone,city} = req.body
    const myEmployee = await Employee.findByIdAndUpdate(req.params.id,
      {name,email,phone,city})
      if(!myEmployee){
        return res.status(404).json({message:"employee not found"})
      }
    res.status(200).json(myEmployee)
  }
  catch(error){
    console.error('there is an error:',error)
    res.status(500).json({message:"Server error"})
  }
}

// to delete the employee details
const deleteEmployee = async(req,res)=>{
  try{
    const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
  res.status(204).send()
}
catch(error){
  console.error("There is an error",error)
  res.status(500).json({message:"Server error"})
}
}


module.exports = {createEmployee, getEmployees, singleEmployee,updateEmployee, deleteEmployee}