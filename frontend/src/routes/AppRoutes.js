import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CustomerDashboard from "../pages/Dashboard/CustomerDashboard";
import AdminDashboard from "../pages/Dashboard/AdminPanel/AdminDashboard";
import AdminAllServices from "../pages/Dashboard/AdminPanel/AdminAllServices";  // Import the Admin All Services page
import AddService from "../pages/Dashboard/AdminPanel/AdminAddService"; // Add Service page for admin
import ViewReport from "../pages/Dashboard/AdminPanel/AdminReports"; // View Report page for admin
import FeedbackResponse from "../pages/Dashboard/AdminPanel/AdminFeedback"; // Feedback Response page for admin
import MechanicDashboard from "../pages/Dashboard/MechanicDashboard";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
<<<<<<< Updated upstream

const AppRoutes = () => (
    <Routes>
         <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/mechanic" element={<MechanicDashboard />} />
        <Route path="/services" element={<Services />} />
    </Routes>
=======
import ResetPasswordPage from "../pages/ResetPassword";
import ContactUsPage from "../pages/ContactUs";
import PageNotFound from "../pages/PageNotFound";
import AdminAllBookings from "../pages/Dashboard/AdminPanel/AdminAllBookings";
import AdminAllUsers from "../pages/Dashboard/AdminPanel/AdminAllUsers";


const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route exact path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<ContactUsPage />} />
    <Route path="/reset-password" element={<ResetPasswordPage />} />
    <Route path="/services" element={<Services />} />
    
    {/* Dashboard Routes */}
    <Route path="/dashboard/customer" element={<CustomerDashboard />} />
    <Route path="/dashboard/mechanic" element={<MechanicDashboard />} />
    
    {/* Admin Routes */}
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/admin/all-bookings" element={<AdminAllBookings />} />
    <Route path="/admin/all-services" element={<AdminAllServices />} />  {/* Admin All Services */}
    <Route path="/admin/all-users" element={<AdminAllUsers />} />  {/* Admin All Services */}
    <Route path="/admin/add-service" element={<AddService />} />  {/* Admin Add Service */}
    <Route path="/admin/view-report" element={<ViewReport />} />  {/* Admin View Report */}
    <Route path="/admin/feedback-response" element={<FeedbackResponse />} />  {/* Admin Feedback Response */}
    
    {/* Catch-all for 404 */}
    <Route path="*" element={<PageNotFound />} />
  </Routes>
>>>>>>> Stashed changes
);

export default AppRoutes;
