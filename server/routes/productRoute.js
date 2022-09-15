const express = require("express");
const multer = require("multer");
const {
  addPrdocut,
  getPrdocut,
  deleteProduct,
  upadatePrdocut,
  upadateImage,
} = require("../controllers/productContollers");
const router = express.Router();

const { authMilddleware } = require("../middlewares/authMiddlewar");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/addproducts",
  authMilddleware,
  upload.single("image01"),
  addPrdocut
);
router.get("/", getPrdocut);
router.delete("/:id", deleteProduct);
router.put("/:id", authMilddleware, upadatePrdocut);
router.put(
  "/image/:id",
  authMilddleware,

  upadateImage
);

module.exports = router;
