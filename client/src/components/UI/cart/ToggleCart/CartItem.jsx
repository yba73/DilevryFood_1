import React from "react";

import "../../../../styles/cart-item.css";

import ToggleCart from "./ToggleCart";

const CartItem = ({ item }) => {
  const productCart = item.products;

  return (
    <>
      <>
        {productCart.map(({ productId, quantity }) => (
          <ToggleCart
            productId={productId}
            key={Math.random() * 10}
            quantity={quantity}
          />
        ))}
      </>
    </>
  );
};

export default CartItem;
