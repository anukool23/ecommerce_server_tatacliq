import { Link, Routes, Route } from "react-router-dom";
import { Navigate } from "react";
import Home from "../Home/Home/Home";
import React from "react";
import UserAuth from "../LoginSignupPage/Components/UserAuth/UserAuth";
import MyAccount from "../LoginSignupPage/Components/MyAccount/MyAccount";
import Cart from "../Cart_and_Payment/Component/Pages/Cart";
import ProductAll from "../ProductSection/ProductAll";
import ProductDetail from "../ProductSection/ProductDetail";
import Success from "../Cart_and_Payment/Success/Success";
import Signup from "../LoginSignupPage/Components/Signup/Signup";

function AllRoutes() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/authenticate" element={<UserAuth />}></Route>
        <Route path="/myaccount" element={<MyAccount />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:category" element={<ProductAll />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
