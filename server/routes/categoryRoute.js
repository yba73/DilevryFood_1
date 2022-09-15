const express = require("express");
const multer = require("multer");
const {
  addCategory,
  getCategory,
  deleteCategory,
  upadateCategory,
  upadateImageCategory,
} = require("../controllers/categoryControllers");
const router = express.Router();

const { authMilddleware } = require("../middlewares/authMiddlewar");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "my-images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/addcategory",
  authMilddleware,
  upload.single("imgUrl"),
  addCategory
);
router.get("/", getCategory);
router.delete("/:id", authMilddleware, deleteCategory);
router.put("/:id", authMilddleware, upadateCategory);
router.put(
  "/image/:id",
  authMilddleware,
  upload.single("imgUrl"),
  upadateImageCategory
);

module.exports = router;
