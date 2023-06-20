import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "@screens";
import { Login, Signup } from "@screens";
// import Login from '../pages/Login/Login'

import PrivateWrapper from "./PrivateRoutes";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateWrapper />}>
          <Route path="/" exact element={<Home />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
