import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './cartitem'
import { tooglestatus } from '../stores/cart'

const CartTab = () => {
    const carts= useSelector(store => store.cart.items)
    const statustab = useSelector(store=>store.cart.statustab)
    const dispatch = useDispatch();
    const handleclick =()=>
        {
            dispatch(tooglestatus())
        }
    return <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
     transform  ${statustab===true?'translate-x-full':''}`}>
        <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
        <div className='p-5'>
            {carts.map((item,key)=><CartItem key={key} data={item}></CartItem>)}
        </div>
        <div className='grid grid-col-2'>
            <button className='bg-black text-white' onClick={handleclick}>CLOSE</button>
            <button className='bg-amber-600'>CHECKOUT</button>
        </div>
        
    </div>
}

export default CartTab