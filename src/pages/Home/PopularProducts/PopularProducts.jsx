import React, { useEffect, useState } from 'react';
import PopularProduct from './PopularProduct';
import { Link } from 'react-router-dom';

const PopularProducts = () => {

    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() =>{
        fetch('popular.json')
        .then(res =>res.json())
        .then(data =>setPopularProducts(data))
    } ,[])
    return (
        <div className='container mx-auto mb-12'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-medium dark:text-black'>Popular Product</h1>
                <Link to='/products'><p className='dark:text-[#333333]'>See all</p></Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
                {
                    popularProducts.map(popularProduct =><PopularProduct popularProduct={popularProduct}></PopularProduct>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;