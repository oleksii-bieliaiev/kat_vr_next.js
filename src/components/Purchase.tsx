import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import PurchaseNavBar from './PurchaseNavBar'
import Pay from './Pay';
import { motion } from 'framer-motion';

interface PurchaseProps {
  isVisible: boolean;
  onClose: () => void;
  setPurchaseVisible: Dispatch<SetStateAction<boolean>>;
}

const Purchase: React.FC<PurchaseProps> = ({ isVisible, onClose, setPurchaseVisible }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address1: '',
    address2: '',
    quantity: 1,
    price: 1200,
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address1: '',
  });
  const [isPayVisible, setIsPayVisible] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);


  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }


    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);



  const handleClosePay = () => setIsPayVisible(false);
  const validateForm = () => {
    let newErrors = { firstName: '', lastName: '', email: '', phone: '', country: '', city: '', address1: '', };

    if (!formData.firstName) newErrors.firstName = 'Please, fill your name';
    if (!formData.lastName) newErrors.lastName = 'Please, fill your name';
    if (!formData.email) newErrors.email = 'Please, fill your email';
    if (!formData.phone) newErrors.phone = 'Please, fill your phone';
    if (!formData.country) newErrors.country = 'Please, select a county';
    if (!formData.city) newErrors.city = 'Please, select a city';
    if (!formData.address1) newErrors.address1 = 'Please, fill your address';

    setErrors(newErrors);

    return !newErrors.firstName && !newErrors.lastName && !newErrors.email && !newErrors.phone && !newErrors.country && !newErrors.city && !newErrors.address1;
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validateForm()) {

      console.log('Form submitted:', formData);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        address1: '',
        address2: '',
        quantity: 1,
        price: 1200,
      });

      setErrors({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        address1: '',
      });

      setIsPayVisible(true);
    } else {
      console.log('Form contains errors');
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const countries = ['USA', 'Canada', 'UK', 'Australia'];
  const cities = ['New York', 'Los Angeles', 'Toronto', 'London', 'Sydney'];


  return (
    <motion.aside
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-screen bg-gradient-to-r from-[#191536] to-[#000000] overflow-y-scroll flex flex-col"
    >
      <PurchaseNavBar onClose={onClose} isPurchaseOpen={isVisible} isPayVisible={isPayVisible} isOrderComplete={isOrderComplete} />
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
            {/* First Name Input */}
            <div className='relative flex flex-col items-start'>
              <label className='block text-sm leading-none text-[#929292]' htmlFor='first-name'>
                First Name*
              </label>
              <input
                className={`w-full bg-transparent border-b ${errors.firstName ? 'border-red-500' : 'border-[#2F2F2F]'
                  } focus:outline-none focus:border-[#05C2DF] text-white text-base`}
                id='first-name'
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && <span className='text-red-500 absolute text-xs mt-10'>{errors.firstName}</span>}
            </div>

            {/* Last Name Input */}
            <div className='relative flex flex-col items-start'>
              <label className='block text-sm leading-none text-[#929292]' htmlFor='last-name'>
                Last Name*
              </label>
              <input
                className={`w-full bg-transparent border-b ${errors.lastName ? 'border-red-500' : 'border-[#2F2F2F]'
                  } focus:outline-none focus:border-[#05C2DF] text-white text-base`}
                id='last-name'
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && <span className='text-red-500 absolute text-xs mt-10'>{errors.lastName}</span>}
            </div>

            {/* Email Input */}
            <div className='relative flex flex-col items-start'>
              <label className='block text-sm leading-none text-[#929292]' htmlFor='email'>
                Email*
              </label>
              <input
                className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-[#2F2F2F]'
                  } focus:outline-none focus:border-[#05C2DF] text-white text-base`}
                id='email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className='text-red-500 absolute text-xs mt-10'>{errors.email}</span>}
            </div>

            {/* Phone Number Input */}
            <div className='relative flex flex-col items-start'>
              <label className='block text-sm leading-none text-[#929292]' htmlFor='phone'>
                Phone Number*
              </label>
              <input
                className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-[#2F2F2F]'
                  } focus:outline-none focus:border-[#05C2DF] text-white text-base`}
                id='phone'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <span className='text-red-500 absolute text-xs mt-10'>{errors.phone}</span>}
            </div>

            {/* Country Dropdown */}
            <div className='relative flex flex-col items-start'>
              <label className='block text-sm pb-2 leading-none text-[#929292]' htmlFor='country'>
                Country*
              </label>
              <select
                className={`w-full bg-transparent border-b ${errors.country ? 'border-red-500' : 'border-[#2F2F2F]'
                  } focus:outline-none focus:border-[#05C2DF] text-white text-base`}
                id='country'
                name='country'
                value={formData.country}
                onChange={handleInputChange}
                style={{ height: '40px', backgroundColor: '#191536' }}
              >
                <option value='' disabled>
                  Select a country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && <span className='text-red-500 absolute text-xs mt-16'>{errors.country}</span>}
            </div>

            {/* City Dropdown */}
            <div className='flex relative flex-col items-start'>
              <label className='block text-sm pb-2 leading-none text-[#929292]' htmlFor='city'>
                City*
              </label>
              <select
                className={`w-full bg-transparent border-b ${errors.city ? 'border-red-500' : 'border-[#2F2F2F]'
                  } focus:outline-none focus:border-[#05C2DF] text-white text-base`}
                id='city'
                name='city'
                value={formData.city}
                onChange={handleInputChange}
                style={{ height: '40px', backgroundColor: '#191536' }}
              >
                <option value='' disabled>
                  Select a city
                </option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && <span className='text-red-500 absolute text-xs mt-16'>{errors.city}</span>}
            </div>

            {/* Address 1 */}
            <div className='relative flex flex-col items-start'>
              <label className='block text-sm leading-none text-[#929292]' htmlFor='address1'>
                Shipping Address 1*
              </label>
              <input
                className={`w-full bg-transparent border-b ${errors.address1 ? 'border-red-500' : 'border-[#2F2F2F]'
                  } focus:outline-none focus:border-[#05C2DF] text-white text-base`}
                id='address1'
                type='text'
                name='address1'
                value={formData.address1}
                onChange={handleInputChange}
              />
              {errors.address1 && <span className='text-red-500 absolute text-xs mt-10'>{errors.address1}</span>}
            </div>

            {/* Address 2 */}
            <div className='flex flex-col items-start'>
              <label className='block text-sm leading-none text-[#929292]' htmlFor='address2'>
                Shipping Address 2
              </label>
              <input
                className='w-full bg-transparent border-b border-[#2F2F2F] focus:outline-none focus:border-[#05C2DF] text-white text-base'
                id='address2'
                type='text'
                name='address2'
                value={formData.address2}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <div className='col-span-2 2xl:pt-[7rem] md:justify-center lg:pt-6 lg:pb-0 md:pb-10 sm:pb-10 max-sm:pb-10 md:pt-14 sm:pt-10 max-sm:pt-14 flex lg:justify-start'>
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
      {isPayVisible && <Pay isPayVisible={isPayVisible} isOrderComplete={isOrderComplete} setIsOrderComplete={setIsOrderComplete} isPurchaseOpen={isVisible} onClose={handleClosePay} setPurchaseVisible={setPurchaseVisible} setIsPayVisible={setIsPayVisible} />}
    </motion.aside>

  )
}

export default Purchase
