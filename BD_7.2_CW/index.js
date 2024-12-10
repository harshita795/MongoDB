const { initializeDatabase } = require("./db/db.connect.js");
// const fs = require("fs");
const Movie = require("./models/movie.models.js");
initializeDatabase();

// const jsonData = fs.readFileSync("movies.json", "utf-8");
// const moviesData = JSON.parse(jsonData);

// function seedData() {
//   try {
//     for (const movieData of moviesData) {
//       const newMovie = new Movie({
//         title: movieData.title,
//         releaseYear: movieData.releaseYear,
//         genre: movieData.genre,
//         director: movieData.director,
//         actors: movieData.actors,
//         language: movieData.language,
//         country: movieData.country,
//         rating: movieData.rating,
//         plot: movieData.plot,
//         awards: movieData.awards,
//         posterUrl: movieData.posterUrl,
//         trailerUrl: movieData.trailerUrl,
//       });
//       newMovie.save();
//     }
//   } catch (error) {
//     console.log("Error seeding the data", error);
//   }
// }
// seedData();

const newMovie = {
  title: "New Movie",
  releaseYear: 1990,
  genre: ["Drama"],
  director: "Aditya Chopra",
  actors: ["Shah Rukh Khan", "Kajol"],
  language: "Hindi",
  country: "India",
  rating: 9.5,
  plot: "A young man and woman fall in love on a Europe trip.",
  awards: "Multiple Filmfare Awards",
  posterUrl: "https://example.com/poster.jpg",
  trailerUrl: "https://example.com/trailer.mp4",
};

// for storing sigle object data in mongodb

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const savedMovie = await movie.save();
    console.log(savedMovie);
  } catch (error) {
    throw error;
  }
}
createMovie(newMovie);
