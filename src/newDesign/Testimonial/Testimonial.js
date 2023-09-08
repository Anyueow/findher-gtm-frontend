import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import pic from "./18.80328ac61c501e8b10f2.png";
import "./Testimonial.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, {Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination,Autoplay]);

const TestimonialSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerPadding: "100px", // Adjust the padding value as needed
//     // initialSlide: sliderIndex, // Start at the current slide index
//     // afterChange: (currentSlide) => {
//     //   setSliderIndex(currentSlide);
//     // },
//   };

  return (
    <div>
      <Container className="Testimonial-container my-5">
          <Row className="align-items-center mt-4" style={{ overflowX: "hidden" }}>
            <Swiper
             initialSlide={1}
              autoplay={{ delay: 3000 }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={false}
              loop={true}
              spaceBetween={20}
              pagination={{ clickable: true }} 
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
              }}
              breakpoints={{
                780: {
                  slidesPerView: 1, 
                },
                781: {
                  slidesPerView: 3, 
                },
              }}
              className="swiper_container"
            >
              <SwiperSlide>
                  <TestimonialCard
                    testimonial="'FindHer helped me land my dream job'"
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe1"
                    position="Marketing Manager"
                    image={pic}
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <TestimonialCard
                    testimonial="'FindHer helped me land my dream job'"
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe2"
                    position="Marketing Manager"
                    image={pic}
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <TestimonialCard
                    testimonial="'FindHer helped me land my dream job'"
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe3"
                    position="Marketing Manager"
                    image={pic}
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <TestimonialCard
                    testimonial="'FindHer helped me land my dream job'"
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe4"
                    position="Marketing Manager"
                    image={pic}
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <TestimonialCard
                    testimonial="'FindHer helped me land my dream job'"
                    description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                    name="Jane Doe5"
                    position="Marketing Manager"
                    image={pic}
                  />
              </SwiperSlide>
              {/* Add more testimonials as needed */}
            </Swiper>
          </Row>
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
    <div className="rectangle"
    style={{
        width: "100%", height: "48vh",
        paddingLeft: "7%",
        paddingRight: "7%",
        paddingTop: "20%",
        paddingBottom: "10%",
        textAlign: "left" 
    }}>
   <div className="card-body">
   <p className="card-text testimonial-name">{name}</p>
       <p className="card-text testimonial-sub" style={{ marginBottom: "8%" }}>{testimonial}</p>
       <p style={{ marginBottom: "3%" }} className="card-text testimonial-description">{description}</p>
       <Row className="align-items-center align no-gutter" style={{ marginTop: "8%" }}>
       </Row>
   </div>
</div>
  );
};

export default TestimonialSection;
