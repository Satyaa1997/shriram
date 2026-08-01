import React, { useEffect, useRef, useState } from "react";
import "./FloatingVedio.css";
import heroVideo from "../assets/video.mp4";

import {
    FaVolumeMute,
    FaVolumeUp,
    FaPlay,
    FaPause,
} from "react-icons/fa";

function FloatingVedio() {
    const heroRef = useRef(null);
    const heroVideoRef = useRef(null);
   

    const [showMini, setShowMini] = useState(false);
    
    const [heroMuted, setHeroMuted] = useState(true);
  
    const [heroPlaying, setHeroPlaying] = useState(true);
  

    const toggleHeroPlay = () => {
        if (!heroVideoRef.current) return;

        if (heroPlaying) {
            heroVideoRef.current.pause();
        } else {
            heroVideoRef.current.play();
        }

        setHeroPlaying(!heroPlaying);
    };



    // Hide hero content after 5 sec
    const [hideContent, setHideContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHideContent(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);




    // Show Mini Player on Scroll
    // Show Mini Player on Scroll
    useEffect(() => {

        const handleScroll = () => {

            if (closed) return;

            if (!heroRef.current) return;


            const rect = heroRef.current.getBoundingClientRect();


            // Mobile aur Desktop trigger
            const triggerPoint =
                window.innerWidth <= 576 ? 80 : 150;


            if (rect.bottom <= triggerPoint) {

                setShowMini(true);

            } else {

                setShowMini(false);

            }

        };


        window.addEventListener("scroll", handleScroll);


        handleScroll();


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };


    }, [closed]);




    // Mute / Unmute
    const toggleHeroMute = () => {
        const value = !heroMuted;

        setHeroMuted(value);

        if (heroVideoRef.current) {
            heroVideoRef.current.muted = value;
        }
    };


   

    return (
        <>
            {/* HERO VIDEO */}

            <section
                ref={heroRef}
                className={`hero ${showMini ? "hero-hide" : ""}`}
            >

                <video
                    ref={heroVideoRef}
                    className="hero-video"
                    autoPlay
                    loop
                    muted={heroMuted}
                    playsInline
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                <div className="hero-overlay"></div>

                <div
                    className={`hero-content ${hideContent ? "hide-content" : ""
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

                <button
                    className="sound-btn"
                    onClick={toggleHeroMute} >
                    {heroMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <button
                    className="play-btn"
                    onClick={toggleHeroPlay}
                >
                    {heroPlaying ? <FaPause /> : <FaPlay />}
                </button>

            </section>

        </>
    );
}

export default FloatingVedio;