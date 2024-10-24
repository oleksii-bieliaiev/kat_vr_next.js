"use client"

import React, { useState } from 'react';
import Video from './Video';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoVisible, setVideoVisible] = useState(false);

  const toggleVideo = () => {
    setVideoVisible(prev => !prev);
  };
  const images = [
    '/images/About_image1.jpg',
    '/images/About_image1.jpg',
    '/images/About_image1.jpg',
    '/images/About_image1.jpg',
    '/images/About_image1.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <section id='about' className='relative flex flex-col justify-center lg:min-h-[103vh] md:min-h-[150vh] sm:min-h-[177vh] bg-gradient-to-r from-[#191536] to-[#000000] lg:pr-[110px] lg:pl-[110px] md:pr-[34px] md:pl-[34px] lg:pb-[130px] lg:pt-[130px] md:pb-[70px] md:pt-[70px] sm:pt-[50px] sm:pb-[50px] max-sm:pt-[50px] max-sm:pb-[50px]'>
      <div className='grid lg:grid-cols-12 md:grid-cols-6 md:gap-5 sm:grid-cols-2 max-sm:grid-cols-2 max-sm:max-w-[320px] sm:w-[320px] md:w-auto md:mx-0 sm:mx-auto max-sm:w-[320px] max-sm:mx-auto md:pr-0 md:pl-0 sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px]'>
        <div className='lg:col-start-3 lg:col-end-7 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 lg:mt-0 2xl:pt-0 max-sm:mt-[3rem] md:mt-0 sm:mt-[3rem]'>
          <div className='relative overflow-hidden'>
            <div
              className='flex transition-transform duration-500'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Slide ${index + 1}`} className='w-full md:h-[250px] sm:h-[189px] max-sm:h-[189px] flex-shrink-0' />
              ))}
            </div>
          </div>
        </div>

        <div className='md:col-start-1 md:col-end-1 lg:col-start-3 lg:col-end-3 flex items-start justify-start lg:mt-1 md:mt-0'>
          <button onClick={prevSlide} className='relative cursor-pointer text-white hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[0.5px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            Previous
          </button>
        </div>

        <div className='md:col-start-2 md:col-end-2 lg:col-start-4 lg:col-end-5 flex items-start justify-start lg:mt-1 md:mt-0'>
          <button onClick={nextSlide} className='relative text-white cursor-pointer hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[0.5px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            Next
          </button>
        </div>

        <div className='md:col-start-4 md:col-span-3 lg:col-start-9 lg:col-end-12 2xl:pt-[14rem] max-sm:col-start-1 max-sm:col-span-2 sm:col-start-1 sm:col-span-2'>
          <img
            src="/images/About_title.svg"
            alt="Gadgets"
            className='absolute lg:top-[8.2rem] md:top-[4.2rem] grid md:w-[205px] sm:w-[180px] max-sm:w-[180px] md:h-[25px] sm:top-[3rem] max-sm:top-[3rem]'
          />
          <p className='text-[#929292] grid absolute mt-8 lg:top-[9.5rem] md:top-[5.5rem] max-w-[332px] md:max-w-[332px] sm:max-w-[255px] max-sm:max-w-[255px] max-sm:max-h-[176px] sm:top-[19rem]  max-sm:top-[19rem] sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2'>KAT loco is a foot-based VR locomotion system that gives complete physical control over lower-body actions, allowing you to freely walk, run, and carry out just any other movement in virtual reality.
          </p>
          <div
            className='w-[236px] h-[48px] object-fit absolute cursor-pointer
                    lg:top-[20.5rem] sm:top-[33rem] max-sm:top-[33rem] md:top-[17rem] translate-x-[-15%] 
                    bg-[url(/images/Default_play.svg)] hover:bg-[url(/images/Button_video_hover.svg)] transition-all duration-300 bg-no-repeat bg-center bg-contain'
            onClick={toggleVideo}
          />
        </div>
        
        <div className='md:col-start-1 md:col-span-4 lg:col-start-1 2xl:col-start-2 lg:col-end-6 2xl:col-end-6 relative 2xl:mt-[5rem] lg:mt-[12rem] md:mt-[7rem] sm:mt-[19rem] max-sm:mt-[19rem] sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2'>
          <p className='text-[#05C2DF] text-sm'>Hello,</p>
          <img
            src="/images/NICE_TO.svg"
            alt="Gadgets"
            className='mt-2 md:w-[205px] max-sm:w-[180px] md:h-[25px]'
          />
          <p className='text-[#929292] mt-5'>
            KAT VR is an independent company dedicated to the research, development, and sales of VR Locomotion products and solutions. Founded in 2013, we have quickly grown to become one of the world’s leading professional suppliers of VR games’ & simulations’ equipment
          </p>
        </div>
        <div className='lg:block md:hidden sm:hidden max-sm:hidden 2xl:col-start-7 lg:col-start-8 lg:col-span-6 relative ml-6 lg:mb-0 2xl:mt-0 lg:mt-[8rem]'>
          <img
            src="/images/About_us.svg"
            alt="Gadgets"
            className='mt-2 lg:h-[302px] 2xl:h-[350px] '
          />
        </div>
        <div className='lg:hidden md:block sm:hidden md:col-start-5 md:col-span-2 relative ml-6 max-sm:hidden'>
          <img
            src="/images/About_small.svg"
            alt="Gadgets"
            className='mt-20 md:h-[256px] md:w-[232px]'
          />
        </div>

      </div>

      {isVideoVisible && <Video onClose={toggleVideo} />}
    </section>
  );
};

export default About;
