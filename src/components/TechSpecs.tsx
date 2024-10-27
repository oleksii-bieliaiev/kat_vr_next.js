'use client'
import React, { useState } from 'react'

const TechSpecs = () => {

  const [isInfoFirstVisible, setIsInfoFirstVisible] = useState(false);
  const [isInfoSecondVisible, setIsInfoSecondVisible] = useState(false);
  const [isInfoThirdVisible, setIsInfoThirdVisible] = useState(false);
  const toggleInfoFirst = () => {
    setIsInfoFirstVisible(!isInfoFirstVisible);
  };

  const toggleInfoSecond = () => {
    setIsInfoSecondVisible(!isInfoSecondVisible);
  };

  const toggleInfoThird = () => {
    setIsInfoThirdVisible(!isInfoThirdVisible);
  };

  return (
    <section id='tech' className='relative flex flex-col justify-center 2xl:min-h-[72vh] lg:min-h-[82vh] md:min-h-[120vh] max-sm:h-[68vh] bg-black lg:pl-[110px] lg:pr-[110px] lg:pt-[100px] lg:pb-[100px] md:pt-[80px] md:pb-[80px] md:pl-[32px] md:pr-[32px] sm:pt-[50px] sm:pb-[50px] max-sm:pt-[50px] max-sm:pb-[50px]'>
      <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-2 max-sm:grid-cols-2 justify-center relative md:w-auto md:mx-0 sm:w-[320px] sm:mx-auto max-sm:max-w-[320px] max-sm:w-[320px] max-sm:mx-auto md:pl-0 md:pr-0 sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px]'>
        <img
          src="/images/TechSpecs_big.svg"
          alt='TechSpecs'
          className='hidden lg:grid 2xl:col-start-3 2xl:col-end-12 lg:col-start-2 lg:col-end-12 2xl:w-[1175px] 2xl:h-[479px] 2xl:pl-0 lg:pl-[10%] lg:w-full lg:h-full'
        />
        <img
          src='/images/Title_TS.svg'
          alt='title'
          className='lg:hidden md:flex md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 mb-[50px] max-sm:bg-contain md:w-[222px] md:h-[29px] '
        />
        <img
          src='/images/Techspecs_small.svg'
          alt='TechSpecs_small'
          className='lg:hidden md:flex md:col-start-2 md:col-span-4 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 md:w-[358px] md:h-[354px] max-sm:w-[214px] max-sm:h-[206px] relative text-center md:justify-center md:items-center mx-auto'
        />

        <div className={`lg:hidden md:flex absolute md:w-[62px] z-10 md:h-[62px] max-sm:h-[34px] sm:h-[34px] sm:w-[34px] max-sm:w-[34px] md:left-[32%] sm:left-[33%] sm:mt-[4.5rem] max-sm:left-[33%] md:mt-14 max-sm:mt-[4.5rem] md:object-cover sm:bg-cover max-sm:bg-cover cursor-pointer ${isInfoThirdVisible
              ? 'bg-[url(/images/Ellipse_minus.svg)]'
              : 'bg-[url(/images/Ellipse_plus.svg)]'
            }`}
          onClick={toggleInfoThird}>
        </div>
        <div className={`lg:hidden md:flex absolute md:w-[62px] z-10 md:h-[62px] max-sm:h-[34px] max-sm:w-[34px] sm:h-[34px] sm:w-[34px] md:left-[59%] max-sm:left-[65%] sm:left-[65%] md:mt-56 sm:mt-[10rem] max-sm:mt-[10rem] md:object-cover sm:bg-cover max-sm:bg-cover cursor-pointer ${isInfoSecondVisible
              ? 'bg-[url(/images/Ellipse_minus.svg)]'
              : 'bg-[url(/images/Ellipse_plus.svg)]'
            }`}
          onClick={toggleInfoSecond}>
        </div>
        <div
          className={`lg:hidden md:flex absolute md:w-[62px] z-10 md:h-[62px] max-sm:h-[34px] max-sm:w-[34px] sm:h-[34px] sm:w-[34px] md:left-[15%] sm:left-[12%] max-sm:left-[12%] md:mt-[22rem] sm:mt-[15rem] max-sm:mt-[15rem] md:object-cover sm:bg-cover max-sm:bg-cover cursor-pointer ${isInfoFirstVisible
              ? 'bg-[url(/images/Ellipse_minus.svg)]'
              : 'bg-[url(/images/Ellipse_plus.svg)]'
            }`}
          onClick={toggleInfoFirst}
        ></div>

        {isInfoFirstVisible && (
          <div className="absolute md:top-[21rem] md:left-[23%] sm:top-[14rem] sm:left-[21%] max-sm:top-[14rem] max-sm:left-[21%] w-max bg-[#191536e6] z-5 text-[#929292] md:text-sm sm:text-[9px] max-sm:text-[9px] p-4 rounded-lg">
            <p>Wireless: Bluetooth 4.2</p>
            <p>Signal range: 5m</p>
            <p>Receiver: USB 2.0 and above</p>
          </div>
        )}
          {isInfoSecondVisible && (
          <div className="absolute md:top-[5rem] md:left-[53%] sm:top-[6.5rem] sm:left-[11%] max-sm:top-[6.5rem] max-sm:left-[11%] md:w-[300px] max-sm:w-[200px] bg-[#191536e6] z-5 text-[#929292] md:text-sm sm:text-[9px] max-sm:text-[9px] p-4 rounded-lg">
            <p>Type: Lthium-lon polymer batteries</p>
            <p>Capacity: 370mAh</p>
            <p>Battery life: 10h of continuous use, 150 hours on standby</p>
            <p>Charging: Fast charging - 1 hour</p>
            <p>Charging voltage and current: 5V = 0.5A</p>
          </div>
        )}
           {isInfoThirdVisible && (
          <div className="absolute md:w-max sm:w-[150px] max-sm:w-[150px] md:top-[3rem] md:left-[5%] sm:top-[1.5rem] sm:left-[40%] max-sm:top-[1.5rem] max-sm:left-[40%] bg-[#191536e6] z-5 text-[#929292] md:text-sm sm:text-[9px] max-sm:text-[9px] p-4 rounded-lg">
            <p>Weight: 35g/1.23oz each</p>
            <p>Dimension: 50mm/1.97in</p>
            <p>24mm/0.94in</p>
            <p>Light: LED lights</p>
          </div>
        )}

      </div>
    </section>
  )
}

export default TechSpecs
