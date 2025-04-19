import React, { useEffect, useState } from 'react';
import PopularProduct from './PopularProduct';

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
                <h1 className='text-2xl font-medium'>Popular Product</h1>
                <p>See all</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    popularProducts.map(popularProduct =><PopularProduct popularProduct={popularProduct}></PopularProduct>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;