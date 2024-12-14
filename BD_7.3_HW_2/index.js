const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect.js");
const Hotel = require("./models/hotel.models.js");
initializeDatabase();

app.use(express.json());

const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel-photo1.jpg",
    "https://example.com/hotel-photo2.jpg",
  ],
};

async function createHotel(newHotel) {
  try {
    const hotel = new Hotel(newHotel);
    const savedHotel = await hotel.save();
    return savedHotel;
  } catch (error) {
    throw error;
  }
}

app.post("/hotels", async (req, res) => {
  try {
    const hotels = await createHotel(req.body);
    return res
      .status(201)
      .json({ message: "Hotel ceated successfully.", hotels });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create the hotel", error });
  }
});

// createHotel(newHotel);
app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
