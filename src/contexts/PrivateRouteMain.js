import React, { useState } from 'react'
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouteMain() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') ? true : false)

  return isAuth ? <Outlet /> : <Navigate to="/logIn" />;
}

export default PrivateRouteMain;