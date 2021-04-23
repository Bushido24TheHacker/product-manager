const mongoose = require("mongoose");
const requiredMsg = "{PATH} is required.";

const ProductManagerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, requiredMsg],
      minlength: [2, "{PATH} msut be atleast {MINLENGTH} characters."]
    },

    price: {
      type: Number,
      required: [true, requiredMsg],
      min: [0, "{PATH} must be at least {MIN}"]
    },

    description: {
      type: String,
      required: [true, requiredMsg],
      minlength: [5, "{PATH} must be at least {MINLENGTH} characters."]
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductManagerSchema);

module.exports = Product;
