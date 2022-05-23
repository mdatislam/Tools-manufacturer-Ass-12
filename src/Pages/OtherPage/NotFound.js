import React from 'react';
import notFound from '../../image/404-Pageee.png'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate= useNavigate()
    const handleHome=()=>{
        navigate('/')
    }
    return (
        <div class="hero min-h-screen" style={{backgroundImage:`url(${notFound})`}}>
  <div class="hero-overlay bg-opacity-60 "></div>
  <div class="hero-content text-center text-white-content mb-16">
    <div class="max-w-md ">
      <button onClick={handleHome} class="btn  btn-error text-white">BACK HOME PAGE</button>
     
      
    </div>
  </div>
</div>
    );
};

export default NotFound;