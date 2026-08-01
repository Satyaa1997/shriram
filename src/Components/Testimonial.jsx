import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./Testimonial.css"

import client1 from "../assets/client1.jfif";
import client2 from "../assets/client2.avif";
import client3 from "../assets/client3.jfif";
import client4 from "../assets/client1.jfif";
import client5 from "../assets/client3.jfif";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Investor",
    image: client1,
    review:
      "Shri Ram Film City is one of the best investment projects I have seen. Excellent location and professional team."
  },
  {
    name: "Priya Verma",
    role: "Home Buyer",
    image: client2,
    review:
      "Amazing planning, green environment and premium amenities. I'm happy with my investment."
  },
  {
    name: "Amit Singh",
    role: "Business Owner",
    image: client3,
    review:
      "Highly recommended. The staff was supportive and the township planning is outstanding."
  },
  {
    name: "Sneha Gupta",
    role: "Customer",
    image: client4,
    review:
      "Very transparent process and beautiful township. Looking forward to future development."
  },
  {
    name: "Vikas Mishra",
    role: "Investor",
    image: client5,
    review:
      "Excellent connectivity and huge appreciation potential. Great investment opportunity."
  }
];


const Testimonial = () => {
  return (
    <section className="testimonial-section">

      <span className="sub-title">
        TESTIMONIALS
      </span>

      <h2>
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }}
      >
        {testimonials.map((item, index) => (

          <SwiperSlide key={index}>

            <div className="testimonial-card">

              <img src={item.image} alt={item.name} />

              <p>
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </div>

          </SwiperSlide>

        ))}
      </Swiper>

    </section>
  );
}

export default Testimonial
