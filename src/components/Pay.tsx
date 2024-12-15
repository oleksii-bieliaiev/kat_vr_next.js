import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import PurchaseNavBar from './PurchaseNavBar'
import OrderComplete from './OrderComplete';
import { motion } from 'framer-motion';

interface PayProps {
  isPayVisible: boolean;
  isPurchaseOpen: boolean;
  isOrderComplete: boolean;
  onClose: () => void;
  setPurchaseVisible: Dispatch<SetStateAction<boolean>>;
  setIsPayVisible: Dispatch<SetStateAction<boolean>>;
  setIsOrderComplete: Dispatch<SetStateAction<boolean>>;
}

const Pay: React.FC<PayProps> = ({ onClose, isPayVisible ,isOrderComplete, isPurchaseOpen, setPurchaseVisible,setIsPayVisible,setIsOrderComplete}) => {
  const [quantity, setQuantity] = React.useState(1);
  const [formData, setFormData] = useState({
    cardNumber: ['', '', '', ''],
    cardHolder: '',
    expirationDate: '',
    cvv: '',
    quantity: 1,
    price: 1200, 
  });

  const [errors, setErrors] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  useEffect(() => {
    if (isPayVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }


    return () => {
      document.body.style.overflow = '';
    };
  }, [isPayVisible]);




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {

   
    let newErrors = { cardNumber: '', cardHolder: '', expirationDate: '', cvv: '' };

    if (!formData.cardNumber || formData.cardNumber.join('').length !== 16) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }

    if (!formData.cardHolder) {
      newErrors.cardHolder = 'Please enter the card holder name';
    }

    if (!formData.expirationDate || !/^\d{2}\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = 'Please enter a valid expiration date (MM/YY)';
    }

    if (!formData.cvv || formData.cvv.length !== 3) {
      newErrors.cvv = 'Please enter a valid 3-digit CVV';
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);

      setFormData({
        cardNumber: ['', '', '', ''],
        cardHolder: '',
        expirationDate: '',
        cvv: '',
        quantity: 1,
        price: 1200, 
      });

      setErrors({
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        cvv: '',
      });

      setIsOrderComplete(true);
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <motion.aside
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-100 h-screen bg-gradient-to-r from-[#191536] to-[#000000] overflow-y-scroll flex flex-col"
    >
      <PurchaseNavBar onClose={onClose} isOrderComplete={isOrderComplete} isPayVisible={isPayVisible} isPurchaseOpen={isPurchaseOpen}/>
      <div className='grid lg:grid-cols-12 md:grid-cols-6 max-sm:grid-cols-2 lg:pr-[110px] md:pr-[34px] max-sm:pr-[34px] sm:pr-[34px] lg:pl-[110px] md:pl-[34px] max-sm:pl-[34px] sm:pl-[34px] md:w-auto md:mx-0 sm:w-[320px] sm:mx-auto max-sm:w-[320px] max-sm:mx-auto min-h-screen md:place-items-center'>

        <div className='2xl:col-start-1 2xl:col-span-6 lg:col-start-1 lg:col-span-6 md:col-start-1 md:col-span-6 max-sm:col-start-1 max-sm:col-span-2 flex flex-col items-center lg:gap-16 2xl:gap-6 2xl:translate-y-[-3rem] lg:translate-y-[-1.7rem] lg:translate-x-[-3rem] md:translate-y-[-1rem] md:pt-0 sm:pt-8 max-sm:pt-8 md:z-0'>
          <img
            src="/images/pic_purchase_big.svg"
            alt="Image"
            className='sm:hidden max-sm:hidden md:block lg:w-[810px] lg:h-[279px] 2xl:w-[961px] 2xl:h-[447px] md:w-[584px] md:h-[277px] lg:mt-0 md:mt-20 lg:object-contain'
          />

          <div className='flex flex-row md:justify-evenly max-sm:justify-between items-start gap-0 rounded-lg w-full max-w-md lg:mr-[25%]'>
            <div className='flex flex-col md:pr-0 sm:pr-[77%]'>
              <label className='block text-sm text-[#929292] pb-2' htmlFor='quantity'>
                Quantity
              </label>
              <select
                className='w-[1rem]] bg-[#191536] focus:outline-none focus:border-[#05C2DF] text-white text-base h-[1.5rem] rounded-md'
                id='quantity'
                value={formData.quantity} 
                onChange={(e) => {
                  const newQuantity = Number(e.target.value);
                  setQuantity(newQuantity);
                  setFormData({
                    ...formData,
                    quantity: newQuantity,
                    price: newQuantity * 1200, 
                  });
                }}
              >
                {Array.from({ length: 15 }, (_, i) => i + 1).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className='text-[#929292] flex flex-col text-sm'>
              Price: <span className='text-[#05C2DF] text-3xl'>{quantity * 1200}$</span>
            </div>
          </div>
        </div>
        <div className='flex 2xl:col-start-8 2xl:col-span-5 lg:col-start-7 lg:col-span-6 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 md:mt-4 sm:mt-10 max-sm:mt-10 lg:translate-y-[-1.5rem] '>
          <form
            className='md:grid md:grid-cols-2 sm:flex max-sm:flex sm:flex-col max-sm:flex-col md:gap-x-6 max-sm:gap-5 gap-y-8 2xl:w-[541px] lg:w-[521px] md:w-[700px] sm:w-[252px] max-sm:w-[80vw]'
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Card Number */}
            <div className='relative grid cols-start-1 col-span-2 grid-cols-4 gap-6 items-start mb-2'>
              <label className='block col-span-4 text-sm leading-none text-[#929292]'>
                Card Number*
              </label>
              {Array.from({ length: 4 }, (_, index) => (
                <input
                  key={index}
                  className={`w-full bg-transparent border-b ${errors.cardNumber ? 'border-red-500' : 'border-[#2F2F2F]'
                    } focus:outline-none focus:border-[#05C2DF] placeholder-[#2F2F2F] text-[#929292] text-base text-center`}
                  type='text'
                  placeholder='0000'
                  maxLength={4} 
                  value={formData.cardNumber[index] || ''}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ''); 
                    if (value.length <= 4) {
                      
                      const newCardNumber = [...formData.cardNumber];
                      newCardNumber[index] = value;
                      setFormData({ ...formData, cardNumber: newCardNumber });

                     
                      if (value.length === 4 && index < 3) {
                        document.getElementById(`card-number-${index + 1}`)?.focus();
                      }
                    }
                  }}
                  id={`card-number-${index}`}
                />
              ))}
              {errors.cardNumber && (
                <span className='text-red-500 absolute text-xs mt-[4.3rem] col-span-4'>
                  {errors.cardNumber}
                </span>
              )}
            </div>

            {/* Card Holder Name */}
            <div className='relative cols-start-1 col-span-2 flex-col items-start mb-6'>
              <label className='block text-sm leading-none text-[#929292]' htmlFor='cardHolder'>
                Card Holder Name*
              </label>
              <input
                className={`w-full bg-transparent border-b ${errors.cardHolder ? 'border-red-500' : 'border-[#2F2F2F]'}
          focus:outline-none focus:border-[#05C2DF] text-white text-base pt-3`}
                id='cardHolder'
                type='text'
                name='cardHolder'
                value={formData.cardHolder}
                onChange={handleInputChange}
              />
              {errors.cardHolder && <span className='text-red-500 absolute right-[50%] w-[50%] text-xs mt-10'>{errors.cardHolder}</span>}
            </div>

            {/* Expiration Date */}
            <div className='relative flex flex-col items-start'>
              <label className='block text-sm leading-none text-[#929292]' htmlFor='expirationDate'>
                Expiration Date (MM/YY)*
              </label>
              <input
                className={`w-full bg-transparent border-b ${errors.expirationDate ? 'border-red-500' : 'border-[#2F2F2F]'}
    focus:outline-none placeholder-[#2F2F2F] focus:border-[#05C2DF] text-white text-base pt-3`}
                id='expirationDate'
                type='text'
                name='expirationDate'
                maxLength={5}
                placeholder='MM/YY'
                value={formData.expirationDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  let input = e.target.value;


                  input = input.replace(/\D/g, '');


                  if (input.length > 2) {
                    input = `${input.slice(0, 2)}/${input.slice(2, 4)}`;
                  }

                  setFormData((prevData) => ({
                    ...prevData,
                    expirationDate: input,
                  }));
                }}
              />
              {errors.expirationDate && <span className='text-red-500 absolute text-xs mt-[3.2rem]'>{errors.expirationDate}</span>}
            </div>


            {/* CVV */}
            <div className='relative flex flex-col items-start '>
              <label className='block text-sm leading-none text-[#929292]' htmlFor='cvv'>
                CVV*
              </label>
              <input
                className={`w-full bg-transparent border-b ${errors.cvv ? 'border-red-500' : 'border-[#2F2F2F]'}
          focus:outline-none placeholder-[#2F2F2F] focus:border-[#05C2DF] text-white text-base pt-3`}
                id='cvv'
                type='text'
                name='cvv'
                placeholder='000'
                maxLength={3}
                value={formData.cvv}
                onChange={handleInputChange}
              />
              {errors.cvv && <span className='text-red-500 absolute text-xs mt-[3.2rem]'>{errors.cvv}</span>}
            </div>

            {/* Submit Button */}
            <div className='col-span-2 2xl:pt-[8rem] md:justify-center lg:pt-9 lg:pb-0 md:pb-10 sm:pb-10 max-sm:pb-10 md:pt-14 sm:pt-10 max-sm:pt-14 flex lg:justify-start'>
              <button
                className='px-4 py-2 bg-[#05C2DF] hover:bg-white hover:text-[#05C2DF] text-white border border-[#05C2DF] rounded w-full lg:w-[200px] md:w-[458px] md:h-[48px] transition-colors duration-300'
                type='submit'
              >
                Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
      {isOrderComplete && <OrderComplete onClose={onClose} isOrderComplete={isOrderComplete} isPayVisible={isPayVisible} isPurchaseOpen={isPurchaseOpen} setPurchaseVisible={setPurchaseVisible} setIsPayVisible={setIsPayVisible} setIsOrderComplete={setIsOrderComplete}/>}
    </motion.aside>
  )
}

export default Pay
