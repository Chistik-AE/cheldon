import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/logIn" />;
}

export default PrivateRoute;