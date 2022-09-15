import React from "react";
import {
  deleteCheckout,
  getcheckout,
} from "../../store/shopping-cart/chekoutSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CheckoutAdmin = ({ checkoutList }) => {
  const { _id, email, name, phone, city } = checkoutList;
  const dispatch = useDispatch();
  const deletCheckout = (e) => {
    e.preventDefault();
    dispatch(deleteCheckout(_id));
  };
  useEffect(() => {
    dispatch(getcheckout());
  }, []);
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{city}</td>

      <td>
        <button className="btnDelete" onClick={deletCheckout}>
          Check
        </button>
      </td>
    </tr>
  );
};

export default CheckoutAdmin;
