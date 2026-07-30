import React from 'react'
import "./navbar.css"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";


const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
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
  )
}

export default Navbar
