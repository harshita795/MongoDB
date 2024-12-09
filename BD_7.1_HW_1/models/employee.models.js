const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  profilePic: String,
  employeeName: String,
  employeePosition: String,
  employeeId: String,
  DateOfBirth: Date,
  email: String,
  telephoneNumber: Number,
  address: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
