import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaUserTie,
  FaProjectDiagram,
  FaImages,
  FaPhoneAlt,
  FaThLarge
} from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);


  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      setAboutOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <nav ref={navRef} className="navbar">
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
              <FaHome />
              Home
            </NavLink>
          </li>
          <li className={`dropdown ${aboutOpen ? "open" : ""}`}>

            <button
              type="button"
              className="dropdown-toggle"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              <div className="dropdown-left">
                <FaInfoCircle />
                <span>About</span>
              </div>

              <span className="dropdown-arrow">
                {aboutOpen ? "▲" : "▼"}
              </span>
            </button>

            <ul className="dropdown-menu">

              <li>
                <NavLink
                  to="/about"
                  onClick={() => {
                    setMenuOpen(false);
                    setAboutOpen(false);
                  }}
                >
                  <FaInfoCircle />
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/company-overview"
                  onClick={() => {
                    setMenuOpen(false);
                    setAboutOpen(false);
                  }}
                >
                  <FaBuilding />
                  Company Overview
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-director"
                  onClick={() => {
                    setMenuOpen(false);
                    setAboutOpen(false);
                  }}
                >
                  <FaUserTie />
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
              <FaProjectDiagram />
              Project
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/aminities2"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              <FaThLarge />
              Amenities
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              <FaImages />
              Gallary
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              <FaPhoneAlt />
              Contact
            </NavLink>
          </li>


        </ul>


        <NavLink to="/contact" className="book-btn">
          Contact Now
        </NavLink>
        <div
          className="menu-btn"
          onClick={() => {
            setMenuOpen(prev => {
              const next = !prev;

              if (!next) {
                setAboutOpen(false);
              }

              return next;
            });
          }}
        >
          ☰
        </div>
      </nav>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => {
            setMenuOpen(false);
            setAboutOpen(false);
          }}
        />
      )}

    </header>
  );
};

export default Navbar;

