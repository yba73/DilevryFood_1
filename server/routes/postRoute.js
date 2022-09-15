const express = require("express");
const multer = require("multer");

const { Post } = require("../modules/postModule");
const {
  addPost,
  getPost,
  deletePost,
  upadatePost,
  upadateImage,
} = require("../controllers/postContollers");
const { authMilddleware } = require("../middlewares/authMiddlewar");
// const { userLogin } = require("../middlewares/isAdminMiddleware");

// const { isAdminMiddleware, userLogin } = require("../middlewares/isAdminMiddleware");

const router = express.Router();
const { user, isAdmin } = require("../modules/userModule");
const { isAdminMiddleware } = require("../middlewares/isAdminMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, folder) {
    folder(null, "my-images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "product",
//     format: async (req, file) => ["png", "jpeg", "jpg"], // supports promises as well
//     public_id: (req, file) => "computed-filename-using-request",
//   },
// });

const upload = multer({ storage: storage });

router.post(
  "/addPost",
  authMilddleware,
  // isAdminMiddleware(role),
  // checkRole(["admin"]),

  upload.single("image"),
  addPost
);
router.get("/", getPost);
router.delete("/:id", authMilddleware, deletePost);
router.put("/:id", authMilddleware, upadatePost);
router.put("/image/:id", authMilddleware, upload.single("image"), upadateImage);

module.exports = router;
