import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Experiences from "./pages/Experiences.jsx";
import ExperienceDetails from "./pages/ExperienceDetails.jsx";
import BookExperience from "./pages/BookExperience.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Guides from "./pages/Guides.jsx";
import Reviews from "./pages/Reviews.jsx";
import UserProfile from "./pages/UserProfile.jsx";

import HostDashboard from "./pages/HostDashboard.jsx";
import AddExperience from "./pages/AddExperience.jsx";
import ManageExperiences from "./pages/ManageExperiences.jsx";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/:id" element={<ExperienceDetails />} />
          <Route path="/book/:id" element={<BookExperience />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/user" element={<UserProfile />} />

          <Route path="/host" element={<HostDashboard />} />
          <Route path="/host/add" element={<AddExperience />} />
          <Route path="/host/manage" element={<ManageExperiences />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
