import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* ===== Top Contact Bar ===== */}
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <span>
              <FaMapMarkerAlt className="icon" />
              Raksar Yuv Building, 5/71 Vikas Nagar, Lucknow - 226022
            </span>

            <span>
              <FaEnvelope className="icon" />
              shriramfilmcity@gmail.com
            </span>
          </div>

          <div className="topbar-right">
            <span>
              <FaPhoneAlt className="icon" />
              +91 9452000042
            </span>

            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown">

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <ul className="dropdown-menu">

              <li>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>

               <li>
                <NavLink
                  to="/company-overview"
                  onClick={() => setMenuOpen(false)}
                >
                  Company Overview
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-director"
                  onClick={() => setMenuOpen(false)}
                >
                  About Director
                </NavLink>
              </li>

            </ul>

          </li>

          <li>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Project
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/aminities2"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Amenities
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Gallary
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>

          
        </ul>


        <NavLink to="/contact" className="book-btn">
          Contact Now
        </NavLink>

        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

    </header>
  );
};

export default Navbar;

