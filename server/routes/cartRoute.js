const express = require("express");
const {
  addCart,
  getCart,
  removeCart,
  deleteCart,
} = require("../controllers/cartControllers");
const { authMilddleware } = require("../middlewares/authMiddlewar");
const router = express.Router();

router.get("/", authMilddleware, getCart);
router.put("/addtocart", authMilddleware, addCart);
router.put("/removefromcart", authMilddleware, removeCart);
router.put("/deletecart", authMilddleware, deleteCart);

module.exports = router;
