import React from 'react'

const DownBar = () => {
  return (
    <div className="hidden lg:flex justify-between items-center absolute bottom-0 w-full bg-transparent text-white 2xl:pb-20 lg:pb-12 pl-[110px] pr-[110px]">
      {/* Left Links */}
      <div className="flex space-x-4">
        <a href="#faq" className="hover:text-[#05C2DF]">FAQ</a>
        <a href="#contact" className="hover:text-[#05C2DF]">Help</a>
      </div>

      {/* Center Link */}
      <a href="#tech" className="relative inline-block group hover:text-[#05C2DF]">
        More
        <span className="absolute left-1/2 top-5 transform -translate-x-1/2 mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white group-hover:border-t-[#05C2DF]"></span>
      </a>

      {/* Right Links */}
      <div className="flex space-x-4">
        <a href="#benefits" className="hover:text-[#05C2DF]">Previous</a>
        <a href="#about" className="hover:text-[#05C2DF]">Next</a>
      </div>
    </div>
  );
}

export default DownBar
