import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import { getCart } from "../store/shopping-cart/myCartSlice";
import { getProducts } from "../store/shopping-cart/productSlice";
import Tr from "../components/UI/cart/Tr";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.myCart.totalAmount);

  const myCart = useSelector((state) => state.myCart.cartItems);
  // console.log(totalAmount);
  // console.log("Mycart", myCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div>
                {/* <button onClick={deleteItem}>delete All items</button> */}
                {myCart.length === 0 ? (
                  <h5 className="text-center">Your cart is empty</h5>
                ) : (
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Plus</th>
                        <th>Minus</th>
                        <th>Remove </th>
                      </tr>
                    </thead>
                    <tbody>
                      {myCart.map((item) => (
                        <Tr item={item} key={Math.random() * 10} />
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
