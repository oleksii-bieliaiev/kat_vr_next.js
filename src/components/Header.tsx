"use client";

import React, { forwardRef, useState } from 'react'
import NavBar from './NavBar'
import DownBar from './DownBar'
import Video from './Video';
import Link from 'next/link';

const Header = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const toggleVideo = () => {
    setVideoVisible(prev => !prev);
  };

  return (
    <section className='relative flex flex-col min-h-screen' id='page-top'>
      <NavBar />
      <div className='flex justify-between'>
        <img
          src="/images/gadgets_big.svg"
          alt="Gadgets"
          className='2xl:top-[55%] 2xl:transform 2xl:-translate-y-1/2 lg:top-20 mb-10 max-sm:mb-0 sm:mb-0 lg:mr-[110px] md:mr-[34px] max-sm:mr-[34px] sm:mr-[34px] md:top-[18vh] max-sm:top-11 sm:top-11 right-0 lg:w-[810px] lg:h-[668px] 2xl:w-[1054px] 2xl:h-[595px] md:w-[494px] md:h-[348px] w-[100vw] h-[30vh] absolute object-fit z-0'
        />
        <img
          src="/images/Group_2.svg"
          alt="Gadgets"
          className='hidden lg:block 2xl:top-[42%] 2xl:transform 2xl:-translate-y-1/2 lg:top-48 lg:left-[110px] lg:w-[479px] lg:h-[253px] 2xl:w-[552px] 2xl:h-[316px] pr-10 object-fit absolute z-1'
        />
        <img
          src="/images/Group_2_tab.svg"
          alt="Gadgets"
          className='hidden md:block lg:hidden top-[50vh] md:top-[25vh] md:left-[30px] md:w-[483px] md:h-[195px] object-fit absolute'
        />
        <img
          src="/images/New_start_text.svg"
          alt="Gadgets"
          className='hidden max-sm:block sm:block md:hidden left-1/2 transform -translate-x-1/2 top-[34vh] sm:w-[38vw] sm:h-[15vh] object-fit absolute '
        />
        <img
          src="/images/Discover_text.svg"
          alt="Gadgets"
          className='hidden max-sm:block sm:block md:hidden left-1/2 transform -translate-x-1/2 top-[48vh] max-sm:w-[260px] sm:h-[22vh] object-fit absolute '
        />
        <img
          src="/images/1200.svg"
          alt="Gadgets"
          className='hidden max-sm:block sm:block md:hidden left-1/2 transform -translate-x-1/2 top-[66vh] sm:w-[7vw] sm:h-[5vh] max-sm:top-[65vh] object-fit absolute '
        />
        <div
          className='w-[236px] h-[48px] object-fit absolute cursor-pointer
                     max-sm:left-1/2 max-sm:translate-x-[-170px] max-sm:top-[71vh] 
                     sm:left-1/2 sm:translate-x-[-170px] sm:top-[71vh] 
                     md:left-[0px] md:top-[73vh] md:translate-x-0 
                     lg:left-[147px] lg:top-[64vh] 
                     2xl:mt-24 2xl:relative 2xl:top-[42vh] 2xl:left-[158px] 
                     z-1
                    bg-[url(/images/Default_play.svg)] hover:bg-[url(/images/Button_video_hover.svg)] transition-all duration-300 bg-no-repeat bg-center bg-contain'
          onClick={toggleVideo}            
        />
        <Link href="#contact" passHref scroll={true}>
        <button className="hidden max-sm:block bg-[#05C2DF] hover:bg-white hover:text-[#05C2DF] text-white py-2 px-4 border border-[#05C2DF] rounded w-[265px] h-[39px] transition-colors duration-300 mr-[34px] max-sm:top-[85vh] max-sm:translate-x-[-135px] max-sm:left-1/2 absolute">
          Buy Now
        </button>
        </Link>

      </div>
      <DownBar />

      {isVideoVisible && <Video onClose={toggleVideo} />}
    </section>
  )
}

export default Header
