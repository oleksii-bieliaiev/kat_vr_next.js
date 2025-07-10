import React, { useState } from 'react'

const Footer = () => {
  const [isHoveredFace, setIsHoveredFace] = useState(false);
  const [isHoveredTwit, setIsHoveredTwit] = useState(false);
  const [isHoveredYou, setIsHoveredYou] = useState(false);
  const [isHoveredWhat, setIsHoveredWhat] = useState(false);

  return (
    <section id='contact' className='md:pt-10 md:pb-auto lg:pt-10 lg:pb-10 2xl:pt-14 2xl:pb-14 2xl:min-h-[13vh] lg:min-h-[14vh] md:min-h-[10vh] max-sm:h-[43vh] lg:pr-[110px] lg:pl-[110px] md:pr-[34px] md:pl-[34px] sm:pt-[45px] sm:pb-[45px] max-sm:pt-[45px] max-sm:pb-[45px] z-20 bg-black '>
      <div className='max-sm:max-w-[320px] sm:w-[320px] md:w-auto md:mx-0 sm:mx-auto max-sm:w-[320px] max-sm:mx-auto md:pl-0 md:pr-0 sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px]'>
      <div className='md:flex justify-between items-center sm:grid sm:grid-cols-2 max-sm:grid max-sm:grid-cols-2'>
      <img src="/images/Logo.svg" alt="Company Logo" className='w-16 h-4 sm:col-start-1 sm:col-span-1 max-sm:col-start-1 max-sm:col-span-1 md:w-20 md:h-5 object-contain' />
      <div className='text-white md:gap-9 max-sm:gap-3 sm:gap-3 md:pt-0 sm:pt-3 max-sm:pt-3 flex md:flex-row sm:flex-col max-sm:flex-col md:items-center sm:col-start-1 sm:col-span-1 max-sm:col-start-1 max-sm:col-span-1'>
        <a href='#about' className='relative cursor-pointer lg:text-base md:text-sm hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[1px] md:before:w-full max-sm:before:w-[50%] before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
          About
        </a>
        <a href='#tech' className='relative cursor-pointer lg:text-base md:text-sm hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[1px] md:before:w-full max-sm:before:w-[50%] before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
          Tech
        </a>
        <a href='#benefits' className='relative cursor-pointer lg:text-base md:text-sm hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[1px] md:before:w-full max-sm:before:w-[50%] before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
          Benefits
        </a>
        <a href='#contact' className='relative cursor-pointer lg:text-base md:text-sm hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[1px] md:before:w-full max-sm:before:w-[50%] before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
          Contact
        </a>
      </div>
      <div className='text-white md:gap-5 sm:gap-6 max-sm:gap-6 sm:col-start-2 sm:col-span-1 max-sm:col-start-2 max-sm:col-span-1 flex md:items-center md:flex-row sm:items-end sm:flex-col max-sm:items-end max-sm:flex-col'>
        <div className='hidden md:hidden sm:flex sm:flex-col sm:gap-2 sm:place-items-start max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:place-items-start mt-6 mb-2'>
          <a href='tel:+86-0571-86105373' className='sm:inline max-sm:inline text-xs text-[#929292] hover:text-[#05C2DF] '>+86-0571-86105373</a>
          <a href='mailto:global@katvr.com' className='sm:inline max-sm:inline text-xs text-[#929292] hover:text-[#05C2DF] '>global@katvr.com</a>
          <a href='mailto:overseas@katvr.com' className='sm:inline max-sm:inline text-xs text-[#929292] hover:text-[#05C2DF] '>overseas@katvr.com</a>
        </div>
        <div className='md:flex 2xl:gap-7 lg:gap-6 md:gap-5 md:items-end sm:flex sm:gap-6 sm:flex-row sm:items-end max-sm:flex max-sm:gap-6 max-sm:flex-row max-sm:items-end'>
          <a href="https://www.facebook.com/" target="_blank"
            className='md:flex lg:w-[9px] lg:h-[19px] md:w-[6px] md:h-[12px] sm:w-[6px] sm:h-[12px] max-sm:w-[6px] max-sm:h-[12px] bg-cover bg-center transition-all duration-300'
            style={{
              backgroundImage: isHoveredFace
                ? "url('/images/hov_face.svg')"
                : "url('/images/face.svg')",
            }}
            onMouseEnter={() => setIsHoveredFace(true)}
            onMouseLeave={() => setIsHoveredFace(false)}
          />

          <a href="https://www.twitter.com/" target="_blank"
            className='md:flex lg:w-[24px] lg:h-[19px] md:w-[15px] md:h-[11px] sm:w-[15px] sm:h-[11px] max-sm:w-[15px] max-sm:h-[11px] bg-cover bg-center transition-all duration-300 '
            style={{
              backgroundImage: isHoveredTwit
                ? "url('/images/hov_twit.svg')"
                : "url('/images/twit.svg')",
            }}
            onMouseEnter={() => setIsHoveredTwit(true)}
            onMouseLeave={() => setIsHoveredTwit(false)}
          />


          <a href="https://www.youtube.com/" target="_blank"
            className='md:flex lg:w-[23px] lg:h-[17.19px] md:w-[15px] md:h-[11px] sm:w-[15px] sm:h-[11px] max-sm:w-[15px] max-sm:h-[11px] bg-cover bg-center transition-all duration-300'
            style={{
              backgroundImage: isHoveredYou
                ? "url('/images/hov_you.svg')"
                : "url('/images/you.svg')",
            }}
            onMouseEnter={() => setIsHoveredYou(true)}
            onMouseLeave={() => setIsHoveredYou(false)}
          />

          <a href="https://discord.com/" target="_blank"
            className='md:flex lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px] sm:w-[14px] sm:h-[14px] max-sm:w-[14px] max-sm:h-[14px] bg-cover bg-center transition-all duration-300'
            style={{
              backgroundImage: isHoveredWhat
                ? "url('/images/hov_what.svg')"
                : "url('/images/what.svg')",
            }}
            onMouseEnter={() => setIsHoveredWhat(true)}
            onMouseLeave={() => setIsHoveredWhat(false)}
          />
        </div>
      </div>
      </div>
    </div>
    </section >
  )
}

export default Footer
