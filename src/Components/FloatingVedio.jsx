import React, { useState, useEffect, useRef } from "react";
import {
  FaVolumeUp,
  FaVolumeMute,
  FaTimes,
} from "react-icons/fa";
import "./Floatingvedio.css";
import heroVideo from "../assets/video.mp4";

function FloatingVedio() {
   const heroRef = useRef(null);

  const videoRef = useRef(null);

  const [hideContent, setHideContent] = useState(false);

  const [isMuted, setIsMuted] = useState(true);

  const [showMiniPlayer, setShowMiniPlayer] = useState(false);

  const [closeMiniPlayer, setCloseMiniPlayer] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {

      setHideContent(true);

    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (!entry.isIntersecting) {

          setShowMiniPlayer(true);

        } else {

          setShowMiniPlayer(false);

        }

      },

      {
        threshold: 0.25,
      }

    );

    if (heroRef.current) {

      observer.observe(heroRef.current);

    }

    return () => observer.disconnect();

  }, []);

  const toggleMute = () => {

    if (videoRef.current) {

      videoRef.current.muted = !isMuted;

    }

    setIsMuted(!isMuted);

  };

  return (
    <>

      <section ref={heroRef} className="hero">

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

        <button
          className="sound-btn"
          onClick={toggleMute}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        <div className="hero-overlay"></div>

        <div
          className={`hero-content ${
            hideContent ? "hide-content" : ""
          }`}
        >

          <span>Premium Township</span>

          <h1>Shri Ram Film City</h1>

          <p>
            Experience luxury living surrounded by
            nature, world-class amenities and
            thoughtfully planned spaces.
          </p>

        </div>

      </section>

      {showMiniPlayer && !closeMiniPlayer && (

        <div className="floating-player">

          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
          >
            <source
              src={heroVideo}
              type="video/mp4"
            />
          </video>

          <button
            className="floating-close"
            onClick={() =>
              setCloseMiniPlayer(true)
            }
          >
            <FaTimes />
          </button>

          <button
            className="floating-sound"
            onClick={() =>
              setIsMuted(!isMuted)
            }
          >
            {isMuted ? (
              <FaVolumeMute />
            ) : (
              <FaVolumeUp />
            )}
          </button>

        </div>

      )}

    </>
  );
}

export default FloatingVedio
