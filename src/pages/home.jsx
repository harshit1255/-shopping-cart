import React from 'react'
import {products} from '../products.jsx'
import ProductCart from '../components/productCart.jsx'

const Home = () => {
  return (
    <div>
        <h1 className="text-3xl my-5">List products</h1>
        <div className='grid lg:grid-cols-4 md:grid-col-3 sm:grid-col-2 gap-5' >
        {products.map((product,key)=>
        
           <ProductCart key={key} data = {product}></ProductCart> 
        )}
        </div>
    </div>
  )
}

export default Home