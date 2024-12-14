const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect.js");
const Restaurant = require("./models/restaurant.models.js");
initializeDatabase();

app.use(express.json());

// const newRestaurant = {
//   name: "Somi",
//   cuisine: ["Greek"],
//   location: "11 Main Road, Gem",
//   rating: 4.3,
//   website: "https://somi-example.com",
//   phoneNumber: "+1234997390",
//   openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
//   priceRange: "$$ (11-30)",
//   reservationsNeeded: false,
//   isDeliveryAvailable: true,
//   menuUrl: "https://somi-example.com/menu",
//   photos: [
//     "https://example.com/somi-photo1.jpg",
//     "https://example.com/somi-photo2.jpg",
//   ],
// };

const newRestaurant = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};

async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const savedRestaurant = await restaurant.save();
    console.log(savedRestaurant);
  } catch (error) {
    throw error;
  }
}

// createRestaurant(newRestaurant);

// reading data from database

async function readAllRestaurant() {
  try {
    const allRestaurants = await Restaurant.find();
    return allRestaurants;
  } catch (error) {
    console.error(error);
  }
}

app.get("/restaurants", async (req, res) => {
  try {
    const allRestaurants = await readAllRestaurant();
    return res.status(200).json({
      message: "All restaurants fetched successfully.",
      allRestaurants,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to get all restaurants", error });
  }
});

async function getRestaurantByName(restaurantName) {
  try {
    const restaurantByName = await Restaurant.find({ name: restaurantName });
    return restaurantByName;
  } catch (error) {
    console.error(error);
  }
}

app.get("/restaurants/:restaurantName", async (req, res) => {
  try {
    const restaurantName = req.params.restaurantName;
    const response = await getRestaurantByName(restaurantName);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get restaurants", error });
  }
});

async function getRestaurantByReservationNeeded() {
  try {
    const restaurantByReservationNeed = await Restaurant.find({
      reservationsNeeded: true,
    });
    console.log(restaurantByReservationNeed);
  } catch (error) {
    console.error(error);
  }
}

async function getRestaurantByDeliveryAvailable() {
  try {
    const restaurantByDeliveryAvailable = await Restaurant.find({
      isDeliveryAvailable: true,
    });
    console.log(restaurantByDeliveryAvailable);
  } catch (error) {
    console.error(error);
  }
}

async function getRestaurantByPhoneNumber(phoneNumber) {
  try {
    const restaurantByPhoneNumber = await Restaurant.find({
      phoneNumber: phoneNumber,
    });
    return restaurantByPhoneNumber;
  } catch (error) {
    console.error(error);
  }
}

app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
  try {
    const phoneNumber = req.params.phoneNumber;
    const response = await getRestaurantByPhoneNumber(phoneNumber);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get restaurants", error });
  }
});

async function getRestaurantByCuisine(cuisine) {
  try {
    const restaurantByCuisine = await Restaurant.find({ cuisine: cuisine });
    return restaurantByCuisine;
  } catch (error) {
    console.error(error);
  }
}

app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
  try {
    const cuisineName = req.params.cuisineName;
    const response = await getRestaurantByCuisine(cuisineName);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get restaurants", error });
  }
});

async function getRestaurantByLocation(location) {
  try {
    const restaurantByLocation = await Restaurant.find({
      location: location,
    });
    return restaurantByLocation;
  } catch (error) {
    console.error(error);
  }
}

app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
  try {
    const restaurantLocation = req.params.restaurantLocation;
    const response = await getRestaurantByLocation(restaurantLocation);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get restaurants", error });
  }
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
