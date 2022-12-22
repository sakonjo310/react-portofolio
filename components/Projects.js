import React from 'react'
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// const Example = () => {
//   const images = [
//       "../portofolio1.png",
//       "../portofolio2.png",
//       "https://github.com/sakonjo310/tweeter/blob/master/docs/largeScreen.png?raw=true",
//   ];

//   return (
//     <Slide>
//       <div className="each-slide-effect">
//           <div style={{ 'backgroundImage': `url(${images[0]})` }}>
//               <span></span>
//           </div>
//       </div>
//       <div className="each-slide-effect">
//           <div style={{ 'backgroundImage': `url(${images[1]})` }}>
//               <span></span>
//           </div>
//       </div>
//       <div className="each-slide-effect">
//           <div style={{ 'backgroundImage': `url(${images[2]})` }}>
//               <span></span>
//           </div>
//       </div>
//     </Slide>
//   );
// };

const Slide = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><p className='text-navy text-lg mb-5 text-center'>Ranker - Live Polling Full stack web application. jQuery and AJAX are used for front-end development, and Node.js and Express for back-end. Deployed on the cloud using Heroku. Group project.</p><a onClick={()=> window.open("https://lighthouse-midterm-ranker.herokuapp.com/", "_blank")}><img src="../portofolio1.png" /></a></SwiperSlide>
      <SwiperSlide><p className='text-navy text-lg mb-5 text-center'>Interview scheduling app - Built with React and Axios. Storybook was used for UI development and planning, and Jest and Cypress were used for unit/E2E testing. Deployed on the cloud using Netlify, CircleCI and Railway.</p><a onClick={()=> window.open("https://magenta-queijadas-2aef5a.netlify.app/", "_blank")}><img src="../portofolio2.png" /></a></SwiperSlide>
      <SwiperSlide><p className='text-navy text-lg mb-5 text-center'>Simplified single-page Twitter clone - Project focused on Front-end development build with HTML, CSS (SCSS), JS, jQuery and AJAX.</p><a onClick={() => window.open("https://github.com/sakonjo310/tweeter", "_blank")}><img src="https://github.com/sakonjo310/tweeter/blob/master/docs/largeScreen.png?raw=true" /></a></SwiperSlide>


    </Swiper>
  );
};

export default function Projects() {
  return (
    <div class='projects'>
      <div className='flex flex-col items-center text-center text-navy mb-10'>
        <h1 className='text-2xl md:text-4xl mb-5 '>Projects</h1>
      </div>
      <div class="slideshow">
        <Slide />
      </div>
    </div>
  )
}
