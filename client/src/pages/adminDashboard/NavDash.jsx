import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";
const NavDash = () => {
  return (
    <div className="fixedNav">
      <div className="side-menu">
        <div className="brand-name">
          <h1>Brand</h1>
        </div>

        <ul>
          <li>
            <Link className="spanLink" to="/admin">
              Users
            </Link>
          </li>

          <li>
            <Link className="spanLink" to="/admin/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="spanLink" to="/admin/addproducts">
              Add Product
            </Link>
          </li>
          <li>
            <Link className="spanLink" to="/admin/payments">
              Payments
            </Link>
          </li>
          <li>
            <span>Schools</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDash;
