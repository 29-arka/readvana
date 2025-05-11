import React, {useContext} from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title';
const CartTotal = () => {
    const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full max-w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTALS'}/>
        </div>
        <div className='flex flex-col gap-2 mt2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr className='border-gray-400'/>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {getCartAmount()=== 0 ? 0 : delivery_fee}.00</p>
            </div>
            <hr className='border-gray-600'/>
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartAmount()=== 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal
