import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image,setImage] = useState(false)
  const [name,setName] = useState("");
  const [description, setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("");
  const [bestseller,setBestseller] = useState(false);
  const [author,setAuthor] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append("name",name)
      formData.append("author",author)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("bestseller",bestseller)
      image && formData.append("image1",image)

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token},})
      if(response.data.success) {
        toast.success(response.data.message)
        setName('')
        setAuthor('')
        setDescription('')
        setImage(false)
        setPrice('')
        setCategory('')
        setBestseller(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div >
        <p className='mb-2'>Upload Image</p>
        <div className='flex-gap-2'>
          <label htmlFor="image" className='cursor-pointer'>
            <img className='w-20' src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden/>
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" id="name" placeholder='Type here' required/>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Author Name</p>
        <input onChange={(e)=>setAuthor(e.target.value)} value={author} className='w-full max-w-[500px] px-3 py-2' type="text" id='author' placeholder='Type here' required/>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" id='description' placeholder='Write content here' required/>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <input onChange={(e)=>setCategory(e.target.value)} value={category} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' id='category' required/>
        </div>
        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full max-w-[500px] px-3 py-2' type="Number" placeholder='Type here' id='price' required/>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={(e)=>setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller'/>
        <label className='cursor-pointer ' htmlFor="bestseller">
          Add to Best Seller
        </label>
      </div>
      <button className='w-28 py-3 mt-4 bg-black text-white cursor-pointer' type='submit' >ADD</button>

    </form>
  )
}

export default Add
