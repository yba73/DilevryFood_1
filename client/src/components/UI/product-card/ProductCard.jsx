import React, { useEffect } from "react";
import { getUserInfo } from "../../../store/shopping-cart/userSlice";
import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { deleteProduct } from "../../../store/shopping-cart/productSlice";
import Edit from "../../Add/Edit";
import { addToCart } from "../../../store/shopping-cart/myCartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  const { _id: productId, id, title, image01, price } = props.item;
  // console.log("title", title);
  const quantity = 1;
  const { userInfo } = useSelector((state) => state.user);
  const Role = userInfo.isAdmin;
  const { isAuth } = useSelector((state) => state.user);

  const deletPro = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(productId));
  };

  const addToCarts = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        productId,
        title,
        image01,
        price,
        quantity,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <>
            {isAuth && !Role ? (
              <>
                <span className="product__price">${price}</span>
                <button className="addTOCart__btn" onClick={addToCarts}>
                  Add
                </button>
              </>
            ) : null}
          </>
          {/* <span className="product__price">${price}</span> */}
          {Role ? (
            <>
              <button className="addTOCart__btn" onClick={deletPro}>
                Dellet Cart
              </button>
              <Edit item={props.item} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
