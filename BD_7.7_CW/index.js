const { initializeDatabase } = require("./db/db.connect.js");
const Post = require("./models/post.models.js");
const User = require("./models/user.models.js");
const Author = require("./models/author.models.js");
const Book = require("./models/book.models.js");
const Employee = require("./models/employee.models.js");
const Department = require("./models/department.models.js");
initializeDatabase();

const userData = {
  name: "John",
  email: "john@gmail.com",
};
const addUser = async () => {
  try {
    const newUser = new User(userData);
    await newUser.save();
  } catch (error) {
    console.error("Error:", error);
  }
};
// addUser();

const postData = {
  title: "Greeting",
  content: "Have a good day!",
  author: "675aaad31d37c30523cd8ddf",
};
const addPost = async () => {
  try {
    const newpost = new Post(postData);
    await newpost.save();
  } catch (error) {
    console.error("Error:", error);
  }
};

// addPost();

const getAllPosts = async () => {
  try {
    const allPosts = await Post.find().populate("author");
    console.log("All Posts:", allPosts);
  } catch (error) {
    console.error("Error:", error);
  }
};
// getAllPosts();

const authorData = {
  name: "William",
  email: "william@gmail.com",
};

const addAuthor = async () => {
  try {
    const newAuthor = new Author(authorData);
    await newAuthor.save();
  } catch (error) {
    console.error("Error:", error);
  }
};
// addAuthor();

const bookData = {
  title: "The Open Boat",
  genre: "Fiction",
  author: "675ab577e45c37f31ba920ae",
};

const addBook = async () => {
  try {
    const newBook = new Book(bookData);
    await newBook.save();
  } catch (error) {
    console.error("Error:", error);
  }
};
// addBook();

const getAllBooks = async () => {
  try {
    const allBooks = await Book.find().populate("author");
    console.log("All Books:", allBooks);
  } catch (error) {
    console.error("Error:", error);
  }
};
// getAllBooks();

let departmentData = {
  name: "HR",
  location: "Bangalore",
};

const addDepartment = async () => {
  try {
    const newDepartment = new Department(departmentData);
    await newDepartment.save();
  } catch (error) {
    console.error("Error:", error);
  }
};
// addDepartment();

let employeeData = {
  name: "Johnny",
  email: "jonny@gmail.com",
  department: "675d44db325452dfefa5cb23",
};

const addEmployee = async () => {
  try {
    const newEmployee = await Employee(employeeData);
    await newEmployee.save();
  } catch (error) {
    console.error("Error:", error);
  }
};
// addEmployee();

const getAllEmployees = async () => {
  try {
    const allEmployees = await Employee.find().populate("department");
    console.log("All Employees:", allEmployees);
  } catch (error) {
    console.error("Error:", error);
  }
};
getAllEmployees();
