"use client";
import React from "react";

// import Swiper for loading data in carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Ticket from "../Card/Ticket";
import ticketContent from "../Data/ticketDetails";

function TicketSlider() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      rewind={true}
      spaceBetween={20}
      // Responsive
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: -30,
        },
        1140: {
          slidesPerView: 3,
          spaceBetween: -50,
        },
        1340: {
          slidesPerView: 3,
          spaceBetween: -80,
        },
        
        1385: {
          slidesPerView: 3,
          spaceBetween: -110,
        },
        1540: {
          slidesPerView: 4,
          spaceBetween: -200,
        },
       
        
      }}>

      {/* Load content as per the data length*/}
      {ticketContent.map((item) => (
        <SwiperSlide key={item.id} >
          <Ticket
            img={item.img}
            title={item.title}
            date={item.date}
            day={item.day}
            time={item.time}
            venue={item.venue}
            buttonDetail={item.button}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default TicketSlider;