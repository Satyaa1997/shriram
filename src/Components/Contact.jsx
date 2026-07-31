
import "./Contact.css";
import heroImg from "../assets/about.jpg";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <img src={heroImg} alt="Contact Banner" />

        <div className="contact-overlay"></div>

        <div className="contact-hero-content">

          <span>GET IN TOUCH</span>

          <h1>
            Contact
            <em> Shri Ram Film City</em>
          </h1>

          <p>
            We'd love to hear from you. Contact our team for project
            information, pricing, investment opportunities and free
            site visit booking.
          </p>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact-section">

        <div className="contact-wrapper">

          {/* LEFT */}

          <div className="contact-info">

            <span className="section-tag">
              CONTACT DETAILS
            </span>

            <h2>
              Let's Start A
              <br />
              Conversation
            </h2>

            <p>
              Whether you're planning to invest or searching for your
              dream property, our experts are always ready to assist you.
            </p>

            <div className="info-card">

              <div className="info-icon">
                <FaPhoneAlt />
              </div>

              <div>

                <h3>Call Us</h3>

                <p>+91 9452000042</p>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FaEnvelope />
              </div>

              <div>

                <h3>Email</h3>

                <p>info@shriramfilmcity.com</p>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h3>Office Address</h3>

                <p>
                  Shri Ram Film City,
                  Ayodhya,
                  Uttar Pradesh
                </p>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FaClock />
              </div>

              <div>

                <h3>Working Hours</h3>

                <p>
                  Monday - Sunday <br />
                  9:00 AM - 6:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="contact-form-box">

            <div className="form-header">

              <span>ENQUIRY FORM</span>

              <h2>
                Book Your
                <br />
                Site Visit
              </h2>

              <p>
                Fill in your details and our representative will
                contact you shortly.
              </p>

            </div>

            <form className="contact-form">

              <div className="form-row">

                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                />

              </div>

              <div className="form-row">

                <input
                  type="email"
                  placeholder="Email Address"
                />

                <input
                  type="text"
                  placeholder="Subject"
                />

              </div>

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

              <button type="submit">

                Send Message

                <FaPaperPlane />

              </button>

            </form>

          </div>

        </div>

      </section>
            {/* ================= DIRECTOR SECTION ================= */}

      


     {/* ================= FAQ ================= */}

<section className="faq-section">

  <div className="faq-heading">

    <span className="section-tag">
      FAQ
    </span>

    <h2>
      Frequently Asked
      <br />
      Questions
    </h2>

    <p>
      Find answers to the most commonly asked questions
      about Shri Ram Film City.
    </p>

  </div>

  <div className="faq-container">

    <details open>

      <summary>
        How can I book a site visit?
      </summary>

      <p>
        Simply fill out the enquiry form or call our team.
        We will schedule your site visit at your preferred time.
      </p>

    </details>

    <details>

      <summary>
        Is bank loan assistance available?
      </summary>

      <p>
        Yes. We provide complete bank loan assistance and
        documentation support.
      </p>

    </details>

    <details>

      <summary>
        Is the project legally approved?
      </summary>

      <p>
        Yes, the project follows all required approvals
        and documentation procedures.
      </p>

    </details>

    <details>

      <summary>
        Why should I invest in Shri Ram Film City?
      </summary>

      <p>
        Premium location, modern infrastructure,
        future appreciation and excellent connectivity
        make it a smart investment.
      </p>

    </details>

  </div>

</section>

      {/* ================= GOOGLE MAP ================= */}

      <section className="map-section">

        <div className="map-heading">

          <span className="section-tag">
            OUR LOCATION
          </span>

          <h2>
            Visit Shri Ram
            <br />
            Film City
          </h2>

          <p>
            Visit our office or book a site visit to experience
            the future of premium township living.
          </p>

        </div>

        <div className="map-box">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Ayodhya&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </section>

{/* ================= QUICK CONTACT ================= */}

<section className="quick-contact">

  <div className="quick-card">

    <FaPhoneAlt className="quick-icon" />

    <h3>Call Us</h3>

    <p>+91 9452000042</p>

  </div>

  <div className="quick-card">

    <FaEnvelope className="quick-icon" />

    <h3>Email</h3>

    <p>info@shriramfilmcity.com</p>

  </div>

  <div className="quick-card">

    <FaMapMarkerAlt className="quick-icon" />

    <h3>Office</h3>

    <p>Ayodhya, Uttar Pradesh</p>

  </div>

</section>

      {/* ================= CTA ================= */}

      <section className="contact-cta">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <span>LET'S CONNECT</span>

          <h2>
            Ready To Invest
            <br />
            In Your Future?
          </h2>

          <p>
            Contact our team today and schedule your free
            site visit with Shri Ram Film City.
          </p>

          <div className="cta-buttons">

            <a
              href="tel:+919452000042"
              className="call-btn"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="/project"
              className="project-btn"
            >
              Explore Project
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;