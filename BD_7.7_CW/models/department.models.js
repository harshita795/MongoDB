const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: String,
  location: String,
});

const Department = new mongoose.model("Department", departmentSchema);

module.exports = Department;
