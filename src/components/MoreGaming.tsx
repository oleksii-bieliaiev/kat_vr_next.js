import React from 'react'

const MoreGaming = () => {
  return (
    <section id='faq' className='relative flex flex-col max-sm:justify-center max-sm:h-[100vh] md:min-h-[160vh] lg:min-h-[90vh] 2xl:min-h-[75vh] bg-black lg:pr-[110px] lg:pl-[110px] md:pr-[34px] md:pl-[34px]'>
      <div className='max-sm:max-w-[320px] sm:w-[320px] md:w-auto md:mx-0 sm:mx-auto max-sm:w-[320px] max-sm:mx-auto md:pl-0 md:pr-0 sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px]'>
      <div className='grid lg:grid-cols-12 md:grid-cols-6 max-sm:grid-cols-2 md:place-items-center sm:justify-items-start max-sm:justify-items-start'>
      <img
          src="/images/Title.svg"
          alt="Gadgets"
          className='2xl:mt-[9.5rem] lg:mt-[6.5rem] md:mt-[4.5rem] sm:mt-[2rem] max-sm:mt-[2rem] w-[368px] h-[44px] max-sm:w-[209px] max-sm:h-[25px] lg:col-start-5 lg:col-span-4 md:col-start-3 md:col-span-2 max-sm:col-start-1 max-sm:col-span-2'
        />
        <img
          src="/images/Subtitle.svg"
          alt="Gadgets"
          className='lg:mt-4 md:mt-3 max-sm:mt-3 w-[340px] h-[17px] lg:col-start-5 lg:col-span-4 md:col-start-3 md:col-span-2 max-sm:col-start-1 max-sm:col-span-2 '
        />
      </div>

      <div className='grid lg:grid-cols-12 md:grid-cols-6 2xl:gap-8 lg:gap-[4.5rem] gap-4 mt-[6%] max-sm:mt-[3%] 2xl:mb-[9.5rem] lg:mb-[6.5rem] md:mb-[6.5rem] sm:mb-[2rem] max-sm:mb-[2rem]'>
        <div className='lg:mb-0 md:mb-7 lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-3 flex max-sm:items-start md:items-center flex-col cursor-pointer transition-transform duration-300 transform hover:scale-105'>
          <img src="/images/pic_1.svg" alt="Block 1" className='block max-sm:hidden w-[84px] h-[84px] object-contain ' />
          <h3 className='mt-4 text-white text-base font-bold uppercase leading-normal mb-4'>Education</h3>
          <p className='text-[#929292] md:text-center text-base font-normal max-sm:line-clamp-2 max-sm:max-w-[30ch]'>Create aducational simulations, trainings and much more with unlimited virtual space and minimum physical space</p>
        </div>
        <div className='lg:mb-0 md:mb-7 lg:col-start-4 lg:col-span-3 md:col-start-4 md:col-span-3 flex flex-col max-sm:items-start md:items-center cursor-pointer transition-transform transform duration-300 hover:scale-105'>
          <img src="/images/pic_2.svg" alt="Block 2" className='block max-sm:hidden w-[84px] h-[84px] object-contain' />
          <h3 className='mt-4 max-sm:mt-1 text-white text-base font-bold uppercase leading-normal mb-4'>Real estate</h3>
          <p className='text-[#929292] md:text-center text-base font-normal max-sm:line-clamp-2 max-sm:max-w-[30ch]'>Desighn architectural projects in a deeply realistic environment allowing visitors to freely walk around, and feel their vibe</p>
        </div>
        <div className='lg:col-start-7 lg:col-span-3 md:col-start-1 md:col-span-3 flex flex-col max-sm:items-start md:items-center cursor-pointer transition-transform transform duration-300 hover:scale-105'>
          <img src="/images/pic_3.svg" alt="Block 3" className='block max-sm:hidden w-[84px] h-[84px] object-contain' />
          <h3 className='mt-4 max-sm:mt-1 text-white text-base font-bold uppercase leading-normal mb-4'>Fitness</h3>
          <p className='text-[#929292] md:text-center text-base font-normal max-sm:line-clamp-2 max-sm:max-w-[30ch]'>Combine business with pleasure, and discover countless ways to stay fit while playing your favorite VR Games!</p>
        </div>
        <div className='lg:col-start-10 lg:col-span-3 md:col-start-4 md:col-span-3 flex flex-col max-sm:items-start md:items-center cursor-pointer transition-transform transform duration-300 hover:scale-105'>
          <img src="/images/pic_4.svg" alt="Block 4" className='block max-sm:hidden w-[74px] h-[90px] object-contain' />
          <h3 className='mt-4 max-sm:mt-1 text-white text-base font-bold uppercase leading-normal mb-4'>Social integrations</h3>
          <p className='text-[#929292] md:text-center text-base font-normal max-sm:line-clamp-2 max-sm:max-w-[30ch]'>Hang out with your friends in the virtual world when you can’t meet space requirements</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default MoreGaming
