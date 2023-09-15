import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./Testimonial.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

const TestimonialSection = () => {
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 1, delay: 2 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Container
        className="Testimonial-container my-5"
        style={{ overflowX: "hidden" }}
      >
        <Swiper
          className="testimonial_swiper_container"
          autoplay={{ delay: 1000, disableOnInteraction: false }}
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
              description="FindHer's commitment to diversity and inclusivity assured me that my potential would be recognized
              , leading me to an opportunity that truly aligns with my aspirations."
              name="Radhika S."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              testimonial='"The best career platform"'
              description="I was searching for a platform that truly understood the challenges women like me face in their careers.
              Their focus on my specific goals made all the difference."
              name="Hemangi G."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              testimonial='"FindHer made job search easy!"'
              description="As a working mom, finding the right job seemed overwhelming.
              But Findher's personalized matches and support made the process seamless. I'm so grateful!"
              name="Chaya R."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              testimonial='"Findher has been a game-changer."'
              description="It gave me insights I didn't even know I needed and connected me with a job that's a perfect fit. Highly recommend."
              name="Sneha M."
            />
          </SwiperSlide>

          {/* Add more testimonials as needed */}
        </Swiper>
      </Container>
    </motion.div>
  );
};

// ... (rest of your code remains unchanged)

const TestimonialCard = ({ testimonial, description, name }) => {
  return (
    <div
      className="testimonial-rectangle"
      style={{
        width: "101%",
        height: "48vh",
        textAlign: "left",
      }}
    >
      <div className="card-body">
        <p className="card-text testimonial-name">{name}</p>
        <p className="card-text testimonial-sub" style={{ marginBottom: "8%" }}>
          {testimonial}
        </p>
        <p
          style={{ marginBottom: "3%" }}
          className="card-text testimonial-description"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialSection;
