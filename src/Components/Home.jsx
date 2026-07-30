import "./home.css";
import React, { useEffect, useState, useRef } from "react";
import heroVideo from "../assets/video.mp4";
import Footer from "./Footer";
import Aminities from "./Aminities";
import township from "../assets/township.jpg";
import green from "../assets/img6.jpg";
import road from "../assets/road.jpg";
import security from "../assets/security.jpg";
import investment from "../assets/return.jpg";
import location from "../assets/map.png";

const Home = () => {
  const [hideContent, setHideContent] = useState(false);
  const [countStart, setCountStart] = useState(false);

  const achievementRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideContent(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;

    setIsMuted(!isMuted);
  };

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        if (entries[0].isIntersecting) {
         setCountStart(true);
         observer.disconnect();
         }

      },
      {
        threshold: 0.4
      }
    );
    if (achievementRef.current) {

      observer.observe(achievementRef.current);

    }


    return () => {

      if (achievementRef.current) {

        observer.unobserve(achievementRef.current);

      }

    }


  }, []);
  return (
    <>
      <section className="hero">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted={isMuted}
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <button className="sound-btn" onClick={toggleMute}>
          {isMuted ? "🔇" : "🔊"}
        </button>

        <div className="hero-overlay"></div>

        <div className={`hero-content ${hideContent ? "hide-content" : ""}`}>
          <span>Premium Township</span>

          <h1>Shri Ram Film City</h1>

          <p>
            Experience luxury living surrounded by nature, world-class amenities
            and thoughtfully planned. spaces.
          </p>
        </div>
      </section>
      <Aminities />



      <section className="achievement-section" ref={achievementRef}>
        <div className="achievement-overlay"></div>

        <div className="achievement">
          <div className="achievement-heading">
            <span>WHY SHRI RAM FILM CITY</span>
            <h2>Future-Ready Living</h2>
            <p>
              A premium township designed with modern infrastructure, green
              spaces and world-class amenities.
            </p>
          </div>

          <div className="achievement-grid">
            <div className="achievement-card">
              <div className="number">
                {countStart && <Counter end={50} symbol="+" />}
              </div>
              <div className="card-content">
                <h3>Acres</h3>
                <p>Premium Township Spread Across a Vast Landscape.</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="number">
                {countStart && <Counter end={24} symbol="×7" />}
              </div>
              <div className="card-content">
                <h3>Security</h3>
                <p>Advanced Security with CCTV & Gated Community.</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="number">
                {countStart && <Counter end={100} symbol="%" />}
              </div>
              <div className="card-content">
                <h3>Green Zone</h3>
                <p>Beautiful Parks, Landscapes & Eco-Friendly Living.</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="number">
                {countStart && <Counter end={25} symbol="+" />}
              </div>
              <div className="card-content">
                <h3>Amenities</h3>
                <p>Club House, Gym, Temple, Shopping & More.</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="number">
                {countStart && <Counter end={1} symbol="st" />}
              </div>
              <div className="card-content">
                <h3>Film City</h3>
                <p>One of the Most Unique Township Concepts in the Region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="feature-section">

        <div className="feature-heading">

          <span>WHY SHRI RAM FILM CITY</span>

          <h2>
            What Makes Shri Ram Film City Special?
          </h2>

          <p>
            A thoughtfully planned township offering luxury,
            comfort, security and a better lifestyle.
          </p>

        </div>


        <div className="feature-grid">


          <div className="feature-card">

            <div className="feature-image">
              <img src={township} alt="Premium Township" />
            </div>

            <h3>
              Premium Township
            </h3>

            <p>
              Well planned residential development with
              modern infrastructure and premium lifestyle.
            </p>

          </div>



          <div className="feature-card">

            <div className="feature-image">
              <img src={green} alt="Green Environment" />
            </div>

            <h3>
              Green Environment
            </h3>

            <p>
              Beautiful gardens and eco-friendly surroundings
              for peaceful family living.
            </p>

          </div>



          <div className="feature-card">

            <div className="feature-image">
              <img src={road} alt="Wide Roads" />
            </div>

            <h3>
              Wide Roads
            </h3>

            <p>
              Spacious roads with proper planning and
              smooth connectivity.
            </p>

          </div>



          <div className="feature-card">

            <div className="feature-image">
              <img src={security} alt="24x7 Security" />
            </div>

            <h3>
              24×7 Security
            </h3>

            <p>
              Safe gated community with CCTV surveillance
              and security facilities.
            </p>

          </div>



          <div className="feature-card">

            <div className="feature-image">
              <img src={investment} alt="High Returns" />
            </div>

            <h3>
              High Returns
            </h3>

            <p>
              Smart investment opportunity with excellent
              future appreciation.
            </p>

          </div>



          <div className="feature-card">

            <div className="feature-image">
              <img src={location} alt="Prime Location" />
            </div>

            <h3>
              Prime Location
            </h3>

            <p>
              Excellent connectivity to cities and
              major highways.
            </p>

          </div>


        </div>


      </section>

      <Footer />
    </>
  );
};
const Counter = ({ end, symbol = "" }) => {

  const [number, setNumber] = useState(0);


  useEffect(() => {

    let start = 0;

    let speed = end / 80;


    const timer = setInterval(() => {

      start += Math.ceil(speed);


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

      {number}{symbol}

    </span>

  )

}

export default Home;



