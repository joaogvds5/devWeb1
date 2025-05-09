import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../../pages/login";
import SignUp from "../../pages/signUp/index";
import Produtos from "../../pages/produtos/index";

export default function Routers() {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />  
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/products" element={<Produtos />} />

    </Routes>
  );
}
