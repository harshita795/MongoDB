const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect.js");
const Restaurant = require("./models/restaurant.models.js");
initializeDatabase();

app.use(express.json());

// const newRestaurant = {
//   name: "Cha Cha",
//   cuisine: ["Spanish"],
//   location: "123 Main Street, Anytown",
//   rating: 4.0,
//   website: "https://example.com",
//   phoneNumber: "+1234567890",
//   openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
//   priceRange: "$$ (11-30)",
//   reservationsNeeded: true,
//   isDeliveryAvailable: true,
//   menuUrl: "https://example.com/menu",
//   photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
// };

async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const savedRestaurant = await restaurant.save();
    return savedRestaurant;
  } catch (error) {
    throw error;
  }
}

app.post("/restaurants", async (req, res) => {
  try {
    const restaurants = await createRestaurant(req.body);
    return res.status(201).json({
      message: "Restaurant created successfully",
      restaurants: restaurants,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to create the restaurant", error });
  }
});

// createRestaurant(newRestaurant);

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
