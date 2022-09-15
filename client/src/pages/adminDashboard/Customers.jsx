import React, { useEffect } from "react";
import "../../styles/dashboard.css";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUserInfo,
} from "../../store/shopping-cart/userSlice";

<link
  href="https://fonts.googleapis.com/css?family=Open Sans Condensed:300"
  rel="stylesheet"
></link>;
const Customers = ({ items }) => {
  const { _id, image, email, username, phone } = items;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserInfo());
  }, []);

  const deletUser = (e) => {
    e.preventDefault();
    dispatch(deleteUser(_id));
  };
  const defaultImage = image;
  return (
    <tr>
      <td>
        {defaultImage ? (
          <>
            <img src={image} alt="user" width="100" />
          </>
        ) : (
          <>
            <img
              src="https://res.cloudinary.com/yba73/image/upload/v1663121237/users/m6em0nt8oarygmyguhxe.png"
              alt="user"
              width="100"
            />
          </>
        )}
      </td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className="btnDelete" onClick={deletUser}>
          Delete
        </button>
        <img src="info.png" alt="" />
      </td>
    </tr>
  );
};

export default Customers;
