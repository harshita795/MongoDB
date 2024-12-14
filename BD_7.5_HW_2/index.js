const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect.js");
const Hotel = require("./models/hotel.models.js");
initializeDatabase();

app.use(express.json());

async function updateHotelById(hotelId, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {
      new: true,
    });
    return updatedHotel;
  } catch (error) {
    console.error("Error in updating hotel data", error);
  }
}

app.post("/hotels/update/:hotelId", async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const updatedData = req.body;
    const response = await updateHotelById(hotelId, updatedData);
    return res
      .status(200)
      .json({ message: "Hotel updated successfully.", response });
  } catch (error) {
    return res.status(500).json({ error: "Failed to update the hotel", error });
  }
});

async function updateHotelByName(hotelName, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { name: hotelName },
      dataToUpdate,
      { new: true }
    );
    console.log(updatedHotel);
  } catch (error) {
    console.error("Error in updating hotel data", error);
  }
}

// updateHotelByName("Sunset Resort", { rating: 4.2 });

async function updatedHotelByPhoneNumber(hotelPhoneNumber, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { phoneNumber: hotelPhoneNumber },
      dataToUpdate,
      { new: true }
    );
    console.log(updatedHotel);
  } catch (error) {
    console.error("Error in updating hotel data", error);
  }
}
// updatedHotelByPhoneNumber("+1299655890", { phoneNumber: "+1997687392" });

// delete a hotel by its id
async function deleteHotelById(hotelId) {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(hotelId);
    return deletedHotel;
  } catch (error) {
    console.error("Error in deleting hotel", error);
  }
}

app.post("/hotels/:hotelId", async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const response = await deleteHotelById(hotelId);
    return res
      .status(200)
      .json({ message: "Hotel deleted successfully", response });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete the hotel", error });
  }
});

//  delete a hotel by its phone number
async function deleteHotelByPhoneNumber(hotelPhoneNumber) {
  try {
    const deletedHotel = await Hotel.findOneAndDelete({
      phoneNumber: hotelPhoneNumber,
    });
    console.log("This hotel was deleted", deletedHotel);
  } catch (error) {
    console.error("Error in deleting hotel", error);
  }
}
// deleteHotelByPhoneNumber("+1234555890");

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
