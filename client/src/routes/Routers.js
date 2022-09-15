import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "../pages/adminDashboard/Dashboard";
import Payments from "../pages/adminDashboard/Payments";
import Products from "../pages/adminDashboard/Products";
import Profile from "../pages/Profile";
import ProtectedAdminRoute from "../components/ProtectedRoute/ProtectedAdminRoute";
import AddProduct from "../pages/adminDashboard/AddProduct";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/homes" />} />
      <Route path="/homes" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/foods" element={<AllFoods />} />

        <Route path="/foods/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      <Route element={<ProtectedAdminRoute />}>
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/addproducts" element={<AddProduct />} />

        <Route path="/admin" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routers;
