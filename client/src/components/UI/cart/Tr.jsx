import React from "react";

import MapCart from "./MapCart";
const Tr = ({ item }) => {
  const productCart = item.products;

  return (
    <>
      {productCart.map(({ productId, quantity }) => (
        <MapCart
          productId={productId}
          key={Math.random() * 10}
          quantity={quantity}
        />
      ))}
    </>
  );
};

export default Tr;
