import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";


const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);
    return (
        <div className="container mx-auto mb-12">
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-medium'>All Products</h1>
                <p>See all</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    allProducts.map(allProduct =><AllProduct allProduct={allProduct}></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;