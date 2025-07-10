import React, { useState } from 'react'


const Contacts = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const validateForm = () => {
    let newErrors = { name: '', email: '', phone: '' };

    if (!formData.name) newErrors.name = 'Please, fill your name';
    if (!formData.email) newErrors.email = 'Please, fill your email';
    if (!formData.phone) newErrors.phone = 'Please, fill your phone';

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      setErrors({
        name: '',
        email: '',
        phone: ''
      });
    } else {
      console.log('Form contains errors');
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id='contact' className='overflow-x-hidden relative flex flex-col max-sm:justify-center sm:min-h-[103vh] max-sm:h-[103vh] md:min-h-[70vh] lg:min-h-[85vh] 2xl:min-h-[70vh] 2xl:pt-[150px] 2xl:pb-[205px] lg:pt-[100px] lg:pb-[160px] md:pt-[70px] md:pb-[130px] sm:pt-[50px] max-sm:pb-[70px] bg-black lg:pr-[110px] lg:pl-[110px] md:pr-[34px] md:pl-[34px]'>
      <div className='max-sm:max-w-[320px] sm:w-[320px] md:w-auto md:mx-0 sm:mx-auto max-sm:w-[320px] max-sm:mx-auto md:pl-0 md:pr-0 sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px]'>
        <div className='grid lg:grid-cols-12 md:grid-cols-6 max-sm:grid-cols-2 md:place-items-center sm:justify-items-start max-sm:justify-items-start lg:gap-1 md:gap-6'>
          <div className='flex flex-col lg:justify-center md:justify-start items-start 2xl:col-start-1 2xl:col-span-4 lg:col-start-1 lg:col-span-5 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 lg:w-[438px] lg:h-[276px] md:w-[340px] md:h-[376px] sm:w-[278px] sm:h-[53px] max-sm:w-[278px] max-sm:h-[53px]'>
            <img
              src="/images/Have_any_que.svg"
              alt='TechSpecs'
              className='object-contain md:mt-4 lg:mt-8'
            />
            <img
              src="/images/GET_IN_TOUCH.svg"
              alt='TechSpecs'
              className='object-contain mt-3 lg:h-full md:h-[18px] sm:h-[18px] max-sm:h-[18px]'
            />
            <p className='hidden md:inline text-[#929292] md:mt-6 lg:mt-6 lg:mb-4 text-base font-normal'>Our manager will reply you within 15 minutes</p>
            <a href='tel:+86-0571-86105373' className='hidden md:inline text-[#929292] hover:text-[#05C2DF] mt-[5rem]'>+86-0571-86105373</a>
            <a href='mailto:global@katvr.com' className='hidden md:inline text-[#929292] hover:text-[#05C2DF] mt-3'>global@katvr.com</a>
            <a href='mailto:overseas@katvr.com' className='hidden md:inline text-[#929292] hover:text-[#05C2DF] mt-1'>overseas@katvr.com</a>
          </div>

          <div className='flex 2xl:col-start-8 2xl:col-span-5 lg:col-start-7 lg:col-span-6 md:col-start-4 md:col-span-3 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 sm:mt-8 max-sm:mt-8'>
            <form
              className='2xl:w-[541px] 2xl:h-[276px] lg:w-[521px] lg:h-[276px] md:w-[340px] md:h-[376px] sm:w-[80vw] sm:h-[320px] max-sm:w-[80vw] max-sm:h-[320px] space-y-6'
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Name Input */}
              <div className='flex flex-col items-start md:w-full md:max-w-none sm:max-w-[255px] sm:w-[80vw] max-sm:max-w-[255px] max-sm:w-[80vw] h-10 mb-6'>
                <label className='block h-4 text-sm leading-none text-[#929292]' htmlFor='name-input'>
                  Name*
                </label>
                <input
                  className={`w-full h-6 bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-[#2F2F2F]'} focus:outline-none focus:border-[#05C2DF] text-white text-base leading-6`}
                  id='name-input'
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <span className='text-red-500 text-xs mt-1'>{errors.name}</span>}
              </div>

              {/* Email Input */}
              <div className='flex flex-col items-start md:w-full md:max-w-none sm:max-w-[255px] sm:w-[80vw] max-sm:max-w-[255px] max-sm:w-[80vw] h-10 mb-6'>
                <label className='block h-4 text-sm leading-none text-[#929292]' htmlFor='email-input'>
                  Email*
                </label>
                <input
                  className={`w-full h-6 bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-[#2F2F2F]'} focus:outline-none focus:border-[#05C2DF] text-white text-base leading-6`}
                  id='email-input'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className='text-red-500 text-xs mt-1'>{errors.email}</span>}
              </div>

              {/* Phone Input */}
              <div className='flex flex-col items-start md:w-full md:max-w-none sm:max-w-[255px] sm:w-[80vw] max-sm:max-w-[255px] max-sm:w-[80vw] h-10 mb-6'>
                <label className='block h-4 text-sm text-[#929292] leading-none' htmlFor='phone-input'>
                  Phone*
                </label>
                <input
                  className={`w-full h-6 bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-[#2F2F2F]'} focus:outline-none focus:border-[#05C2DF] text-white text-base leading-6`}
                  id='phone-input'
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <span className='text-red-500 text-xs mt-1'>{errors.phone}</span>}
              </div>

              {/* Message Textarea */}
              <div className='flex flex-col items-start md:w-full md:max-w-none sm:max-w-[255px] sm:w-[80vw] max-sm:max-w-[255px] max-sm:w-[80vw] h-22 mb-6 md:mb-12 lg:mb-20'>
                <label className='block h-4 text-sm leading-none text-[#929292]' htmlFor='textarea'>
                  Message
                </label>
                <textarea
                  className='w-full lg:h-[4rem] md:h-[3.3rem] bg-transparent border-b border-[#2F2F2F] focus:outline-none focus:border-[#05C2DF] text-white text-base leading-6 resize-none'
                  id='textarea'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {/* Buttons Wrapper */}
              <div className='flex justify-between items-center pt-10'>
                <button
                  className='px-4 py-2 bg-[#05C2DF] hover:bg-white hover:text-[#05C2DF] text-white border border-[#05C2DF] rounded md:w-[200px] md:h-[48px] md:max-w-none sm:max-w-[255px] sm:w-[80vw] sm:h-[48px] max-sm:max-w-[255px] max-sm:w-[80vw] max-sm:h-[48px] transition-colors duration-300'
                  type='submit'
                >
                  Contact Us
                </button>
                <a
                  href='#page-top'
                  className='hidden md:block w-[49px] h-[50px] translate-y-[0.14rem] bg-cover bg-center transition-all duration-300'
                  style={{
                    backgroundImage: isHovered
                      ? "url('/images/Hov.svg')"
                      : "url('/images/Norm.svg')",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <p className='hidden md:hidden sm:block max-sm:block text-[#929292] mt-8 text-xs font-normal'>Our manager will reply you within 15 minutes</p>
            </form>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contacts