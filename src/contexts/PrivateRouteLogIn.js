import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouteLogIn({ isAuth }) {
  return !isAuth ? <Outlet /> : <Navigate to="/main" />;
}

export default PrivateRouteLogIn;