import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCart,
  deleteCart,
  addToCart,
} from "../../../store/shopping-cart/myCartSlice";

const MapCart = ({ productId: product, quantity }) => {
  const dispatch = useDispatch();

  const productId = product._id;
  console.log("productId", productId);
  const PriceTotal = product.price * quantity;
  console.log("PriceTotal", PriceTotal);

  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(deleteCart(productId));
  };

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeCart({ productId }));
  };

  return (
    <>
      <>
        <tr key={Math.random() * 10}>
          <td className="text-center cart__img-box">
            <img src={product.image01} alt="" />
          </td>
          <td className="text-center">{product.title}</td>
          <td className="text-center">${PriceTotal}</td>
          <td className="text-center">{quantity}px</td>

          <td className="">
            <button
              className=""
              onClick={(e) => {
                dispatch(addToCart({ productId, quantity: 1 }));
              }}
            >
              +
            </button>
          </td>

          <td className="">
            <button
              className=""
              onClick={(e) => {
                dispatch(addToCart({ productId, quantity: -1 }));
              }}
            >
              -
            </button>
          </td>

          <td className="text-center cart__item-del">
            <i className="ri-delete-bin-line" onClick={removeItem}></i>
          </td>

          {/* <td className="text-center cart__item-del">
            <i className="ri-delete-bin-line" onClick={deleteItem}></i>
          </td> */}
        </tr>
      </>
    </>
  );
};

export default MapCart;
