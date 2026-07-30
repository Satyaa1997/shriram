
import "./Project.css";

import projectImage from "../assets/img6.jpg";
import masterPlan from "../assets/img14.jpg";
import floorPlan from "../assets/urban2.jpg";
import master2 from "../assets/urban2.jpg"
import master3 from "../assets/logo.png"

const Project = () => {
  return (
    <main className="project-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="project-hero">

        <div className="project-hero-overlay"></div>

        <div className="project-hero-content">

          <span className="project-label">
            PREMIUM TOWNSHIP
          </span>

          <h1>
            Shri Ram
            <br />
            <strong>Film City</strong>
          </h1>

          <p>
            A Landmark Destination for Luxury Living
            <br className="desktop-break" />
            & Smart Investment in Ayodhya
          </p>

          <a href="#project-about" className="project-hero-btn">
            Explore Project
            <span>↗</span>
          </a>

        </div>

        <div className="hero-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* =====================================================
          ABOUT PROJECT
      ===================================================== */}

      <section className="project-about" id="project-about">

        <div className="project-about-container">

          <div className="project-about-image">

            <div className="project-image-frame"></div>

            <img
              src={projectImage}
              alt="Shri Ram Film City"
            />

            <div className="project-image-badge">
              <span>
                Premium
                <br />
                Township
              </span>
            </div>

          </div>


          <div className="project-about-content">

            <span className="project-section-label">
              ABOUT PROJECT
            </span>

            <h2>
              Experience Modern
              <br />
              Living <em>With Nature</em>
            </h2>

            <p>
              Shri Ram Film City is a thoughtfully planned township
              that combines premium residential spaces, commercial
              opportunities and world-class infrastructure.
            </p>

            <p>
              Located near Ayodhya, it offers excellent connectivity,
              green surroundings and a secure investment for families
              and investors alike.
            </p>


            <div className="project-features">

              <div className="project-feature">
                <span>✓</span>
                <p>Prime Location Near Ayodhya</p>
              </div>

              <div className="project-feature">
                <span>✓</span>
                <p>Gated Township</p>
              </div>

              <div className="project-feature">
                <span>✓</span>
                <p>Wide Roads & Green Spaces</p>
              </div>

              <div className="project-feature">
                <span>✓</span>
                <p>Commercial & Residential Development</p>
              </div>

              <div className="project-feature">
                <span>✓</span>
                <p>Excellent Investment Opportunity</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="project-highlights">

        <div className="project-highlights-overlay"></div>

        <div className="project-highlights-container">

          <div className="project-highlight">

            <strong>01</strong>

            <div>
              <h3>Prime Location</h3>
              <p>
                Strategically located near Ayodhya
                with excellent connectivity.
              </p>
            </div>

          </div>


          <div className="project-highlight">

            <strong>02</strong>

            <div>
              <h3>Modern Infrastructure</h3>
              <p>
                Thoughtfully designed roads,
                green spaces and development zones.
              </p>
            </div>

          </div>


          <div className="project-highlight">

            <strong>03</strong>

            <div>
              <h3>Smart Investment</h3>
              <p>
                A promising opportunity for families
                and long-term investors.
              </p>
            </div>

          </div>


          <div className="project-highlight">

            <strong>04</strong>

            <div>
              <h3>Future Ready</h3>
              <p>
                Designed around the future growth
                and development of Ayodhya.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MASTER PLAN
      ===================================================== */}

      <section className="master-plan">

        <div className="master-plan-heading">

          <span className="project-section-label">
            MASTER PLAN
          </span>

          <h2>
            Project <em>Layout</em>
          </h2>

          <p>
            A thoughtfully planned layout designed to provide
            comfortable living, easy accessibility and a
            well-connected community environment.
          </p>

        </div>


        <div className="master-plan-container">

          <div className="master-plan-image">

            <div className="master-plan-border"></div>

            <img
              src={master2}
              alt="Shri Ram Film City Master Plan"
            />

          </div>

          <div className="master-plan-content">

            <span>MASTER PLAN</span>

            <h3>
              Designed For
              <br />
              <em>Better Living</em>
            </h3>

            <p>
              Every part of the development is planned with
              accessibility, open spaces and modern lifestyle
              requirements in mind.
            </p>

            <div className="plan-points">

              <div>
                <span>01</span>
                <p>Residential Development</p>
              </div>

              <div>
                <span>02</span>
                <p>Commercial Opportunities</p>
              </div>

              <div>
                <span>03</span>
                <p>Wide Internal Roads</p>
              </div>

              <div>
                <span>04</span>
                <p>Green & Open Spaces</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONNECTIVITY
      ===================================================== */}

     
<section className="connectivity">

  <div className="connectivity-container">

    {/* ================= LEFT IMAGE ================= */}

    <div className="connectivity-image">

      <div className="connectivity-image-frame"></div>

      <img
        src={master3}
        alt="Shri Ram Film City Location"
      />

      <div className="location-badge">
        <span>LOCATION</span>
        <strong>AYODHYA</strong>
      </div>

    </div>


    {/* ================= RIGHT CONTENT ================= */}

    <div className="connectivity-content">

      <div className="connectivity-heading">

        <span className="project-section-label">
          LOCATION ADVANTAGE
        </span>

        <h2>
          Excellent
          <br />
          <em>Connectivity</em>
        </h2>

        <p>
          Shri Ram Film City is strategically positioned
          to provide convenient access to major destinations
          around Ayodhya.
        </p>

      </div>


      {/* ================= CONNECTIVITY BOXES ================= */}

      <div className="connectivity-list">

        <div className="connectivity-item">

          <span className="connectivity-number">
            01
          </span>

          <div>
            <h3>Ram Mandir</h3>
            <strong>30 Minutes</strong>
          </div>

          <span className="connectivity-arrow">
            ↗
          </span>

        </div>


        <div className="connectivity-item">

          <span className="connectivity-number">
            02
          </span>

          <div>
            <h3>Ayodhya Airport</h3>
            <strong>55 Minutes</strong>
          </div>

          <span className="connectivity-arrow">
            ↗
          </span>

        </div>


        <div className="connectivity-item">

          <span className="connectivity-number">
            03
          </span>

          <div>
            <h3>Railway Station</h3>
            <strong>30 Minutes</strong>
          </div>

          <span className="connectivity-arrow">
            ↗
          </span>

        </div>


        <div className="connectivity-item">

          <span className="connectivity-number">
            04
          </span>

          <div>
            <h3>NH-27</h3>
            <strong>5 Minutes</strong>
          </div>

          <span className="connectivity-arrow">
            ↗
          </span>

        </div>


        <div className="connectivity-item">

          <span className="connectivity-number">
            05
          </span>

          <div>
            <h3>Schools & Hospitals</h3>
            <strong>Nearby</strong>
          </div>

          <span className="connectivity-arrow">
            ↗
          </span>

        </div>


        <div className="connectivity-item">

          <span className="connectivity-number">
            06
          </span>

          <div>
            <h3>Shopping & Entertainment</h3>
            <strong>Zone Nearby</strong>
          </div>

          <span className="connectivity-arrow">
            ↗
          </span>

        </div>

      </div>

    </div>

  </div>

</section>




      {/* =====================================================
          FLOOR PLAN
      ===================================================== */}

      <section className="floor-plan">

        <div className="floor-plan-heading">

          <span className="project-section-label">
            FLOOR PLAN
          </span>

          <h2>
            Thoughtfully
            <br />
            <em>Planned Spaces</em>
          </h2>

          <p>
            Explore the planned spaces and layouts designed
            to provide comfort, functionality and modern living.
          </p>

        </div>


        <div className="floor-plan-container">

          <div className="floor-plan-image">

            <img
              src={floorPlan}
              alt="Shri Ram Film City Floor Plan"
            />

          </div>


          <div className="floor-plan-info">

            

            <h3>
              Designed Around
              <br />
              <em>Your Lifestyle</em>
            </h3>

            <p>
              Carefully planned spaces with practical layouts,
              comfortable movement and efficient use of space.
            </p>

            <div className="floor-info-list">

              <div>
                <span>✓</span>
                <p>Smart Space Planning</p>
              </div>

              <div>
                <span>✓</span>
                <p>Modern Layouts</p>
              </div>

              <div>
                <span>✓</span>
                <p>Comfortable Living Spaces</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="project-cta">

        <div className="project-cta-overlay"></div>

        <div className="project-cta-content">

          <span>
            YOUR FUTURE STARTS HERE
          </span>

          <h2>
            Ready To Visit
            <br />
            <em>Shri Ram Film City?</em>
          </h2>

          <p>
            Book your site visit today and explore
            Ayodhya's most promising township.
          </p>

          <a href="/contact" className="project-cta-btn">
            Book Site Visit
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
};

export default Project;
