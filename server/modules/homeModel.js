const mongoose = require("mongoose");
const homeSchema = mongoose.Schema({
  // categoryModel

  id: {
    type: Number,
  },
  display: {
    type: String,
  },
  imgUrl: {
    type: String,
  },

  image: {
    type: String,
  },
  // Header
  logo: {
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
module.exports = mongoose.model("home", homeSchema);
