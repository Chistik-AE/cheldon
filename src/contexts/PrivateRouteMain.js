import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouteMain() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') ? true : false)

  useEffect(()=>{
    console.log('useeffect')
  },[])

  return (isAuth ? <Outlet /> : <Navigate to="/login" />)
}

export default PrivateRouteMain;