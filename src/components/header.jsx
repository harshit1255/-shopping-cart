import React from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { tooglestatus } from '../stores/cart'
const Header = () => {

    const [totalquantity, setTotalquantity] = useState(0)
    const carts = useSelector(store=>store.cart.items)
    
    const status = useSelector(store=>store.cart.statustab)
    const dispatch = useDispatch()
    useEffect(() => {
      let total = 0;
      carts.forEach(element => {
        total+=element.quantity
      });
      setTotalquantity(total);
    }, [carts])
    const handlestatus = ()=>
        {  
            dispatch(tooglestatus())
        }
    
  return (
    <header className='flex justify-between items-center mb-5'>
        <Link to='/' className='text-xl font-semibold'>Home</Link>
        <div onClick={handlestatus} className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative'>
        <img src={iconCart} alt='' className='w-6'></img>
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalquantity}</span>
        </div>
    </header>
  )
}

export default Header