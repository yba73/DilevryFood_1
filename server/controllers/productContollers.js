const Product = require("../modules/productsModel");

const cloudinary = require("../utils/cloudinary");
// @description add new Prdocut
// @params Product /api/v1/products/addproducts
// @access PRIVATE

exports.addPrdocut = async (req, res) => {
  try {
    const { title, desc, price, category, id } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path, {
      upload_preset: "product",
    });
    const newPost = await Product.create({
      id,
      title,
      price,
      category,
      desc,
      image01: result.secure_url,
      //   image02: result.secure_url,
      //   image03: result.secure_url,
      owner: req.userId,
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description GET Prdocut List
// @params GET /api/v1/products
// @access PUBLIC
exports.getPrdocut = async (req, res) => {
  try {
    const productList = await Product.find().populate("owner", "-password");
    res.json(productList);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Delete product by id
// @params DELETE /api/v1/products/:id
// @access PRIVATE-owner
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};
// @description Update post by id
// @params PUT /api/v1/products/:id
// @access PRIVATE-owner

exports.upadatePrdocut = async (req, res) => {
  try {
    const productCard = await Product.findById(req.params.id);
    if (productCard.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await Product.findByIdAndUpdate(req.params.id, { ...req.body });
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Update post by id
// @params PUT /api/v1/products/image/:id
// @access PRIVATE-owner

exports.upadateImage = async (req, res) => {
  try {
    const productCard = await Product.findById(req.params.id);
    if (productCard.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });

    const result = await cloudinary.uploader.upload(req.file.path, {
      upload_preset: "foods",
    });
    await Product.findByIdAndUpdate(
      req.params.id,
      { image01: result.secure_url }
      //   { image02: result.secure_url },
      //   { image03: result.secure_url }
    );
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};
