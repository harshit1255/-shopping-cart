import React, { useState } from 'react'
import { products } from '../products';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const CartItem = (props) => {
    const {productId,quantity} = props.data;
    const [detail , setdetail ] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
      const finddetail = products.filter(product=>product.id ===productId)[0]
      setdetail(finddetail)
    
    }, [productId])
    
    const handleminus =()=>
        {
            dispatch(changeQuantity({productId,quantity:quantity-1}))
        }
    
    const handleplus =()=>
    {
        dispatch(changeQuantity({productId,quantity:quantity+1}))
    }
    
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 borderslate-700 gap-5 round-md'>
        <img src={detail.image} className='w-12'></img>
        <h3>{detail.name}</h3>
        <p>${detail.price*quantity}</p>
        <div className='w-20 flex justify-between gap-2'>
            <button onClick={handleminus} className='bg-gray-200 rounded-full w-6 h-6 text-cyan-500'>-</button>
            <span>{quantity}</span>
            <button onClick={handleplus} className='bg-gray-200 rounded-full w-6 h-6 text-cyan-500'>+</button>
        </div>
    </div>
  )
}

export default CartItem