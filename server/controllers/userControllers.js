const User = require("../modules/userModule");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// @description register a new user
// @params POST /api/v1/users/register
// @access PUBLIC
exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password, isAdmin, role, image, phone, Age } =
      req.body;
    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ msg: "User already registread." });

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      phone,
      Age,
      isAdmin,
      image,
      role,
      username,
      email,
      password: hash,
    });
    const token = jwt.sign(
      { sub: newUser._id, role: newUser.role, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET
    );
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description login as new user
// @params POST /api/v1/users/login
// @access PUBLIC
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser)
      return res.status(400).json({ msg: "You should register first." });

    var validate = await bcrypt.compare(password, existUser.password);
    if (!validate) return res.status(400).json({ msg: "Invalid password." });
    const token = jwt.sign({ sub: existUser._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong ." });
  }
};
// @description get user information
// @params GET /api/v1/users/:id
// @access PRIVATE
exports.getUserInfo = async (req, res) => {
  try {
    const userInfo = await User.findById(req.userId).select("-password -__v");
    res.json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong ." });
  }
};

// @description GET All Users List
// @params GET /api/v1/users
// @access PRIVATE

exports.getAllusers = async (req, res) => {
  try {
    const UserList = await User.find({});
    res.json(UserList);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @desc delete User by ID
// @params DELETE /api/v1/users/:id
// @access PRIVATE admin
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @description Update user by id
// @params PUT /api/v1/users/:id
// @access PRIVATE-owner

exports.upadateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { ...req.body });
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};
