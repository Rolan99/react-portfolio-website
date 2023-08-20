import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

import "./testimonials.css";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Ahmed",
    subtitle: "Product designer",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "Ahmed",
    subtitle: "Product designer",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonials = () => {
  return (
    <section className='testimonials container section'>
      <h2 className='section__title'>Clients & Reviews</h2>
      <Swiper
        className='testimonials__container grid'
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className='testimonials__item' key={id}>
              <div className='thumd'>
                <img src={image} alt='testimonials' />
              </div>
              <h3 className='testimonials__title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className='comment'>{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
