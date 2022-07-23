import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/lipa.jpeg';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonialls</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 classsName="client__name">Señorita Lipa</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            sint fuga harum incidunt maiores adipisci molestiae, velit quia
            porro, fugit placeat? Consectetur nihil, ipsa illum sunt cupiditate
            hic rerum aliquid.
          </small>
        </SwiperSlide>
        {/* fin de articulo */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 classsName="client__name">Señorita Lipa</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            sint fuga harum incidunt maiores adipisci molestiae, velit quia
            porro, fugit placeat? Consectetur nihil, ipsa illum sunt cupiditate
            hic rerum aliquid.
          </small>
        </SwiperSlide>
        {/* fin de articulo */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 classsName="client__name">Señorita Lipa</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            sint fuga harum incidunt maiores adipisci molestiae, velit quia
            porro, fugit placeat? Consectetur nihil, ipsa illum sunt cupiditate
            hic rerum aliquid.
          </small>
        </SwiperSlide>
        {/* fin de articulo */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 classsName="client__name">Señorita Lipa</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            sint fuga harum incidunt maiores adipisci molestiae, velit quia
            porro, fugit placeat? Consectetur nihil, ipsa illum sunt cupiditate
            hic rerum aliquid.
          </small>
        </SwiperSlide>
        {/* fin de articulo */}
      </Swiper>
    </section>
  );
};

export default Testimonials;
