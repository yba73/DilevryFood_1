const mongoose = require("mongoose");
const poroductSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  image01: {
    type: String,
  },
  image02: {
    type: String,
  },
  image03: {
    type: String,
  },

  category: {
    type: String,
  },
  desc: {
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("product", poroductSchema);
