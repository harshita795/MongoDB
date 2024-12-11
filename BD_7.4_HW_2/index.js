const { initializeDatabase } = require("./db/db.connect.js");
const Hotel = require("./models/hotel.models.js");
initializeDatabase();

// const newHotel = {
//   name: "Lake View",
//   category: "Mid-Range",
//   location: "124 Main Street, Anytown",
//   rating: 3.2,
//   website: "https://lake-view-example.com",
//   phoneNumber: "+1234555890",
//   checkInTime: "2:00 PM",
//   checkOutTime: "12:00 PM",
//   amenities: ["Laundry", "Boating"],
//   priceRange: "$$$ (31-60)",
//   reservationsNeeded: true,
//   isParkingAvailable: false,
//   isWifiAvailable: true,
//   isPoolAvailable: false,
//   isSpaAvailable: false,
//   isRestaurantAvailable: false,
//   photos: [
//     "https://example.com/hotel1-photo1.jpg",
//     "https://example.com/hotel1-photo2.jpg",
//   ],
// };

const newHotel = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};

async function createHotel(newHotel) {
  try {
    const hotel = new Hotel(newHotel);
    const savedHotel = await hotel.save();
    console.log(savedHotel);
  } catch (error) {
    throw error;
  }
}
// createHotel(newHotel);

// read data from mongodb
async function readAllHotels() {
  try {
    const allHotels = await Hotel.find();
    console.log(allHotels);
  } catch (error) {
    console.error(error);
  }
}
// readAllHotels();

async function getHotelByName(hotelName) {
  try {
    const hotelByName = await Hotel.find({ name: hotelName });
    console.log(hotelByName);
  } catch (error) {
    console.error(error);
  }
}
// getHotelByName("Lake View");

async function getByParkingAvailable() {
  try {
    const parkingAvailable = await Hotel.find({ isParkingAvailable: true });
    console.log(parkingAvailable);
  } catch (error) {
    console.error(error);
  }
}

// getByParkingAvailable();

async function getByRestaurantAvailable() {
  try {
    const restaurantAvailable = await Hotel.find({
      isRestaurantAvailable: true,
    });
    console.log(restaurantAvailable);
  } catch (error) {
    console.error(error);
  }
}

// getByRestaurantAvailable();

async function getHotelByCategory(category) {
  try {
    const hotelByCategory = await Hotel.find({ category: category });
    console.log(hotelByCategory);
  } catch (error) {
    console.error(error);
  }
}

// getHotelByCategory("Mid-Range");

async function getHotelByPriceRange(priceRange) {
  try {
    const hotelByPriceRange = await Hotel.find({ priceRange: priceRange });
    console.log(hotelByPriceRange);
  } catch (error) {
    console.error(error);
  }
}

// getHotelByPriceRange("$$$$ (61+)");

async function getHotelByRating(rating) {
  try {
    const hotelByRating = await Hotel.find({ rating: rating });
    console.log(hotelByRating);
  } catch (error) {
    console.error(error);
  }
}

// getHotelByRating(4);

async function getHotelByPhoneNumber(phoneNumber) {
  try {
    const hotelByPhoneNumber = await Hotel.find({ phoneNumber: phoneNumber });
    console.log(hotelByPhoneNumber);
  } catch (error) {
    console.error(error);
  }
}
getHotelByPhoneNumber("+1299655890");
