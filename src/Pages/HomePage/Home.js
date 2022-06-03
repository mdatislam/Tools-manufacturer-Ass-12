import React from 'react';
import Reviews from '../AuthPage/Dashboard/Reviews';
import Banner from './Banner';
import Products from './Products';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
           
            
        </div>
    );
};

export default Home;