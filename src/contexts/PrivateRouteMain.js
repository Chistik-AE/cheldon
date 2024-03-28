import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouteMain({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/logIn" />;
}

export default PrivateRouteMain;