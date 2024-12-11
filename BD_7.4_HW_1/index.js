const { initializeDatabase } = require("./db/db.connect.js");
const Restaurant = require("./models/restaurant.models.js");
initializeDatabase();

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
    console.log(allRestaurants);
  } catch (error) {
    console.error(error);
  }
}

// readAllRestaurant();

async function getRestaurantByName(restaurantName) {
  try {
    const restaurantByName = await Restaurant.find({ name: restaurantName });
    console.log(restaurantByName);
  } catch (error) {
    console.error(error);
  }
}

// getRestaurantByName("Cha Cha");

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

// getRestaurantByReservationNeeded();

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

// getRestaurantByDeliveryAvailable();

async function getRestaurantByPhoneNumber(phoneNumber) {
  try {
    const restaurantByPhoneNumber = await Restaurant.find({
      phoneNumber: phoneNumber,
    });
    console.log(restaurantByPhoneNumber);
  } catch (error) {
    console.error(error);
  }
}
// getRestaurantByPhoneNumber(1288997392);

async function getRestaurantByCuisine(cuisine) {
  try {
    const restaurantByCuisine = await Restaurant.find({ cuisine: cuisine });
    console.log(restaurantByCuisine);
  } catch (error) {
    console.error(error);
  }
}

getRestaurantByCuisine("Italian");
