import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/checkout.css";
import { useForm } from "react-hook-form";
import { addCheckout } from "../store/shopping-cart/chekoutSlice";
const Checkout = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const dispatch = useDispatch();
  const totalAmount = cartTotalAmount + Number(shippingCost);
  const submitCheckout = (LoginData) => {
    dispatch(addCheckout(LoginData));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div>
                <div>
                  <div className="containercheout">
                    <form
                      action="#"
                      className="login active formPrdouct "
                      onSubmit={handleSubmit(submitCheckout)}
                    >
                      <h2 className="">Payment</h2>

                      {/* Name */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="text"
                            placeholder="Entre Name "
                            {...register("name")}
                          />
                        </div>
                      </div>
                      {/* Email */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="text"
                            placeholder="Entre your Email"
                            {...register("email")}
                          />
                        </div>
                      </div>

                      {/* phone */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="number"
                            placeholder="Entre phone "
                            {...register("phone")}
                          />
                        </div>
                      </div>
                      {/* Country */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="text"
                            placeholder="Entre your Country "
                            {...register("country")}
                          />
                        </div>
                      </div>

                      {/* City */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="text"
                            placeholder="City"
                            {...register("city")}
                          />
                        </div>
                      </div>

                      {/* postalCode */}
                      <div className="formProductsDash">
                        <div className="input-groupProductsdash roup">
                          <input
                            className="inputdash"
                            type="text"
                            placeholder="postal Code"
                            {...register("postalCode")}
                          />
                        </div>
                      </div>

                      {/* button Login */}
                      <button type="submit" className="btn-submit-addProduct">
                        Add
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
