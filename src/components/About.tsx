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
    <section id='about' className='overflow-x-hidden relative flex flex-col justify-center lg:min-h-[103vh] md:min-h-[80vh] sm:min-h-[177vh] bg-gradient-to-r from-[#191536] to-[#000000] lg:pr-[110px] lg:pl-[110px] md:pr-[34px] md:pl-[34px] lg:pb-[130px] lg:pt-[130px] md:pb-[70px] md:pt-[70px] sm:pt-[40px] sm:pb-[50px] max-sm:pt-[40px] max-sm:pb-[50px]'>
      <div className='grid lg:grid-cols-12 md:grid-cols-6 lg:gap-1 md:gap-2 sm:grid-cols-2 max-sm:grid-cols-2 max-sm:max-w-[320px] sm:w-[320px] md:w-auto md:mx-0 sm:mx-auto max-sm:w-[320px] max-sm:mx-auto md:pr-0 md:pl-0 sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px]'>
        <div className='lg:col-start-3 lg:col-span-10 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 lg:mt-0 2xl:pt-0 max-sm:mt-[1rem] md:mt-0 sm:mt-[1rem]'>
          <div className='flex flex-col lg:flex-row md:flex-row items-start h-full'>
            <img
              src="/images/About_title.svg"
              alt="Gadgets"
              className='hidden md:hidden sm:block max-sm:block sm:w-[180px] max-sm:w-[180px] md:h-[25px] sm:mb-7 max-sm:mb-7 max-sm:mt-0'
            />
            {/* Left block */}
            <div className='relative overflow-hidden lg:h-full md:h-full 2xl:w-[80%] lg:w-1/2 md:w-1/2 2xl:mr-[30%] md:mr-[3%] lg:mr-[24%]'>
              <div
                className='flex transition-transform duration-500'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className='w-full 2xl:h-[290px] md:h-[260px] sm:h-[189px] max-sm:h-[189px] flex-shrink-0'
                  />
                ))}
              </div>
            </div>

            <div className='md:hidden sm:flex max-sm:flex justify-between mt-5'>
              <div className='md:hidden max-sm:flex items-start justify-start pr-6'>
                <button onClick={prevSlide} className='relative cursor-pointer text-white hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[0.5px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
                  Previous
                </button>
              </div>

              <div className='md:hidden max-sm:flex md:col-start-2 md:col-end-2 lg:col-start-4 lg:col-end-5 items-start justify-start lg:mt-1 md:mt-0'>
                <button onClick={nextSlide} className='relative text-white cursor-pointer hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[0.5px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
                  Next
                </button>
              </div>
            </div>

            {/* Right block */}
            <div className='2xl:w-[45%] lg:w-[40%] md:w-1/2 flex flex-col justify-between items-start lg:h-full md:h-full relative'>
              <img
                src="/images/About_title.svg"
                alt="Gadgets"
                className='md:block sm:hidden max-sm:hidden lg:top-[8.2rem] md:top-[4.2rem] 2xl:w-[285px] w-[205px] sm:w-[180px] max-sm:w-[180px] md:h-[25px]'
              />
              <p className='text-[#929292] mt-8 md:mt-5 lg:mt-6 max-w-[332px] md:max-w-[332px] sm:max-w-[255px] max-sm:max-w-[255px]'>
                KAT loco is a foot-based VR locomotion system that gives complete physical control over lower-body actions, allowing you to freely walk, run, and carry out just any other movement in virtual reality.
              </p>
              <div
                className='w-[176px] h-[48px] object-fit cursor-pointer mt-4 lg:mt-6 mr-auto
                   bg-[url(/images/Default_play.svg)] hover:bg-[url(/images/Button_video_hover.svg)]
                   transition-all duration-300 bg-no-repeat bg-center bg-contain'
                onClick={toggleVideo}
              />
            </div>

          </div>
        </div>

        <div className='sm:hidden max-sm:hidden md:col-start-1 md:col-end-1 lg:col-start-3 lg:col-end-3 md:flex items-start justify-start lg:mt-1 md:mt-0'>
          <button onClick={prevSlide} className='relative cursor-pointer text-white hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[0.5px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            Previous
          </button>
        </div>

        <div className='sm:hidden max-sm:hidden md:col-start-2 md:col-end-2 lg:col-start-4 lg:col-end-5 md:flex items-start justify-start lg:mt-1 md:mt-0'>
          <button onClick={nextSlide} className='relative text-white cursor-pointer hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[0.5px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            Next
          </button>
        </div>


        <div className='md:col-start-1 md:col-span-4 lg:col-start-1 2xl:col-start-1 lg:col-end-6 2xl:col-end-5 relative 2xl:mt-[14rem] lg:mt-[12rem] md:mt-[7rem] sm:mt-[3rem] max-sm:mt-[3rem] sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2'>
          <p className='text-[#05C2DF] text-sm'>Hello,</p>
          <img
            src="/images/NICE_TO.svg"
            alt="Gadgets"
            className='mt-2 md:w-[205px] sm:w-[200px] max-sm:w-[200px] md:h-[25px]'
          />
          <p className='text-[#929292] mt-5'>
            KAT VR is an independent company dedicated to the research, development, and sales of VR Locomotion products and solutions. Founded in 2013, we have quickly grown to become one of the world’s leading professional suppliers of VR games’ & simulations’ equipment
          </p>
        </div>
        <div className='lg:block md:hidden sm:hidden max-sm:hidden 2xl:col-start-7 lg:col-start-8 lg:col-span-6 relative ml-6 lg:mb-0 lg:mt-[8rem]'>
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