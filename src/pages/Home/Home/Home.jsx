import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;