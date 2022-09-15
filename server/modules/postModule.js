const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },

  desc: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("post", postSchema);
