import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import PopularProducts from '../PopularProducts/PopularProducts';
import LatestProducts from '../LatestProducts/LatestProducts';
import AdBanner from '../AdBanner/AdBanner';
import AllProducts from '../AllProducts/AllProducts';
import BottomBanner from '../BottomBanner/BottomBanner';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <PopularProducts></PopularProducts>
            <LatestProducts></LatestProducts>
            <AdBanner></AdBanner>
            <AllProducts></AllProducts>
            <BottomBanner></BottomBanner>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;