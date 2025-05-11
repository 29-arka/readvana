import React, { useContext, useState } from 'react'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/shopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext)
  const [method,setMethod] = useState('cod');
  
  const [formData, setFormData] =useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value

    setFormData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async(event) => {
    event.preventDefault()
    try {
      let orderItems = []
      for(const items in cartItems) {
        if(cartItems[items] > 0) {
          const itemInfo = structuredClone(products.find(product=> product._id === items))
          if (itemInfo) {
            itemInfo.size == items
            itemInfo.quantity = cartItems[items]
            orderItems.push(itemInfo)
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch(method){
        //API calls for cod
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
          if(response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message )
          }
          break;
        case 'stripe':
          const responseStripe = await axios.post(backendUrl+'/api/order/stripe',orderData,{headers:{token}})
          if(responseStripe.data.success) {
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }



          break;
        default:

        break;
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* -----left side----- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' required/>
            <input onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' required/>
          </div>
          <input onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' required/>
          <input onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' required/>
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' required/>
            <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' required/>
          </div>
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' required/>
            <input onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' required/>
          </div>
          <input onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' required/>
      </div>
      {/* -----Right Side----- */}
      <div className='mt-12'>
        <div className='w-full'>
          <CartTotal/>
        </div>
        <div className='w-full'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* ---Payment Method--- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
              <div onClick={()=>setMethod('stripe')}className='flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer '>
                <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
              </div>
              <div onClick={()=>setMethod('razorpay')}className='flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer '>
                <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
              </div>
              <div onClick={()=>setMethod('cod')}className='flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer '>
                <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <p className='text-gray-500 txt-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button type='submit' className='mt-5 bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer '>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
