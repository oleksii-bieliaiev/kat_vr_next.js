import React, { useState } from 'react'


interface Props {
  onClose: () => void;
  isPurchaseOpen: boolean;
  isPayVisible: boolean;
  isOrderComplete: boolean;
}

const PurchaseNavBar: React.FC<Props> = ({ onClose, isPurchaseOpen, isPayVisible, isOrderComplete }) => {

  return (

    <>
      <div className='flex justify-between items-center md:pt-6 2xl:pt-14 lg:pt-14 pt-7 lg:pl-[110px] lg:pr-[110px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] md:w-auto md:mx-0 sm:w-[320px] sm:mx-auto max-sm:w-[320px] max-sm:mx-auto max-sm:pl-[34px] max-sm:pr-[34px] z-20'>
        <img src="/images/Logo.svg" alt="Company Logo" className='w-16 h-4 md:w-20 md:h-5 object-contain' />
        <div
          className={`items-center lg:block md:hidden sm:hidden max-sm:hidden ${isPurchaseOpen ? 'text-[#05C2DF]' : 'text-[#545454]'
            }`}
        >
          <a className='relative cursor-pointer hover:text-[#05C2DF] hover:duration-300'>
            Place Order
          </a>
        </div>
        <div
          className={`items-center lg:block md:hidden sm:hidden max-sm:hidden ${isPayVisible ? 'text-[#05C2DF]' : 'text-[#545454]'
            }`}
        >
          <a className='relative group cursor-pointer hover:text-[#05C2DF] hover:duration-300 '>
            Pay
          </a>
        </div>
        <div
          className={`items-center lg:block md:hidden sm:hidden max-sm:hidden ${isOrderComplete ? 'text-[#05C2DF]' : 'text-[#545454]'
            }`}
        >
          <a className='relative cursor-pointer hover:text-[#05C2DF] hover:duration-300'>
            Order complete
          </a>
        </div>
        <button className="text-white" onClick={onClose}>
          <img
            src="/images/menu_close.svg"
            alt="Close Menu"
            className="md:w-4 md:h-4 max-sm:w-4 max-sm:h-6"
          />
        </button>


      </div>


      <div className='lg:hidden sm:flex max-sm:flex max-sm:flex-row justify-between pt-7 md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] md:w-auto md:mx-0 sm:w-[320px] sm:mx-auto max-sm:w-[320px] max-sm:mx-auto max-sm:pl-[34px] max-sm:pr-[34px] z-20'>

        <a href='#about' className={`relative cursor-pointer text-sm ${isPurchaseOpen ? 'text-[#05C2DF]' : 'text-[#545454]'}`}>
          Place Order
        </a>

        <a href='#tech' className={`relative group cursor-pointer text-sm ${isPayVisible ? 'text-[#05C2DF]' : 'text-[#545454]'}`}>
          Pay
        </a>

        <a href='#benefits' className={`relative cursor-pointer  text-sm ${isOrderComplete ? 'text-[#05C2DF]' : 'text-[#545454]'}`}>
          Order complete
        </a>

      </div>
    </>
  )
}

export default PurchaseNavBar
