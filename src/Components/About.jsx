import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import aboutMain from "../assets/about.jpg";
import aboutSecond from "../assets/about.jpg";
import aboutImg2 from "../assets/urban2.jpg"
const About = () => {

  const [countStart, setCountStart] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountStart(true);
          observer.disconnect(); // sirf ek baar animation chalegi
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span>WELCOME TO</span>

          <h1>
            Shri Ram <br />
            <strong>Film City</strong>
          </h1>

          <p>
            A visionary destination where modern living,
            entertainment and investment come together.
          </p>

          <a href="#about-intro" className="about-hero-btn">
            Discover More
            <span>↗</span>
          </a>
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="about-intro" id="about-intro">

        <div className="about-intro-container">

          <div className="about-intro-image">

            <div className="image-frame"></div>

            <img
              src={aboutMain}
              alt="Shri Ram Film City"
            />

            <div className="experience-box">
              <strong>10+</strong>
              <span>Years Of<br />Experience</span>
            </div>

          </div>


          <div className="about-intro-content">

            <span className="section-label">
              ABOUT US
            </span>

            <h2>
              Building Dreams,
              <br />
              Creating <em>Possibilities</em>
            </h2>

            <p>
              Welcome to Shri Ram Film City, a visionary project
              created to redefine modern living and smart investment.
              Designed with a perfect blend of lifestyle, infrastructure
              and future growth, our project offers an exceptional
              opportunity for families and investors.
            </p>

            <p>
              Backed by the experience of RAFTAR Real Estate Pvt. Ltd.,
              we are committed to delivering thoughtfully planned
              residential and land development projects with quality,
              transparency and customer satisfaction at the heart of
              everything we do.
            </p>

            <div className="about-signature">
              <span>Our Commitment</span>
              <strong>Quality • Trust • Growth</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="about-stats" ref={statsRef}>

        <div className="stats-overlay"></div>

        <div className="stats-container">

          <div className="stat-item">
            <strong>
              {countStart && <Counter end={10} symbol="+" />}
            </strong>
            <span>Years Experience</span>
          </div>

          <div className="stat-item">
            <strong>
              {countStart && <Counter end={25} symbol="+" />}
            </strong>
            <span>Projects Delivered</span>
          </div>

          <div className="stat-item">
            <strong>
              {countStart && <Counter end={1000} symbol="+" />}
            </strong>
            <span>Happy Customers</span>
          </div>

          <div className="stat-item">
            <strong>
              {countStart && <Counter end={100} symbol="%" />}
            </strong>
            <span>Commitment</span>
          </div>
        </div>

      </section>

      {/* ================= About Section ================= */}

<section className="about-company-section">

  <div className="about-company-left">

    <span className="about-company-badge">
      🏢 Raftaar Group Real Estate
    </span>

    <h2>
      <span>About</span> Raftaar Group
    </h2>

    <p>Our most extensive and renowned branch, RAFTAR Real Estate Pvt. Ltd., operates in the real estate sector. We have successfully completed numerous projects, including residential developments and land plotting projects. We provide a wide range of opportunities for our customers. Recently, we have launched a new project focused on both residential properties and land plotting, offering modern living solutions and excellent investment opportunities.</p>

    <h3>Our Story</h3>

    <p>RAFTAR Real Estate Pvt. Ltd. has been continuously working with you and across India for the past 10 years. We have worked tirelessly to turn our customers' dreams into reality. We have successfully completed around 10 residential and land plotting projects, and today our customers are fully satisfied with our marketing strategies and the facilities they desire. We have successfully served and satisfied thousands of people across India by providing them with trusted real estate solutions and better opportunities.</p>

    <div className="about-company-card">
      <h4>🚀 Why Choose Us?</h4>
      <p>RAFTAR is continuously working with its dedicated team to build strong relationships and connect with more and more customers. We are committed to expanding our reach and bringing valuable real estate opportunities to our clients. We are also introducing several new projects across the world for our Indian customers, providing them with trusted investment options and modern lifestyle solutions.</p>
    </div>

  </div>

  <div className="about-company-right">
    <img src={aboutImg2} alt="About" />
  </div>

</section>

      {/* ================= STORY ================= */}
      <section className="about-story">

        <div className="story-container">

          <div className="story-content">

            <span className="section-label">
              OUR STORY
            </span>

            <h2>
              Experience That
              <br />
              <em>Builds Trust</em>
            </h2>

            <p>
              For more than a decade, RAFTAR Real Estate Pvt. Ltd.
              has been working towards creating valuable opportunities
              in the real estate sector.
            </p>

            <p>
              From residential developments to land plotting projects,
              our journey has been driven by one simple principle —
              creating properties that offer lasting value to our
              customers.
            </p>

            <p>
              Shri Ram Film City is the next chapter of this journey,
              bringing together premium planning, modern infrastructure
              and a future-focused approach to real estate.
            </p>

            <a href="/contact" className="gold-btn">
              Talk To Us
              <span>→</span>
            </a>

          </div>


          <div className="story-image">

            <img
              src={aboutSecond}
              alt="Our Story"
            />

            <div className="story-card">
              <span>EST.</span>
              <strong>2014</strong>
              <small>Building a better future</small>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}
      <section className="about-why">

        <div className="why-container">

          <div className="why-heading">

            <span className="section-label">
              WHY CHOOSE US
            </span>

            <h2>
              More Than A Property,
              <br />
              It's A <em>Future</em>
            </h2>

          </div>


          <div className="why-list">

            <div className="why-item">
              <div className="why-icon">01</div>

              <div>
                <h3>Strategic Planning</h3>
                <p>
                  Carefully planned developments designed around
                  modern lifestyle and future requirements.
                </p>
              </div>
            </div>


            <div className="why-item">
              <div className="why-icon">02</div>

              <div>
                <h3>Prime Opportunity</h3>
                <p>
                  A promising destination offering potential for
                  residential living and long-term investment.
                </p>
              </div>
            </div>


            <div className="why-item">
              <div className="why-icon">03</div>

              <div>
                <h3>Trusted Experience</h3>
                <p>
                  Backed by years of experience in the real estate
                  industry and a customer-first approach.
                </p>
              </div>
            </div>


            <div className="why-item">
              <div className="why-icon">04</div>

              <div>
                <h3>Customer First</h3>
                <p>
                  We believe in transparent communication,
                  dependable service and lasting relationships.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="about-cta">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <span>YOUR FUTURE STARTS HERE</span>

          <h2>
            Be A Part Of
            <br />
            <em>Shri Ram Film City</em>
          </h2>

          <p>
            Explore a new opportunity for living, growth
            and investment.
          </p>

          <a href="/contact" className="cta-btn">
            Contact Us
            
          </a>

        </div>

      </section>

    </main>
  );

}
const Counter = ({ end, symbol = "" }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / 80);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setNumber(start);
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {number}
      {symbol}
    </span>
  );
};

export default About
