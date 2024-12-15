import React, { Dispatch, SetStateAction } from 'react'
import PurchaseNavBar from './PurchaseNavBar';
import { motion } from 'framer-motion';

interface Props {
  isPurchaseOpen: boolean;
  isOrderComplete: boolean;
  onClose: () => void;
  isPayVisible: boolean;
  setPurchaseVisible: Dispatch<SetStateAction<boolean>>;
  setIsPayVisible:Dispatch<SetStateAction<boolean>>;
  setIsOrderComplete: Dispatch<SetStateAction<boolean>>;
}


const OrderComplete: React.FC<Props> = ({ onClose, isPurchaseOpen,isOrderComplete, isPayVisible,setPurchaseVisible,setIsPayVisible,setIsOrderComplete }) => {

  const handleClick = () => {
    setPurchaseVisible(false);
    setIsPayVisible(false);
    setIsOrderComplete(false);
  };

  return (
    <motion.aside
    initial={{ x: '-100vw', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    className="fixed top-0 left-0 right-0 z-150 h-screen bg-gradient-to-r from-[#191536] to-[#000000] overflow-y-scroll flex flex-col"
  >
      <PurchaseNavBar onClose={onClose} isOrderComplete={isOrderComplete} isPurchaseOpen={isPurchaseOpen} isPayVisible={isPayVisible} />
      <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-2 max-sm:grid-cols-2 lg:pr-[110px] md:pr-[34px] max-sm:pr-[34px] sm:pr-[34px] lg:pl-[110px] md:pl-[34px] max-sm:pl-[34px] sm:pl-[34px] md:w-auto md:mx-0 sm:w-[320px] sm:mx-auto max-sm:w-[320px] max-sm:mx-auto min-h-screen md:place-items-center'>
        <div className='2xl:col-start-2 2xl:col-span-10 flex flex-col items-center justify-center lg:col-start-2 lg:col-span-10 md:col-start-2 md:col-span-4 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 gap-12 md:gap-12 pt-0 sm:pt-8 max-sm:pt-8 lg:translate-y-[-4rem] md:translate-y-[-3rem] sm:translate-y-[-3rem] max-sm:translate-y-[-3rem]'>
          <img
            src="/images/Thank_you_big.svg"
            alt="Image"
            className='sm:hidden max-sm:hidden md:block lg:w-[707px] lg:h-[60px] md:w-[584px] md:h-[60px] lg:mt-0 mb-0 object-contain'
          />
          <img
            src="/images/Thank_you_small.svg"
            alt="Image"
            className='md:hidden sm:block max-sm:block  max-sm:w-[218px] max-sm:h-[69px] object-contain'
          />
          <p className='text-white md:text-lg max-sm:text-base text-center'>
            Your order has been placed and is being processed. You will receive an email with the order details.
          </p>
          <button
            className='px-4 py-2 bg-[#05C2DF] hover:bg-white hover:text-[#05C2DF] text-white border border-[#05C2DF] rounded w-full lg:w-[200px] md:w-[458px] md:h-[48px] transition-colors duration-300'
            onClick={handleClick}
          >
            Back to homepage
          </button>
        </div>
      </div>
    </motion.aside>
  )
}

export default OrderComplete
