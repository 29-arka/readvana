import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          tempData.push({
            _id: item,
            quantity: cartItems[item]
          })
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products])
  return (
    <div className='border-t border-gray-600 pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b border-gray-400 text-gray-700 grid grid-cols-[4fr_1fr_1fr] gap-4 items-start'>
                {/* Column 1: Product Info */}
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <p className='text-xs sm:text-sm text-gray-500'>{productData.author}</p>
                    <p className='text-base sm:text-lg font-medium mt-2'>{currency}{productData.price}</p>
                  </div>
                </div>

                {/* Column 2: Input) */}
                <div className='flex justify-center items-start'>
                  <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, Number(e.target.value))} className='border w-12 sm:w-20 px-2 py-1 text-center' type='number' min={1} defaultValue={item.quantity} />
                </div>

                <div className='flex justify-center items-start'>
                  <img onClick={() => updateQuantity(item._id, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
                </div>
              </div>

            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='mt-5 bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>PROCEED TO CHECKOUT</button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
