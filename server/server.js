const express = require("express");
const app = express();

//cors
const cors = require("cors");
app.use(cors("http://localhost:3000"));

app.use(express.json());
require("dotenv").config();
require("./config/connectDB");

//Routes
// //Admin
// app.use("/api/v1/admin", require("./routes/userRoute"));
//User
app.use("/api/v1/users", require("./routes/userRoute"));

//Post
app.use("/api/v1/posts", require("./routes/postRoute"));
//Category
app.use("/api/v1/category", require("./routes/categoryRoute"));
//homes
app.use("/api/v1/homes", require("./routes/homeRoute"));

//Cart

app.use("/api/v1/cart", require("./routes/cartRoute"));
// //products
app.use("/api/v1/products", require("./routes/productRoute"));

//checkout
app.use("/api/v1/checkout", require("./routes/CheckoutRoute"));

//images
app.use("/my-images", express.static("my-images"));

//

app.listen(process.env.PORT, () =>
  console.log("listening on port ", process.env.PORT)
);
