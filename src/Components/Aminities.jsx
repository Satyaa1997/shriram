import React, { useEffect, useState } from "react";
import "./Aminities.css";

import img1 from "../assets/club.jpg";
import img2 from "../assets/img13.jpg";
import img3 from "../assets/kids.jpg";
import img4 from "../assets/img8.png";
import img5 from "../assets/security.jpg";
import img6 from "../assets/urban3.webp";

const slides = [
  {
    image: img1,
    title: "Premium Club House",
    heading: "Luxury Community Living",
    desc: "Experience a premium clubhouse with elegant interiors, indoor games, banquet facilities, fitness spaces, and social gathering areas designed for a modern lifestyle."
  },
  {
    image: img2,
    title: "Swimming Pool",
    heading: "Refresh & Relax",
    desc: "Enjoy a beautifully designed swimming pool with dedicated zones for adults and children, offering the perfect place to relax, exercise, and spend quality time with family."
  },
  {
    image: img3,
    title: "Children's Play Area",
    heading: "Safe & Happy Childhood",
    desc: "A vibrant and secure play zone equipped with modern recreational facilities where children can learn, play, and grow in a safe environment."
  },
  {
    image: img4,
    title: "Landscaped Gardens",
    heading: "Green & Peaceful Environment",
    desc: "Beautifully landscaped gardens, walking tracks, and open green spaces create a refreshing atmosphere for relaxation, morning walks, and family outings."
  },
  {
    image: img5,
    title: "24×7 Security",
    heading: "Complete Safety & Protection",
    desc: "A gated township equipped with CCTV surveillance, professional security personnel, and controlled entry points to ensure the safety of every resident."
  },
  {
    image: img6,
    title: "Prime Location",
    heading: "Excellent Connectivity",
    desc: "Strategically located with seamless connectivity to Ayodhya city, major highways, educational institutions, hospitals, shopping centers, and important landmarks."
  }
];

const Aminities = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) => (prev + 1) % slides.length);

    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="amenities">

      {/* ================= HEADING ================= */}

      <div className="heading">

        <span>WORLD CLASS AMENITIES</span>

        <h2>Enjoy a Modern Lifestyle</h2>

        <p>
          Thoughtfully planned amenities that provide comfort,
          convenience and security for every family.
        </p>

      </div>


      {/* ================= SLIDER ================= */}

      <div className="slider">

        {/* LEFT CONTENT */}

        <div className="left">

          <h4>
            {slides[current].title}
          </h4>

          <h2>
            {slides[current].heading}
          </h2>

          <p>
            {slides[current].desc}
          </p>

        </div>


        {/* RIGHT IMAGE */}

        <div className="right">

          <img
            src={slides[current].image}
            alt={slides[current].title}
          />

        </div>

      </div>


      {/* ================= DOTS ================= */}

      <div className="dots">

        {slides.map((_, index) => (

          <span
            key={index}
            className={
              current === index ? "active" : ""
            }
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </section>

  );
};

export default Aminities;