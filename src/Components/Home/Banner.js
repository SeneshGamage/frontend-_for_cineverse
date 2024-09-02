import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Updated import path
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../App.css';
import { Movies } from "../Home/MovieData";

import img1 from '../Home/assests/twisters-movie-qr-1920x1080.jpg';
import img2 from '../Home/assests/Kalki-2898-AD.png';
import img3 from '../Home/assests/deadpool-wolverine-3840x2160-17749.jpg';

const films = [
  {
    src: img1,
    title: 'Film Title 1',
    description: 'This is a brief description of Film 1.',
  },
  {
    src: img2,
    title: 'Film Title 2',
    description: 'This is a brief description of Film 2.',
  },
  {
    src: img3,
    title: 'Film Title 3',
    description: 'This is a brief description of Film 3.',
  },
];

function createSlide(film) {
  return (
    <SwiperSlide key={film.src}>
      <div className="relative rounded overflow-hidden">
        <img src={film.src} alt={Movies.name} 
        className=" img w-full h-full object-cover"/>
        {/* Gradient Overlay */}
        <div className= "absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 "></div>
        {/* Optionally add title and description overlay */}
        {/* Title and description overlay */}
        <div className="absolute bottom-8 left-8 text-white z-20">
          <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
            {film.title}
            </h1>
        </div>
      </div>
    </SwiperSlide>
  );
}

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      speed={1000}
      navigation
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="w-full xl:h-96 bg-dry lg:h-64 h-48"
    >
      {films.map((film) => createSlide(film))}
    </Swiper>
  );
};

export default Banner;