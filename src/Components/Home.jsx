import "./home.css";
import { useNavigate } from "react-router-dom";
import Aminities from "./Aminities";
import township from "../assets/township.jpg";
import green from "../assets/img6.jpg";
import road from "../assets/road.jpg";
import security from "../assets/security.jpg";
import investment from "../assets/return.jpg";
import location from "../assets/map.png";
import FloatingVedio from "./FloatingVedio";
import directorImg from "../assets/Director2.png"
import Testimonial from "./Testimonial";
import Projectimg from "./Projectimg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <FloatingVedio />

      <Aminities />

      <section className="luxury-section">

        <div className="luxury-container">


          <div className="luxury-left">

            <span>
              WHY SHRI RAM FILM CITY
            </span>

            <h2>
              A Lifestyle Beyond
              <br />
              Ordinary Living
            </h2>

            <p>
            Shri Ram Film City is a thoughtfully planned township that combines modern infrastructure, premium amenities, lush green landscapes, and a peaceful environment to create an exceptional living experience. Designed with a vision for the future, it offers wide roads, well-planned residential plots, reliable utilities, and a secure gated community. Whether you are looking for your dream home or a smart investment opportunity, the township provides the perfect balance of comfort, convenience, luxury, and long-term value. With excellent connectivity, world-class facilities, and a rapidly developing location, Shri Ram Film City is an ideal destination for families, professionals, and investors seeking a brighter and more prosperous future.
            </p>


            <button onClick={() => navigate("/about")}>
             Explore More →
            </button>


          </div>



          <div className="luxury-right">


            <div className="feature-item">

              <div className="feature-number">
                01
              </div>

              <div>
                <h3>
                  Premium Location
                </h3>

                <p>
                  Strategically located with excellent
                  connectivity to major cities and highways.
                </p>
              </div>

            </div>



            <div className="feature-item">

              <div className="feature-number">
                02
              </div>

              <div>
                <h3>
                  Future Growth Opportunity
                </h3>

                <p>
                  Smart investment destination with
                  high appreciation potential.
                </p>
              </div>

            </div>




            <div className="feature-item">

              <div className="feature-number">
                03
              </div>

              <div>
                <h3>
                  Modern Infrastructure
                </h3>

                <p>
                  Wide roads, green spaces and planned
                  development for comfortable living.
                </p>
              </div>

            </div>




            <div className="feature-item">

              <div className="feature-number">
                04
              </div>

              <div>
                <h3>
                  Secure Community
                </h3>

                <p>
                  Gated township with advanced security
                  and family-friendly environment.
                </p>
              </div>

            </div>


            <div className="feature-item">

              <div className="feature-number">
                05
              </div>

              <div>
                <h3>
                  Future-Ready Development
                </h3>

                <p>
                  A next-generation township concept designed to
                  meet modern lifestyle needs and future expectations.
                </p>
              </div>

            </div>




          </div>


        </div>


      </section>

      {/* Director Section */}
      <section className="director-section">

        <div className="director-left">

          <span className="director-label">
            Managing Director
          </span>

          <h5>RAFTAAR FILM CITY LIMITED</h5>

          <h2>
            Mr. <span>J.D Verma</span>
          </h2>

          <h3>
            Architect Behind India's Next Global Cinema Destination
          </h3>

          <p>
            Mr. J.D. Verma is a visionary entrepreneur committed to
            developing Raftaar Film City into a world-class destination
            that blends entertainment, tourism and modern infrastructure.
          </p>

          <div className="director-boxes">

            <div className="box">
              <h2>1000+</h2>
              <p>Acres Township</p>
            </div>

            <div className="box">
              <h2>5000+</h2>
              <p>Investors & Families</p>
            </div>

          </div>

        </div>

        <div className="director-right">

          <img src={directorImg} alt="Director" />



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
      
      <Testimonial />

      <Projectimg />

    </>
  );
};


export default Home;


