import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import { Link } from "react-router-dom";


const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    const [dataLength, setDataLength] = useState([12])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);
    return (
        <div className="container mx-auto mb-12">
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-medium dark:text-black'>All Products</h1>
                <Link to='/products'><p className="dark:text-[#333333]">See all</p></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {
                    allProducts.slice(0, dataLength).map(allProduct =><AllProduct allProduct={allProduct}></AllProduct>)
                }
            </div>
            <div className="mt-12 text-center">
                <button onClick={() => setDataLength(allProducts.length)} className="btn text-[#092B42] border border-[#092B42] dark:bg-white">Load More</button>
            </div>
        </div>
    );
};

export default AllProducts;