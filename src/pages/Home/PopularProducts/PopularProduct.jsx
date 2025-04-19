import React from 'react';

const PopularProduct = ({ popularProduct }) => {
    const {img, title,price } = popularProduct;
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl py-4">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <p className='text-lg font-medium text-[#092B42]'>${price}</p>
                    <div className="card-actions ">
                        <button className="btn bg-[#527A9A] w-full text-lg text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;