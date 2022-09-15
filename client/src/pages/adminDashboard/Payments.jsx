import React from "react";

import "../../styles/dashboard.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import NavDash from "./NavDash";
import { getcheckout } from "../../store/shopping-cart/chekoutSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutAdmin from "../../components/AdminDashboard/CheckoutAdmin";

const Payments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcheckout());
  }, []);
  const { CheckoutList } = useSelector((state) => state.checkout);

  return (
    <Helmet title="Payments">
      <CommonSection title="Payments" />

      <NavDash />
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <div className="containerlDash ">
              <div className="contentDash-2">
                <div className="recent-payments">
                  <div className="titleDash">
                    <h2>Payments</h2>
                  </div>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>phone</th>
                      <th>city</th>
                      <th>Name of products</th>
                      <th>Price</th>
                      <th>Delete</th>
                    </tr>
                    {CheckoutList.map((el, index) => (
                      <CheckoutAdmin checkoutList={el} key={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Payments;
