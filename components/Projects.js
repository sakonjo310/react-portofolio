import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image'

const Example = () => {
  const images = [
      "../portofolio1.png",
      "../portofolio2.png",
      "https://github.com/sakonjo310/tweeter/blob/master/docs/largeScreen.png?raw=true",
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[0]})` }}>
              <span></span>
          </div>
      </div>
      <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[1]})` }}>
              <span></span>
          </div>
      </div>
      <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[2]})` }}>
              <span></span>
          </div>
      </div>
    </Slide>
  );
};

export default function Projects() {
  return (
    <div class='projects'>
      <div className='flex flex-col items-center text-center text-navy mb-10'>
        <h1 className='text-2xl md:text-4xl mb-5 '>Projects</h1>
      </div>
      <div class="slideshow">
        <Example />
      </div>
    </div>
  )
}
