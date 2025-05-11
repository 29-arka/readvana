import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='textgray-400 mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis excepturi voluptas autem?
        </p>
        <form onSubmit={onSubmitHandler} className=' w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 bg-gray-200 '>
            <input className='p-2 w-full sm:flex-1 outline-none' type="email" placeholder='Enter yout email' required/>
            <button type='submit' className=' bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
