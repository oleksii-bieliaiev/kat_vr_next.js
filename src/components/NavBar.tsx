import React, { useState } from 'react'
import Menu from './Menu';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className='flex justify-between items-center md:pt-6 lg:pt-14 pt-7 lg:pl-[110px] lg:pr-[110px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px] z-20'>
      <img src="/images/Logo.svg" alt="Company Logo" className='w-16 h-4 md:w-20 md:h-5 object-contain' />
      <div className='text-white md:gap-9 lg:flex hidden items-center'>
        <a href='#about' className='relative cursor-pointer hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
          About
        </a>
        <a href='#tech' className='relative cursor-pointer hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
          Tech
        </a>
        <a href='#benefits' className='relative cursor-pointer hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
          Benefits
        </a>
        <a href='#contact' className='relative cursor-pointer hover:text-[#05C2DF] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-[#05C2DF] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
          Contact
        </a>
        <Link href="#contact" passHref scroll={true}>
          <button
            className="bg-[#05C2DF] hover:bg-white hover:text-[#05C2DF] text-white py-2 px-4 border border-[#05C2DF] rounded w-[200px] h-[48px] transition-colors duration-300"
          >
            Buy Now
          </button>
        </Link>
      </div>
      <div className='lg:hidden justify-end items-center'>
        <img
          src={isHovered ? "/images/menu_small_hover.svg" : "/images/menu_small.svg"}
          alt="Menu Icon"
          className='w-[29px] md:h-5 h-3 cursor-pointer transition-transform duration-300 hover:scale-110 object-fit'
          onClick={toggleMenu}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      {isMenuOpen && <Menu onClose={toggleMenu} />}
    </div>
  )
}

export default NavBar
