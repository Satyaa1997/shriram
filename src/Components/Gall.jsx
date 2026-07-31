import React, { useState } from "react";
import "./Gall.css";

import img1 from "../assets/about.jpg";
import img2 from "../assets/club.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img14.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/light.jpg";
import img8 from "../assets/img2.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img1,
  img3,
  img5,
  img7,
  img2,
  img4,
  img6,
  img8,
];

const Gall = () => {
 const [selectedImage, setSelectedImage] = useState(null);
  return (
      <section className="gallery-page">

      <div className="gallery-header">
        <h2>Our Gallery</h2>
        <p>Explore Shri Ram Film City</p>
      </div>

      <div className="gallery-grid">

        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={img}
              alt=""
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}

      </div>

      {selectedImage && (
        <div
          className="popup"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img src={selectedImage} alt="" />
          </div>
        </div>
      )}

    </section>
  )
}

export default Gall
