const { initializeDatabase } = require("./db/db.connect.js");
const Hotel = require("./models/hotel.models.js");
initializeDatabase();

async function updateHotelById(hotelId, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {
      new: true,
    });
    console.log(updatedHotel);
  } catch (error) {
    console.error("Error in updating hotel data", error);
  }
}

// updateHotelById("67594b71b9d91782e154c2a1", { checkOutTime: "11:00 AM" });

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
    console.log("This hotel was deleted", deletedHotel);
  } catch (error) {
    console.error("Error in deleting hotel", error);
  }
}

// deleteHotelById("67585d79b1de7c9f7c8e78ed");

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
deleteHotelByPhoneNumber("+1234555890");
