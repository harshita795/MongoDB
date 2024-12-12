const { initializeDatabase } = require("./db/db.connect.js");
const Restaurant = require("./models/restaurant.models.js");
initializeDatabase();

async function updateRestaurantById(restaurantId, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      dataToUpdate,
      { new: true }
    );
    console.log(updatedRestaurant);
  } catch (error) {
    console.error("Error in updating the restaurant data", error);
  }
}

// updateRestaurantById("67594003c41df416f5b572dd", { rating: 4.1 });

async function updateRestaurantByName(restaurantName, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { name: restaurantName },
      dataToUpdate,
      { new: true }
    );
    console.log(updatedRestaurant);
  } catch (error) {
    console.error("Error in updating the restaurant data", error);
  }
}

// updateRestaurantByName("Somi", { name: "Som Sarovar" });

async function updateRestaurantByPhoneNumber(
  restaurantPhoneNumber,
  dataToUpdate
) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { phoneNumber: restaurantPhoneNumber },
      dataToUpdate,
      { new: true }
    );
    console.log(updatedRestaurant);
  } catch (error) {
    console.error("Error in updating the restaurant data", error);
  }
}

updateRestaurantByPhoneNumber("1288997392", {
  isDeliveryAvailable: true,
});
