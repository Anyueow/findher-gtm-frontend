import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, {Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination,Autoplay]);

const TestimonialSection = () => {

  return (
    <div>
      <Container className="Testimonial-container my-5" style={{ overflowX: "hidden" }}>
            <Swiper
            className="testimonial_swiper_container"
              autoplay={{ delay: 3000,  disableOnInteraction: false, }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              spaceBetween={20}
              pagination={{ clickable: true }} 
              coverflowEffect={{
                rotate: 0,
                stretch: 100,
                depth: 100,
                modifier: 1,
              }}
              breakpoints={{
                600: {
                  slidesPerView: 1, 
                },
                601: {
                  slidesPerView: 3, 
                },
              }}
            >
              <SwiperSlide>
                  <TestimonialCard
                    testimonial='"FindHer helped me land my dream job"'
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe1"
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <TestimonialCard
                    testimonial='"FindHer helped me land my dream job"'
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe2"
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <TestimonialCard
                    testimonial='"FindHer helped me land my dream job"'
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe3"
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <TestimonialCard
                    testimonial='"FindHer helped me land my dream job"'
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe4"
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <TestimonialCard
                    testimonial='"FindHer helped me land my dream job"'
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe5"
                  />
              </SwiperSlide>
              {/* Add more testimonials as needed */}
            </Swiper>
      </Container>
    </div>
  );
};

// ... (rest of your code remains unchanged)

const TestimonialCard = ({
  testimonial,
  description,
  name,
}) => {
  return (
    <div className="testimonial-rectangle"
    style={{
        width: "101%", height: "48vh",
        textAlign: "left" 
    }}>
   <div className="card-body">
   <p className="card-text testimonial-name">{name}</p>
       <p className="card-text testimonial-sub" style={{ marginBottom: "8%" }}>{testimonial}</p>
       <p style={{ marginBottom: "3%" }} className="card-text testimonial-description">{description}</p>
   </div>
</div>
  );
};

export default TestimonialSection;
