import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Settings } from "@screens";
import { Login, Signup } from "@screens";

import PrivateWrapper from "./PrivateRoutes";
import AuthWrapper from "./AuthRoutes";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateWrapper />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/settings" exact element={<Settings />} />
        </Route>
        <Route element={<AuthWrapper />}>
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
