const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database connection "))
  .catch((err) => console.log(err));
