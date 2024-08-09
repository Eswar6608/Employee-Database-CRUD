const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");

// Create a new employee
router.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single employee by ID
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).send("Employee not found");
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an employee by ID
router.put("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) return res.status(404).send("Employee not found");
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete an employee by ID
router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).send("Employee not found");
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
