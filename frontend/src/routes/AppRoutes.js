import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CustomerDashboard from "../pages/Dashboard/CustomerDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import MechanicDashboard from "../pages/Dashboard/MechanicDashboard";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";

const AppRoutes = () => (
    <Routes>
         <Route exact path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/mechanic" element={<MechanicDashboard />} />
        <Route path="/services" element={<Services />} />
    </Routes>
);

export default AppRoutes;
