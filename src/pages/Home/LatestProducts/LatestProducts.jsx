import { useEffect, useState } from "react";
import LatestProduct from "./LatestProduct";
import { Link } from "react-router-dom";


const LatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() =>{
        fetch("latest.json")
        .then(res=>res.json())
        .then(data=>setLatestProducts(data))
    } ,[]);
    return (
        <div className="container mx-auto mb-12">
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-medium dark:text-black'>Latest Product</h1>
                <Link to='/products'><p className="text-[#333333]">See all</p></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {
                    latestProducts.map(latestProduct =><LatestProduct latestProduct={latestProduct}></LatestProduct>)
                }
            </div>
        </div>
    );
};

export default LatestProducts;