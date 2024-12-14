const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect.js");
const Restaurant = require("./models/restaurant.models.js");
initializeDatabase();

app.use(express.json());

async function updateRestaurantById(restaurantId, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      dataToUpdate,
      { new: true }
    );
    return updatedRestaurant;
  } catch (error) {
    console.error("Error in updating the restaurant data", error);
  }
}

app.post("/restaurants/update/:restaurantId", async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId.trim();
    const updatedData = req.body;
    const response = await updateRestaurantById(restaurantId, updatedData);
    return res
      .status(200)
      .json({ message: "Restaurant updated successfully", response });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to update the restaurant", error });
  }
});

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
    return deletedRestaurant;
  } catch (error) {
    console.error("Error in deleting the restaurant", error);
  }
}

app.post("/restaurants/delete/:restaurantId", async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId.trim();
    const response = await deletingRestaurantById(restaurantId);
    return res
      .status(200)
      .json({ message: "Restaurant deleted successfully.", response });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to delete the restaurant", error });
  }
});

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
// deletingRestaurantByNmae("Som Sarovar");

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
