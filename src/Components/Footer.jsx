import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= ABOUT ================= */}

        <div className="footer-box footer-about">

          <img
            src={logo}
            alt="Shri Ram Film City"
            className="footer-logo"
          />

          <p>
            Welcome to Shri Ram Film City, a premium township project
            offering residential plots, commercial spaces and
            world-class amenities for modern living.
          </p>

          <Link to="/contact" className="footer-btn">
            Enquire Now <span>→</span>
          </Link>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <div className="footer-line"></div>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/project">Projects</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

          </ul>

        </div>


        {/* ================= CONTACT ================= */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <div className="footer-line"></div>

          <div className="contact-item">
            <span>📍</span>
            <p>
              Raftar Group Building 5/71,
              Vikas Nagar, Lucknow - 226022
            </p>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <p>
              <a href="tel:+919452000042">
                +91 9452000042
              </a>
            </p>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <p>
              <a href="tel:+919455000053">
                +91 9455000053
              </a>
            </p>
          </div>

          <div className="contact-item">
            <span>✉</span>
            <p>
              <a href="mailto:shriramfilmcity@gmail.com">
                shriramfilmcity@gmail.com
              </a>
            </p>
          </div>

        </div>


        {/* ================= PROJECT ================= */}

        <div className="footer-box">

          <h3>Shri Ram Film City</h3>

          <div className="footer-line"></div>

          <p>
            A thoughtfully planned township with modern
            infrastructure, premium amenities and excellent
            connectivity designed for a better lifestyle.
          </p>

          <div className="footer-social">

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="YouTube">
              ▶
            </a>

            <a
              href="https://wa.me/919452000042"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              W
            </a>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <p>
          © 2026 Shri Ram Film City | All Rights Reserved.
        </p>

        <div className="footer-bottom-links">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>

          <Link to="/terms-2">
            Design by :-<h4> AUCTECH IT SOLUTIONS PVT. LTD.</h4>
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

