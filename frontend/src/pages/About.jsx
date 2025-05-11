import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-600'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis eligendi accusantium, deserunt impedit fugiat, dignissimos hic laborum atque nostrum voluptas temporibus odit voluptate eveniet? Eius ad exercitationem in doloribus?</p>
        < p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, tempora. Quas a aspernatur quidem autem id facere possimus nulla doloribus minima mollitia molestiae non, ipsa enim laborum adipisci iste libero.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta, recusandae facilis quae deleniti voluptatem perferendis perspiciatis nesciunt quaerat illum deserunt a animi, facere fugit officia quibusdam sint atque odit!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md: flex-row text-sm mb-20'>
        <div className=' md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia, porro mollitia facilis molestias doloribus magnam minus eos iusto vitae. Ullam non minima similique aspernatur laborum numquam, deserunt itaque natus?</p>
        </div>
        <div className=' md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia, porro mollitia facilis molestias doloribus magnam minus eos iusto vitae. Ullam non minima similique aspernatur laborum numquam, deserunt itaque natus?</p>
        </div>
        <div className=' md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia, porro mollitia facilis molestias doloribus magnam minus eos iusto vitae. Ullam non minima similique aspernatur laborum numquam, deserunt itaque natus?</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
