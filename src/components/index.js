import React from "react";
// react router
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Home";
import Navbar from "./Navbar";
import AdminLogin from "./admin/AdminLogin";
import UserPage from "./user/UserPage";

const index = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/UserPage" element={<UserPage />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default index;
