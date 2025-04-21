import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import PopularProducts from '../PopularProducts/PopularProducts';
import LatestProducts from '../LatestProducts/LatestProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopularProducts></PopularProducts>
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;