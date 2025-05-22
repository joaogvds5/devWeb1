import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../../pages/login";
import SignUp from "../../pages/signUp/index";
import Produtos from "../../pages/produtos/index";
import Dashboard from "../../pages/admin/dashboard";

export default function Routers() {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />  
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/products" element={<Produtos />} />
      <Route path="/dashboard" element={<Dashboard />} />


    </Routes>
  );
}
