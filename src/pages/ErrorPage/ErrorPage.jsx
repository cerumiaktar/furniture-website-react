import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mt-20 mb-20 space-y-4'>
            <img className='mx-auto' src="https://i.ibb.co.com/Txs2B5Wp/error-1.png" alt="" />
            <div className='text-center'>
                <Link to='/'><button className='btn bg-[#527A9A] text-white dark:bg-white dark:text-black'>Go to Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;