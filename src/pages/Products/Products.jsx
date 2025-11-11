import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    } ,[])
    return (
        <div>
            <div
                className="hero h-[400px]"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/HZc1dRK/product-banner.png)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Products</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 container mx-auto mt-12 mb-12">
                {
                    products.map(product =><Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;