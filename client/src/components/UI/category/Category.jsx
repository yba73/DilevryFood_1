import React, { useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { getCategories } from "../../../store/shopping-cart/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

import "../../../styles/category.css";

const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const { categoryList } = useSelector((state) => state.category);
  return (
    <Container>
      <Row>
        {categoryList.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
