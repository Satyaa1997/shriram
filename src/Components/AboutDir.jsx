import React from "react";
import "./AboutDir.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/dir1.png";
import directorImg from "../assets/dirt1.jpeg";

import {
  FaAward,
  FaLightbulb,
  FaGlobeAsia,
  FaQuoteLeft,
} from "react-icons/fa";

const AboutDir = () => {
  return (
    <main className="director-page">

      {/* ================= HERO ================= */}

      <section className="director-hero">

        <img src={heroImg} alt="About Director" />

        <div className="director-overlay"></div>

        <div className="director-hero-content">

          <span>ABOUT OUR DIRECTOR</span>

          <h1>
            Meet Our
            <br />
            <em>Visionary Leader</em>
          </h1>

          <p>
            Discover the inspiring journey of the visionary behind
            Shri Ram Film City, whose leadership is shaping a new
            era of culture, heritage and cinematic excellence.
          </p>

        </div>

      </section>

      {/* ================= DIRECTOR ================= */}

      <section className="director-intro">

        <div className="director-container">

          {/* Left */}

          <div className="director-image">

            <img
              src={directorImg}
              alt="Mr. J. D. Verma"
            />

          </div>

          {/* Right */}

          <div className="director-content">

            <span className="section-tag">
              MANAGING DIRECTOR
            </span>

            <h2>
              Mr. J. D. Verma
            </h2>

            <h4>
              Visionary Behind Shri Ram Film City
            </h4>

            <div className="director-quote">

              <FaQuoteLeft />

              <p>
                Leadership is the art of turning dreams into reality.
              </p>

            </div>

            <p>
              Mr. J. D. Verma is the visionary leader and Managing
              Director of Shri Ram Film City. His commitment to
              innovation, cultural preservation and excellence has
              transformed a remarkable vision into one of India's most
              ambitious cultural and cinematic destinations.
            </p>

            <p>
              With a mission to connect India's glorious heritage with
              modern development, he has dedicated himself to creating
              a project that inspires future generations while
              contributing to tourism, employment and sustainable
              growth.
            </p>

            <div className="director-highlights">

              <div className="highlight-card">

                <FaAward />

                <h3>Visionary Leader</h3>

              </div>

              <div className="highlight-card">

                <FaLightbulb />

                <h3>Innovative Thinker</h3>

              </div>

              <div className="highlight-card">

                <FaGlobeAsia />

                <h3>Global Perspective</h3>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* ================= VISION ================= */}

      <section className="vision-section">

        <div className="vision-heading">

          <span className="section-tag">
            OUR VISION
          </span>

          <h2>
            Building The Future
            <br />
            Through Heritage
          </h2>

          <p>
            Shri Ram Film City is more than a destination—it is a
            cultural movement dedicated to preserving India's rich
            heritage while embracing innovation, creativity and
            sustainable development.
          </p>

        </div>

        <div className="vision-grid">

          <div className="vision-card">

            <h3>01</h3>

            <h4>
              Cultural Excellence
            </h4>

            <p>
              Establish Ayodhya as India's leading cultural,
              spiritual and cinematic destination.
            </p>

          </div>

          <div className="vision-card">

            <h3>02</h3>

            <h4>
              Employment Generation
            </h4>

            <p>
              Create thousands of employment and business
              opportunities for youth and local communities.
            </p>

          </div>

          <div className="vision-card">

            <h3>03</h3>

            <h4>
              Global Recognition
            </h4>

            <p>
              Showcase India's traditions, Ramayana and cultural
              heritage on an international platform.
            </p>

          </div>

          <div className="vision-card">

            <h3>04</h3>

            <h4>
              Modern Infrastructure
            </h4>

            <p>
              Develop a world-class township with premium
              infrastructure, tourism and entertainment.
            </p>

          </div>

        </div>

      </section>

      {/* ================= LEADERSHIP ================= */}

      <section className="leadership-section">

        <div className="leadership-container">

          <div className="leadership-left">

            <span className="section-tag">
              LEADERSHIP PHILOSOPHY
            </span>

            <h2>
              Connecting Heritage
              <br />
              With The Future
            </h2>

            <p>
              Mr. J. D. Verma believes that true development is
              achieved when cultural values, innovation and modern
              technology work together to inspire generations.
            </p>

            <blockquote>
              "The legacy our ancestors left us must be connected
              with innovation and technology to become a source of
              inspiration for generations to come."
            </blockquote>

          </div>

          <div className="leadership-right">

            <div className="lead-card">

              <h3>Integrity</h3>

              <p>
                Building trust through transparency,
                commitment and ethical leadership.
              </p>

            </div>

            <div className="lead-card">

              <h3>Innovation</h3>

              <p>
                Creating unique experiences by combining
                culture with modern ideas.
              </p>

            </div>

            <div className="lead-card">

              <h3>Dedication</h3>

              <p>
                Delivering excellence with passion,
                discipline and continuous improvement.
              </p>

            </div>

            <div className="lead-card">

              <h3>Growth</h3>

              <p>
                Empowering communities through tourism,
                employment and sustainable development.
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* ================= ACHIEVEMENTS ================= */}

      <section className="achievement-section">

        <div className="achievement-heading">

          <span className="section-tag">
            KEY ACHIEVEMENTS
          </span>

          <h2>
            A Journey Of
            <br />
            Excellence
          </h2>

          <p>
            Every milestone reflects a commitment towards
            preserving India's cultural heritage while creating
            new opportunities for future generations.
          </p>

        </div>

        <div className="achievement-grid">

          <div className="achievement-card">

            <h3>01</h3>

            <h4>Visionary Leadership</h4>

            <p>
              Leading Shri Ram Film City with innovation,
              transparency and long-term vision.
            </p>

          </div>

          <div className="achievement-card">

            <h3>02</h3>

            <h4>Cultural Preservation</h4>

            <p>
              Promoting India's traditions, heritage and the
              timeless values of the Ramayana.
            </p>

          </div>

          <div className="achievement-card">

            <h3>03</h3>

            <h4>Employment Creation</h4>

            <p>
              Creating opportunities for youth through tourism,
              entertainment and infrastructure development.
            </p>

          </div>

          <div className="achievement-card">

            <h3>04</h3>

            <h4>Future Development</h4>

            <p>
              Building a world-class destination that inspires
              generations through innovation and culture.
            </p>

          </div>

        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="director-quote-section">

        <div className="quote-container">

          <span className="section-tag">
            GUIDING PRINCIPLE
          </span>

          <h2>
            "Connecting Heritage
            <br />
            With The Future"
          </h2>

          <p>
            The legacy inherited from our ancestors should be
            strengthened through innovation, education and
            technology so that future generations remain
            connected with India's glorious heritage.
          </p>

          <h4>
            — Mr. J. D. Verma
          </h4>

        </div>

      </section>

      {/* ================= CTA ================= */}

     

    </main>
  );
};

export default AboutDir;