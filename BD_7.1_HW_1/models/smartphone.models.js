const mongoose = require("mongoose");

const smartphoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    operatingSystem: {
      type: String,
    },
    displaySize: {
      type: String,
    },
    storage: {
      type: String,
    },
    ram: {
      type: String,
    },
    cameraSpecs: {
      type: Object,
    },
    batteryCapacity: {
      type: String,
    },
    connectivity: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
    },
    colorsAvailable: [
      {
        type: String,
      },
    ],
    features: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Smartphone = mongoose.model("Smartphone", smartphoneSchema);

module.exports = Smartphone;
