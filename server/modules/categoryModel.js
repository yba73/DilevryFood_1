const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  display: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("category", categorySchema);
