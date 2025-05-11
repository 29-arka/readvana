import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
const List = ({token}) => {

  const [list,setList] = useState([])
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl+'/api/product/list')
      if(response.data.success){
        setList(response.data.products);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl+'/api/product/remove',{id} , {headers:{token}})
      if(response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  useEffect(()=>{
    fetchList()
  },[])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='w-full flex flex-col gap-2'>
        {/* List Table Title */}
        <div className='w-full hidden md:grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 bg-gray-200 text-sm gap-2'>
          <b className='text-center'>Image</b>
          <b className='text-center'>Name</b>
          <b className='text-center'>Author</b>
          <b className='text-center'>Category</b>
          <b className='text-center'>Price</b>
          <b className='text-center'>Action</b>
        </div>
        {/* product list */}
        {
          list.map((item, index) => (
          <div key={index} className='w-full grid grid-cols-3 md:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center gap-2 py-2 px-3 bg-gray-100 text-sm rounded'>
            <img className='w-12 object-cover mx-auto' src={item.image[0]} alt={item.name} />
            <p className='text-center'>{item.name}</p>
            <p className='text-center'>{item.author}</p>
            <p className='text-center'>{item.category}</p>
            <p className='text-center'>{currency}{item.price}</p>
            <p onClick={()=>removeProduct(item._id)} className='text-center text-red-500 cursor-pointer text-lg'>X</p>
          </div>
          ))
        }
      </div>
    </>
  )
}

export default List
