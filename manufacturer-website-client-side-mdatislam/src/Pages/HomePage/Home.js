import React from 'react';
import Reviews from '../AuthPage/Dashboard/Reviews';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
           
            
        </div>
    );
};

export default Home;