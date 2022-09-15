const express = require("express");

const {
  addCheckout,
  getCheckout,
  deleteCheckout,
} = require("../controllers/chekoutControllers");
const router = express.Router();

const { authMilddleware } = require("../middlewares/authMiddlewar");

router.post("/addcheckout", authMilddleware, addCheckout);
router.get("/", getCheckout);
router.delete("/:id", deleteCheckout);

module.exports = router;
