import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-row items-start sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='w-50' alt=""/>
            <p className='w-full md:w-2/3 text-gray-600'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi tenetur et est quibusdam aperiam quo exercitationem quasi repudiandae obcaecati?
            </p>
        </div>
        <div >
            <p className='text-xl font-medium mb-10'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-10'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 123-456-7890</li>
                <li>contact@readvana.com</li>
            </ul>
        </div>
      </div>
      <div>
            <p className='py-5 text-sm text-center'>Copyright 2025@ readvana.in - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
