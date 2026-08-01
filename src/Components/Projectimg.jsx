
import "./Projectimg.css";
import mapImage from "../assets/Project map.jpg";
import {
  FaCheckCircle,
   FaExpand,
  FaTimes
} from "react-icons/fa";
import { useState } from "react";



const Projectimg = () => {



const [fullScreen, setFullScreen] = useState(false);



  return (
  <section className="master-layout-section">

  {/* LEFT MAP */}

  <div className="master-map">

    <img src={mapImage} alt="Master Layout" />

    <div className="pin pin1">
      <span>🏡</span>
      <div className="tooltip">
        <h4>Residential Zone</h4>
        <p>Premium Residential Plots</p>
      </div>
    </div>

    <div className="pin pin2">
      <span>🏢</span>
      <div className="tooltip">
        <h4>Commercial Hub</h4>
        <p>Retail & Business Spaces</p>
      </div>
    </div>

    <div className="pin pin3">
      <span>🌳</span>
      <div className="tooltip">
        <h4>Central Park</h4>
        <p>Green Landscape Area</p>
      </div>
    </div>

    <div className="pin pin4">
      <span>🚪</span>
      <div className="tooltip">
        <h4>Main Gate</h4>
        <p>100 Ft Entrance Road</p>
      </div>
    </div>

    <div className="pin pin5">
      <span>🏡</span>
      <div className="tooltip">
        <h4>Historical Moment setup</h4>
        <p>Create a History of Shri Ram</p>
      </div>
    </div>

  </div>

  {/* RIGHT PANEL */}

  <div className="info-panel">

    <span className="panel-tag">
      OFFICIAL MASTER PLAN
    </span>

    <h2>
      Shri Ram Film City
    </h2>

    <p>
      A premium integrated township featuring residential plots,
      commercial spaces, landscaped parks and world-class
      infrastructure designed for future living.
    </p>

    <div className="feature-list">

      <div>
        <FaCheckCircle />
        Government Approved Layout
      </div>

      <div>
        <FaCheckCircle />
        100 Ft Entrance Boulevard
      </div>

      <div>
        <FaCheckCircle />
        Commercial Zone
      </div>

      <div>
        <FaCheckCircle />
        Landscaped Parks
      </div>

      <div>
        <FaCheckCircle />
        Gated Township
      </div>

      <div>
        <FaCheckCircle />
        Investment Opportunity
      </div>

    </div>

    <div className="road-strip">

      <div>
        <strong>100 Ft</strong>
        <span>Main Road</span>
      </div>

      <div>
        <strong>40 Ft</strong>
        <span>Sector Roads</span>
      </div>

      <div>
        <strong>30 Ft</strong>
        <span>Internal Roads</span>
      </div>

    </div>

    <div className="panel-btns">

      <button
  className="primary-btn"
  onClick={() => setFullScreen(true)}
>
  <FaExpand /> View Master Plan
</button>

      <button className="secondary-btn">
        Download Brochure
      </button>

    </div>

  </div>

  {fullScreen && (
  <div className="map-modal">

    <button
      className="close-map"
      onClick={() => setFullScreen(false)}
    >
      <FaTimes />
    </button>

    <img src={mapImage} alt="Master Plan" />

  </div>
)}

</section>
  );
}

export default Projectimg
