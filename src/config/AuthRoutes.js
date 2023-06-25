import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthRoute = () => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default AuthRoute;
