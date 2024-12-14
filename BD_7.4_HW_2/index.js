const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect.js");
const Hotel = require("./models/hotel.models.js");
initializeDatabase();

app.use(express.json());

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
    return allHotels;
  } catch (error) {
    console.error(error);
  }
}

app.get("/hotels", async (req, res) => {
  try {
    const hotels = await readAllHotels();
    return res
      .status(200)
      .json({ message: "All the hotels fetched successfully", hotels });
  } catch (error) {
    return res.status(500).json({ error: "Failed to get the hotels", error });
  }
});
async function getHotelByName(hotelName) {
  try {
    const hotelByName = await Hotel.find({ name: hotelName });
    return hotelByName;
  } catch (error) {
    console.error(error);
  }
}

app.get("/hotels/:hotelName", async (req, res) => {
  try {
    const hotelName = req.params.hotelName;
    const response = await getHotelByName(hotelName);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get the hotels", error });
  }
});

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
    return hotelByCategory;
  } catch (error) {
    console.error(error);
  }
}

app.get("/hotels/category/:hotelCategory", async (req, res) => {
  try {
    const hotelCategory = req.params.hotelCategory;
    const response = await getHotelByCategory(hotelCategory);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get the hotels", error });
  }
});

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
    return hotelByRating;
  } catch (error) {
    console.error(error);
  }
}

app.get("/hotels/rating/:hotelRating", async (req, res) => {
  try {
    const hotelRating = req.params.hotelRating;
    const response = await getHotelByRating(hotelRating);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get the hotels", error });
  }
});

async function getHotelByPhoneNumber(phoneNumber) {
  try {
    const hotelByPhoneNumber = await Hotel.find({ phoneNumber: phoneNumber });
    return hotelByPhoneNumber;
  } catch (error) {
    console.error(error);
  }
}

app.get("/hotels/directory/:phoneNumber", async (req, res) => {
  try {
    const phoneNumber = req.params.phoneNumber;
    const response = await getHotelByPhoneNumber(phoneNumber);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get the hotels", error });
  }
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
