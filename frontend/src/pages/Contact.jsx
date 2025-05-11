import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-600'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-2/4 md:ma-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 willms Station <br /> Suite 350, New Delhi, India</p>
          <p className='text-gray-500'>Tel: (+91) 123-456 <br /> Email: admin@readvana.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Readvana</p>
          <p className='text-gray-500'>Learn more about our terms and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
          <p></p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
