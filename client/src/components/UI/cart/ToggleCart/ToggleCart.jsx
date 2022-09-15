import React from "react";
import { useDispatch } from "react-redux";
import { ListGroupItem } from "reactstrap";
import {
  addToCart,
  deleteCart,
  removeCart,
} from "../../../../store/shopping-cart/myCartSlice";

import CartItem from "./CartItem";

const ToggleCart = ({ productId: product, quantity }) => {
  const dispatch = useDispatch();
  const productId = product._id;
  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeCart({ productId }));
  };

  return (
    <>
      <ListGroupItem className="border-0 cart__item">
        <div className="cart__item-info d-flex gap-2">
          <img src={product.image01} alt="product-img" />

          <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
            <div>
              <h6 className="cart__product-title">{product.title}</h6>
              <p className=" d-flex align-items-center gap-5 cart__product-price">
                {quantity}x <span>${product.price}</span>
              </p>
              <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
                <span
                  className="increase__btn"
                  onClick={(e) => {
                    dispatch(
                      addToCart({
                        productId,
                        quantity: 1,
                      })
                    );
                  }}
                >
                  <i className="ri-add-line"></i>
                </span>
                <span className="quantity">{quantity}</span>
                <span
                  className="decrease__btn"
                  onClick={(e) => {
                    dispatch(addToCart({ productId, quantity: -1 }));
                  }}
                >
                  <i className="ri-subtract-line"></i>
                </span>
              </div>
            </div>

            <span className="delete__btn" onClick={removeItem}>
              <i className="ri-close-line"></i>
            </span>
          </div>
        </div>
      </ListGroupItem>
    </>
  );
};

export default ToggleCart;
