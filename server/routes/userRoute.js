const express = require("express");
const multer = require("multer");
const {
  register,
  login,
  getUserInfo,
  getAllusers,
  deleteUser,
  upadateUser,
} = require("../controllers/userControllers");
const router = express.Router();
const { body } = require("express-validator");
const { authMilddleware } = require("../middlewares/authMiddlewar");
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
// Post login /login
router.post("/login", login);

// Post  Register
router.post(
  "/register",
  body("email", "please enter a valid email.").isEmail(),
  body("password", "password must be at least 8 characters").isLength(8),
  upload.single("image"),
  register
);
// Get user All info
router.get("/", getAllusers);

// Get user info
router.get("/infouser", authMilddleware, getUserInfo);
// Delete user
router.delete("/:id", deleteUser);

// Upadate user
router.put("/:id", upadateUser);
module.exports = router;
