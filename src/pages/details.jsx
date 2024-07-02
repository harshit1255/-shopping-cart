import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../products'
import { useDispatch } from 'react-redux'
import { addTocart } from '../stores/cart'
const Details = () => {
    const {slug} = useParams();
    const [detail,setDetail] = useState([]);
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(()=>{
        const finddetail = products.filter(product=>product.slug===slug)
        if(finddetail.length>0)
            {
                setDetail(finddetail[0])
            }
        else
        {
            window.location.href='/'
        }
    })
    const handleminus=()=>{
        setQuantity(quantity-1<1?1:quantity-1)

    }
    const handleplus = ()=>
    {
        setQuantity(quantity+1)
    }
    const handlecart =()=>
        {
            dispatch(addTocart({productId:detail.id,quantity:quantity}))
        }
  return (
<div>
    <h2 className='text-3xl text-center'>PRODUCT DETAIL</h2>
    <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
            <img src={detail.image} alt='' className='w-full'></img>
        </div>
        <div className='flex flex-col gap-5'>
            <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
            <p className='font-bold text-3xl'>
                {detail.price}
            </p>
            <div className='flex gap-5'>
                <div className='flex gap-2 justify-center items-center'>
                    <button onClick={handleminus} className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>-</button>
                    <span className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
                    <button onClick={handleplus} className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>+</button>
                </div>
                <button onClick={handlecart} className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl'>Add to cart</button>
            
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, architecto? Eum culpa modi ab officiis pariatur voluptates, deserunt omnis, vel, atque expedita quam. Sed delectus earum molestiae illo repellendus sequi!</p>
        </div>
    </div>
        
</div>
  )
}

export default Details