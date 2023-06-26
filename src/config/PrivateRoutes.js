import { Layout } from "@components";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("token");

  if (isAuthenticated) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
