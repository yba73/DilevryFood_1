const mongoose = require("mongoose");
const checkoutSchema = mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: Number,
  },
  postalCode: {
    type: Number,
  },
  price: {
    type: Number,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("checkout", checkoutSchema);
