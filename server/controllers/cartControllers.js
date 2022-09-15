const Cart = require("../modules/cartModel");

// @desc add items to cart
// @params PUT /api/v1/cart/addtocart
// @access PRIVATE

exports.addCart = async (req, res) => {
  try {
    const userId = req.userId;
    const reqBody = req.body;
    const cart = await Cart.findOne({ owner: userId });
    const product = req.body.productId;

    if (cart) {
      const item = await cart.products.find((c) => c.productId == product);
      if (item) {
        const userCart = await Cart.findOneAndUpdate(
          { owner: userId, "products.productId": product },
          {
            $set: {
              "products.$": {
                ...req.body,
                quantity: item.quantity + req.body.quantity,
              },
            },
          }
        );
      } else {
        const userCart = await Cart.findOneAndUpdate(
          { owner: userId },
          {
            $push: {
              products: req.body,
            },
          }
        );
      }
    } else {
      await Cart.create({
        owner: userId,
        products: [reqBody],
      });
    }
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @desc get cart
// @params GET /api/v1/cart/
// @access PRIVATE

exports.getCart = async (req, res) => {
  try {
    const cartList = await Cart.find({ owner: req.userId }).populate(
      "products.productId"
    );
    res.json(cartList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @desc remove cart
// @params PUT /api/v1/cart/removefromcart
// @access PRIVATE

exports.removeCart = async (req, res) => {
  try {
    console.log(req.body, req.userId);
    const userCart = await Cart.findOneAndUpdate(
      { owner: req.userId },
      { $pull: { products: { productId: req.body.productId } } },
      { new: true }
    );
    // await userCart.updateOne({
    //   $unset: {
    //     products: "",
    //   },
    // });

    res.json({ success: true, userCart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @desc delete cart
// @params PUT /api/v1/cart/deletecart
// @access PRIVATE

exports.deleteCart = async (req, res) => {
  try {
    const userCart = await Cart.findOne({ owner: req.userId });
    await userCart.updateOne({
      $unset: {
        products: "",
      },
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};
