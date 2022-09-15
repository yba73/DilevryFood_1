const Checkout = require("../modules/checkoutModale");

// @description add new Checkout
// @params POST /api/v1/Checkout/addcheckout
// @access PRIVATE
exports.addCheckout = async (req, res) => {
  try {
    const { name, email, phone, country, city } = req.body;

    const newPost = await Checkout.create({
      name,
      email,
      phone,
      owner: req.userId,
      country,
      city,
    });

    res.json(newPost);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description GET Checkout List
// @params GET /api/v1/checkout
// @access PUBLIC
exports.getCheckout = async (req, res) => {
  try {
    const postList = await Checkout.find().populate("owner", "-password");
    res.json(postList);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Delete Checkout by id
// @params DELETE /api/v1/checkout/:id
// @access PRIVATE-owner
exports.deleteCheckout = async (req, res) => {
  try {
    await Checkout.findByIdAndDelete(req.params.id);
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};
