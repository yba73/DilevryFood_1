const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String },
  isAdmin: { type: Boolean, default: false },
  image: { type: String },
  phone: { type: String },
  Age: { type: String },

  role: {
    type: String,
    enume: ["admin", "customer"],
    default: "customer",
  },
});
module.exports = mongoose.model("user", userSchema);
