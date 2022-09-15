import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../store/shopping-cart/userSlice";
const ProtectedAdminRoute = () => {
  const dispatsh = useDispatch();
  useEffect(() => {
    dispatsh(getUserInfo());
  }, []);

  const { userInfo } = useSelector((state) => state.user);
  const Role = userInfo.isAdmin;

  return Role ? <Outlet /> : <Navigate to="/home" />;
};

export default ProtectedAdminRoute;
