const Category = require("../modules/categoryModel");
const cloudinary = require("../utils/cloudinary");
// @description add new Category
// @params POST /api/v1/category/addCategory
// @access PRIVATE
exports.addCategory = async (req, res) => {
  try {
    const { display } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path, {
      upload_preset: "category",
    });
    const newPost = await Category.create({
      display,
      imgUrl: result.secure_url,
      owner: req.userId,
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description GET Category List
// @params GET /api/v1/category
// @access PUBLIC
exports.getCategory = async (req, res) => {
  try {
    const postList = await Category.find().populate("owner", "-password");
    res.json(postList);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Delete post by id
// @params DELETE /api/v1/category/:id
// @access PRIVATE-owner
exports.deleteCategory = async (req, res) => {
  try {
    const postTask = await Category.findById(req.params.id);
    if (postTask.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await Category.findByIdAndDelete(req.params.id);
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Update post by id
// @params PUT /api/v1/category/:id
// @access PRIVATE-owner

exports.upadateCategory = async (req, res) => {
  try {
    const postTask = await Category.findById(req.params.id);
    if (postTask.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await Category.findByIdAndUpdate(req.params.id, { ...req.body });
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Update post by id
// @params PUT /api/v1/category/image/:id
// @access PRIVATE-owner

exports.upadateImageCategory = async (req, res) => {
  try {
    const postTask = await Category.findById(req.params.id);
    if (postTask.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });

    const imagePath = `http://localhost:5000/${req.file.path}`;
    await Category.findByIdAndUpdate(req.params.id, { imgUrl: imagePath });
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};
