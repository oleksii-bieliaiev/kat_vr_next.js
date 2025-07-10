import React from 'react'

const WhyKat = () => {
  return (
    <section id='benefits' className='relative flex flex-col max-sm:justify-center max-sm:h-[95vh] md:min-h-[40vh] lg:min-h-[90vh] 2xl:min-h-[75vh] bg-gradient-to-r from-[#191536] to-[#000000] lg:pr-[110px] lg:pl-[110px] md:pr-[34px] md:pl-[34px]'>
      <div className='max-sm:max-w-[320px] sm:w-[320px] md:w-auto md:mx-0 sm:mx-auto max-sm:w-[320px] max-sm:mx-auto md:pl-0 md:pr-0 sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px]'>
        <div className='grid lg:grid-cols-12 md:grid-cols-6 max-sm:grid-cols-2 lg:place-items-center md:place-items-start sm:justify-items-start max-sm:justify-items-start '>
          <img
            src="/images/WhyKat.svg"
            alt="Gadgets"
            className='2xl:mt-[9.5rem] lg:mt-[6.5rem] md:mt-[4.5rem] sm:mt-[3rem] max-sm:mt-[3rem] lg:w-[368px] lg:h-[44px] md:w-[180px] md:h-[25px] max-sm:w-[180px] max-sm:h-[25px] lg:col-start-5 lg:col-span-4 md:col-start-1 md:col-span-2 max-sm:col-start-1 max-sm:col-span-2'
          />
        </div>

        <div className='grid lg:grid-cols-12 md:grid-cols-6 lg:gap-8 md:gap-4 lg:mt-[8%] md:mt-[3%] max-sm:mt-[8%] 2xl:mb-[9.5rem] lg:mb-0 md:mb-[4.5rem] sm:mb-[2rem] max-sm:mb-[3rem]'>
          <div className='lg:mb-0 max-sm:mb-5 lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-2 flex max-sm:items-start md:items-center flex-col cursor-pointer transition-transform duration-300 transform hover:scale-105'>
            <img src="/images/pic_5.svg" alt="Block 1" className='block max-sm:hidden w-[84px] h-[84px] object-contain ' />
            <h3 className='mt-4 text-white text-base font-bold uppercase leading-normal mb-4'>UNIVERSALLY COMPATIBLE</h3>
            <p className='text-[#929292] md:text-center text-base font-normal lg:line-clamp-none lg:max-w-[30rem] md:line-clamp-3 md:max-w-[30ch] max-sm:line-clamp-3 max-sm:max-w-[30ch]'>KAT Loco offers universal compatibility across all major VR headsets and platforms allowing you to play any VR game with support for Free Locomotion</p>
          </div>
          <div className='lg:mb-0 max-sm:mb-5 lg:col-start-5 lg:col-span-4 md:col-start-3 md:col-span-2 flex flex-col max-sm:items-start md:items-center cursor-pointer transition-transform transform duration-300 hover:scale-105'>
            <img src="/images/pic_6.svg" alt="Block 2" className='block max-sm:hidden w-[84px] h-[84px] object-contain' />
            <h3 className='mt-4 max-sm:mt-1 text-white text-base font-bold uppercase leading-normal mb-4'>VR/PC CONTROL PANEL</h3>
            <p className='text-[#929292] md:text-center text-base font-normal lg:line-clamp-none lg:max-w-[25rem] md:line-clamp-3 md:max-w-[30ch] max-sm:line-clamp-3 max-sm:max-w-[30ch]'>Our Multifunctional Software allows for quick access to KAT Loco’s control panel both from a computer desktop, and directly from your VR headset.</p>
          </div>
          <div className='max-sm:mb-5 lg:col-start-10 lg:col-span-3 md:col-start-5 md:col-span-2 flex flex-col max-sm:items-start md:items-center cursor-pointer transition-transform transform duration-300 hover:scale-105'>
            <img src="/images/pic_7.svg" alt="Block 3" className='block max-sm:hidden w-[84px] h-[84px] object-contain' />
            <h3 className='mt-4 max-sm:mt-1 text-white text-base font-bold uppercase leading-normal mb-4'>WIRELESS SENSORS</h3>
            <p className='text-[#929292] md:text-center text-base font-normal lg:line-clamp-none lg:max-w-[25rem] md:line-clamp-3 md:max-w-[30ch] max-sm:line-clamp-3 max-sm:max-w-[30ch]'>What makes it even more advanced, KAT Loco is entirely wireless, and comes with a complete system of algorithms, super durable batteries and more!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyKat