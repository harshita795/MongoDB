const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect.js");
// const fs = require("fs");
const Movie = require("./models/movie.models.js");
initializeDatabase();

app.use(express.json());

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

// const newMovie = {
//   title: "New Movie",
//   releaseYear: 1990,
//   genre: ["Drama"],
//   director: "Aditya Chopra",
//   actors: ["Shah Rukh Khan", "Kajol"],
//   language: "Hindi",
//   country: "India",
//   rating: 9.5,
//   plot: "A young man and woman fall in love on a Europe trip.",
//   awards: "Multiple Filmfare Awards",
//   posterUrl: "https://example.com/poster.jpg",
//   trailerUrl: "https://example.com/trailer.mp4",
// };

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

app.post("/movies", async (req, res) => {
  try {
    const savedMovie = await createMovie(req.body);
    res
      .status(201)
      .json({ message: "Movie created successfully.", savedMovie });
  } catch (error) {
    return res.status(500).json({ error: "Failed to add movie", error });
  }
});

// to get all movies from the database
async function readAllMovies() {
  try {
    const allMovies = await Movie.find();
    return allMovies;
  } catch (error) {
    console.error(error);
  }
}

app.get("/movies", async (req, res) => {
  try {
    const allMovies = await readAllMovies();
    return res.status(200).json({
      message: "All movies fetched successfully.",
      allMovies: allMovies,
    });
  } catch (error) {
    return res.status(500).json({ error: "failed to get all movies", error });
  }
});

// to get a movie by director name
async function getMovieByDirector(directorName) {
  try {
    const movieByDirector = await Movie.find({ director: directorName });
    return movieByDirector;
  } catch (error) {
    console.error(error);
  }
}

app.get("/movies/:director", async (req, res) => {
  try {
    const director = req.params.director;
    const response = await getMovieByDirector(director);
    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to get movie by this director", error });
  }
});

// find the movie by its id and update the movie

async function updateMovie(movieId, dataToUpdate) {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {
      new: true,
    });
    return updatedMovie;
  } catch (error) {
    console.error("Error in updating the movie data", error);
  }
}

app.post("/movies/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const updatedData = req.body;
    const response = await updateMovie(movieId, updatedData);
    return res
      .status(200)
      .json({ message: "Movie updated successfully.", updatedMovie: response });
  } catch (error) {
    return res.status(500).json({ error: "Fialed to update the movie", error });
  }
});

// find one data and update its value

async function updateMovieDetails(movieTitle, dataToUpdate) {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { title: movieTitle },
      dataToUpdate,
      { new: true }
    );
    return updatedMovie;
  } catch (error) {
    console.error("Error in updating the movie data", error);
  }
}

app.put("/movies/:title", async (req, res) => {
  try {
    const movieTitle = req.params.title.trim();
    const updatedData = req.body;

    const response = await updateMovieDetails(movieTitle, updatedData);
    return res
      .status(200)
      .json({ message: "Movie updated successfully.", updatedMovie: response });
  } catch (error) {
    return res.status(500).json({ error: "Failed to update movie", error });
  }
});

//  delete a movie by id
async function deleteMovieById(movieId) {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    return deletedMovie;
  } catch (error) {
    console.error("Error in deleting the movie", error);
  }
}

app.post("/movies/delete/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const response = await deleteMovieById(movieId);
    return res
      .status(200)
      .json({ message: "Movie deleted successfully", deletedMovie: response });
  } catch (error) {
    return res.status(500).json({ error: "Error in deleting movie", error });
  }
});

// delete a movie by title

async function deleteMovieByTitle(movieTitle) {
  try {
    const deletedMovie = await Movie.findOneAndDelete({ title: movieTitle });
    return deletedMovie;
  } catch (error) {
    console.error("Error in deleting the movie", error);
  }
}

app.post("/movies/delete/:title", async (req, res) => {
  try {
    const movieTitle = req.params.title;
    const response = await deleteMovieByTitle(movieTitle);
    return res
      .status(200)
      .json({ message: "Movie deleted successfully", deletedMovie: response });
  } catch (error) {
    return res.status(500).json({ error: "Error in deleting movie", error });
  }
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
