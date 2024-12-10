const { initializeDatabase } = require("./db/db.connect.js");
const fs = require("fs");
const Book = require("./models/book.models.js");
initializeDatabase();

const jsonData = fs.readFileSync("book.json", "utf-8");
const booksData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const bookData of booksData) {
      const newBook = new Book({
        title: bookData.title,
        author: bookData.author,
        publishedYear: bookData.publishedYear,
        genre: bookData.genre,
        language: bookData.language,
        country: bookData.country,
        rating: bookData.rating,
        summary: bookData.summary,
        coverImageUrl: bookData.coverImageUrl,
      });

      newBook.save();
    }
  } catch (error) {
    console.log("Error in seeding the data", error);
  }
}
seedData();
