import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import DownBar from './DownBar';
import Video from './Video';
import Purchase from './Purchase';

const Header = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);
  const [isPurchaseVisible, setPurchaseVisible] = useState(false);

  const toggleVideo = () => {
    setVideoVisible(prev => !prev);
  };

  const togglePurchase = () => {
    setPurchaseVisible((prev) => !prev);
  };

  const closePurchase = () => {
    setPurchaseVisible(false); 
  };

  return (
    <section id='page-top' className='relative flex flex-col h-screen bg-gradient-to-r from-[#191536] to-[#000000] overflow-hidden'>
      <NavBar togglePurchase={togglePurchase}/>

      <div className='grid lg:grid-cols-12 md:grid-cols-6 max-sm:grid-cols-2 lg:pr-[110px] md:pr-[34px] max-sm:pr-[34px] sm:pr-[34px] lg:pl-[110px] md:pl-[34px] max-sm:pl-[34px] sm:pl-[34px] md:w-auto md:mx-0 sm:w-[320px] sm:mx-auto max-sm:w-[320px] max-sm:mx-auto min-h-screen md:place-items-center'>

        <div className='2xl:col-start-1 2xl:col-span-4 lg:col-start-1 lg:col-span-4 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 flex flex-col items-center justify-center 2xl:translate-y-[-9rem] lg:translate-y-[-7rem] md:translate-y-[-2rem] max-sm:translate-y-[-5rem] relative'>
          <img
            src="/images/gadgets_small.svg"
            alt="Image"
            className='hidden max-sm:block sm:block md:hidden sm:w-[310px] sm:h-[152px] max-sm:w-[310px] max-sm:h-[152px] sm:mt-0 max-sm:mt-[6rem] max-sm:object-cover max-sm:object-center'
          />
          <img
            src="/images/New_start_text.svg"
            alt="Gadgets"
            className='hidden max-sm:block sm:block md:hidden'
          />
          <img
            src="/images/Discover_text.svg"
            alt="Gadgets"
            className='hidden max-sm:block mt-7 sm:block md:hidden'
          />
          <img
            src="/images/1200.svg"
            alt="Gadgets"
            className='hidden max-sm:block mt-3 sm:block md:hidden'
          />

          <img
            src="/images/Group_2.svg"
            alt="Text"
            className='hidden lg:block object-contain lg:w-[479px] lg:h-[253px] 2xl:w-[562px] 2xl:h-[316px]'
          />

          <img
            src="/images/Group_2_tab.svg"
            alt="Text"
            className='hidden md:flex lg:hidden object-cover object-left md:w-[483px] md:h-[195px] md:z-1'
          />

          <div className='relative w-full 2xl:pl-[9%] 2xl:pr-[32%] lg:pl-[5%] lg:pr-[18%] md:pl-0 md:pr-[60%] sm:pl-0 sm:pr-[30%] max-sm:pl-0 max-sm:pr-[30%] 2xl:mt-8 lg:mt-6 md:mt-6 sm:mt-4 max-sm:mt-6 flex md:justify-start max-sm:justify-center sm:justify-center'>
            <div
              className='lg:w-[286px] lg:h-[56px] md:w-[236px] md:h-[48px] max-sm:w-[236px] max-sm:h-[48px] sm:w-[236px] sm:h-[48px] cursor-pointer bg-[url(/images/Default_play.svg)] hover:bg-[url(/images/Button_video_hover.svg)] transition-all duration-300 bg-no-repeat bg-center bg-contain'
              onClick={toggleVideo}
            />
          </div>

          <button onClick={togglePurchase} className="hidden max-sm:block sm:block md:hidden bg-[#05C2DF] hover:bg-white hover:text-[#05C2DF] text-white sm:mt-5 max-sm:mt-7 sm:mb-10 border border-[#05C2DF] rounded max-w-[255px] w-[80vw] h-[39px] transition-colors duration-300 ">
            Buy Now
          </button>
      
        </div>


        <div className='2xl:col-start-6 2xl:col-span-7 lg:col-start-6 lg:col-span-7 md:col-start-4 md:col-span-3 max-sm:col-start-1 max-sm:col-span-2 flex md:justify-center lg:translate-y-[-5rem] md:translate-y-[-1rem] md:z-0'>
          <img
            src="/images/gadgets_big.svg"
            alt="Image"
            className='hidden lg:block lg:w-[710px] lg:h-[388px] 2xl:w-[1054px] 2xl:h-[645px] md:w-[494px] md:h-[348px] lg:object-contain'
          />
          <img
            src="/images/gadgets_medium.svg"
            alt="Image"
            className='hidden md:block lg:hidden md:w-[494px] md:h-[288px] md:object-cover md:object-center md:z-0'
          />
        </div>

      </div>
      <DownBar />

      {isVideoVisible && <Video onClose={toggleVideo} />}
      {isPurchaseVisible && <Purchase onClose={closePurchase} isVisible={isPurchaseVisible} setPurchaseVisible={setPurchaseVisible}/>}
    </section>
  )
}

export default Header
