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

// updateRestaurantByPhoneNumber("1288997392", {
//   isDeliveryAvailable: true,
// });

// deleting a reataurant by id
async function deletingRestaurantById(restaurantId) {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    console.log(`This restaurant was deleted:`, deletedRestaurant);
  } catch (error) {
    console.error("Error in deleting the restaurant", error);
  }
}
// deletingRestaurantById("675855d12c9ac26cc4873977");

//  deleting a restaurant by name
async function deletingRestaurantByNmae(restaurantName) {
  try {
    const deletedRestaurant = await Restaurant.findOneAndDelete({
      name: restaurantName,
    });
    console.log(`This restaurant was deleted:`, deletedRestaurant);
  } catch (error) {
    console.error("Error in deleting the restaurant", error);
  }
}
deletingRestaurantByNmae("Som Sarovar");
