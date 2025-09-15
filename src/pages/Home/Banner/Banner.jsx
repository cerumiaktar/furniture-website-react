import React from 'react';

const Banner = () => {
    return (
        <div className='mb-12'>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/q3Cy1cj5/Rectangle-2.png)",
                }}
            >
                {/* <div className="hero-overlay"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">Elevate Your Home Decor with Our 
                        Premium Furniture Collection</h1>
                        <button className="btn text-lg dark:bg-white dark:text-black">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;