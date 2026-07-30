
import "./Amenities2.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/facility.jpg";
import greenImg from "../assets/img6.jpg";
import roadImg from "../assets/urban3.webp";
import securityImg from "../assets/security.jpg";

import clubImg from "../assets/club.jpg";
import templeImg from "../assets/img14.jpg";
import commercialImg from "../assets/project4.jfif";
import waterImg from "../assets/water.jpg";

import {
  FaTree,
  FaRoad,
  FaShieldAlt,
  FaArrowRight,
  FaDumbbell,
  FaPlaceOfWorship,
  FaStore,
  FaWater
} from "react-icons/fa";


const Aminities2 = () => {

  return (

    <main className="amenities-page">

      {/* ================= HERO ================= */}

      <section className="amenities-hero">

        <img src={heroImg} alt="Amenities" />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span>LUXURY LIFESTYLE</span>

          <h1>
            World Class
            <br />
            <em>Amenities</em>
          </h1>

          <p>

            Experience thoughtfully designed facilities that combine
            comfort, security, recreation and a premium lifestyle
            at Shri Ram Film City.

          </p>

          <a href="#green" className="hero-btn">

            Explore Amenities

            <FaArrowRight />

          </a>

        </div>

      </section>

      {/* ================= GREEN LANDSCAPE ================= */}

      <section className="amenity-section" id="green">

        <div className="amenity-container">

          <div className="amenity-image">

            <img src={greenImg} alt="Green Landscape" />

          </div>

          <div className="amenity-content">

            <div className="icon-box">

              <FaTree />

            </div>

            <span>01 / GREEN LIVING</span>

            <h2>

              Beautiful
              <br />

              <em>Green Landscape</em>

            </h2>

            <p>

              Shri Ram Film City offers beautifully landscaped
              gardens, lush green parks and open spaces that create
              a peaceful environment for families.

            </p>

            <ul>

              <li>✔ Landscaped Gardens</li>

              <li>✔ Walking Track</li>

              <li>✔ Fresh Environment</li>

              <li>✔ Children's Open Area</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= WIDE ROADS ================= */}

      <section className="amenity-section dark reverse">
        <div className="blur-shape"></div>
        <div className="amenity-container">

          <div className="amenity-content">

            <div className="icon-box">

              <FaRoad />

            </div>

            <span>02 / CONNECTIVITY</span>

            <h2>

              Wide Internal
              <br />

              <em>Road Network</em>

            </h2>

            <p>

              Designed with spacious roads, proper drainage and
              modern street lighting for smooth transportation
              inside the township.

            </p>

            <ul>

              <li>✔ 40ft & 60ft Roads</li>

              <li>✔ LED Street Lights</li>

              <li>✔ Underground Drainage</li>

              <li>✔ Premium Infrastructure</li>

            </ul>

          </div>

          <div className="amenity-image">

            <img src={roadImg} alt="Roads" />

          </div>

        </div>

      </section>

      {/* ================= SECURITY ================= */}

      <section className="amenity-section">

        <div className="amenity-container">

          <div className="amenity-image">

            <img src={securityImg} alt="Security" />

          </div>

          <div className="amenity-content">

            <div className="icon-box">

              <FaShieldAlt />

            </div>

            <span>03 / SAFETY</span>

            <h2>

              Complete
              <br />

              <em>24×7 Security</em>

            </h2>

            <p>

              Enjoy a secure lifestyle with gated entry,
              CCTV surveillance and dedicated security
              personnel protecting the township.

            </p>

            <ul>

              <li>✔ Gated Community</li>

              <li>✔ CCTV Cameras</li>

              <li>✔ Professional Guards</li>

              <li>✔ Safe Family Environment</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= CLUB HOUSE ================= */}

      <section className="amenity-section dark reverse">
        <div className="blur-shape"></div>
        <div className="amenity-container">

          <div className="amenity-content">

            <div className="icon-box">
              <FaDumbbell />
            </div>

            <span>04 / FITNESS</span>

            <h2>
              Modern Club
              <br />
              <em>& Gym</em>
            </h2>

            <p>
              Enjoy a healthy lifestyle with a premium clubhouse,
              indoor recreation spaces and a fully equipped gym
              designed for every age group.
            </p>

            <ul>
              <li>✔ Modern Fitness Center</li>
              <li>✔ Indoor Games</li>
              <li>✔ Community Hall</li>
              <li>✔ Recreation Zone</li>
            </ul>

          </div>

          <div className="amenity-image">
            <img src={clubImg} alt="Club House" />
          </div>

        </div>

      </section>


      {/* ================= TEMPLE ================= */}

      <section className="amenity-section">

        <div className="amenity-container">

          <div className="amenity-image">
            <img src={templeImg} alt="Temple" />
          </div>

          <div className="amenity-content">

            <div className="icon-box">
              <FaPlaceOfWorship />
            </div>

            <span>05 / SPIRITUAL</span>

            <h2>
              Peaceful
              <br />
              <em>Temple</em>
            </h2>

            <p>
              A beautiful temple inside the township offers
              a peaceful environment for prayer, meditation
              and community celebrations.
            </p>

            <ul>
              <li>✔ Daily Worship</li>
              <li>✔ Peaceful Environment</li>
              <li>✔ Community Events</li>
              <li>✔ Spiritual Living</li>
            </ul>

          </div>

        </div>

      </section>


      {/* ================= COMMERCIAL ================= */}

      <section className="amenity-section dark reverse">
        <div className="blur-shape"></div>
        <div className="amenity-container">

          <div className="amenity-content">

            <div className="icon-box">
              <FaStore />
            </div>

            <span>06 / SHOPPING</span>

            <h2>
              Commercial
              <br />
              <em>Complex</em>
            </h2>

            <p>
              Dedicated commercial spaces provide shopping,
              dining and everyday convenience just a few
              steps away from your home.
            </p>

            <ul>
              <li>✔ Retail Shops</li>
              <li>✔ Restaurants</li>
              <li>✔ Daily Needs</li>
              <li>✔ Business Spaces</li>
            </ul>

          </div>

          <div className="amenity-image">
            <img src={commercialImg} alt="Commercial" />
          </div>

        </div>

      </section>


      {/* ================= WATER ================= */}

      <section className="amenity-section">

        <div className="amenity-container">

          <div className="amenity-image">
            <img src={waterImg} alt="Water Supply" />
          </div>

          <div className="amenity-content">

            <div className="icon-box">
              <FaWater />
            </div>

            <span>07 / INFRASTRUCTURE</span>

            <h2>
              Smart Water
              <br />
              <em>Management</em>
            </h2>

            <p>
              Reliable water supply, underground pipelines
              and an efficient drainage system ensure a
              comfortable lifestyle throughout the township.
            </p>

            <ul>
              <li>✔ 24×7 Water Supply</li>
              <li>✔ Underground Pipelines</li>
              <li>✔ Drainage System</li>
              <li>✔ Sustainable Infrastructure</li>
            </ul>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="amenities-cta">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <span>PREMIUM TOWNSHIP</span>

          <h2>
            Experience Every
            <br />
            <em>Luxury Amenity</em>
          </h2>

          <p>
            Discover thoughtfully designed infrastructure,
            world-class facilities and a lifestyle built for
            comfort, convenience and future growth.
          </p>

          <Link to="/contact" className="hero-btn">
            Book Site Visit
            <FaArrowRight />
          </Link>

        </div>

      </section>
    </main>

  );

};

export default Aminities2;