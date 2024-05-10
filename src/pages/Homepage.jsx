import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Homepage = () => {
    const [product, setProduct] = useState([])
    const getData = async()=>{
        const {data} = await axios.get('https://dummyjson.com/products')
        
        setProduct(data.products)

    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <div className='flex flex-wrap p-11'>
            {product?.map((item,i)=>{
                return <ProductCard product={item} key={i}/>
            })}
        </div>
    );
}

export default Homepage;
