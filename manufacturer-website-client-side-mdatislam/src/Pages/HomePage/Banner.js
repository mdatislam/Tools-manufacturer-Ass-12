import React from "react";
import banner1 from "../../image/baner1.jpg";
import banner2 from "../../image/Banner2.jpg";
import banner3 from "../../image/banner3.jpg";

const Banner = () => {
  return (
    <div>
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    
     <div class="hero h-96 rounded-box" style={{backgroundImage:`url(${banner1})`}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">WE ARE EXPERTS IN QUALITY TOOLKITS </h1>
      <p class="mb-5">We are committed to supplying our customers with quality tools and reliable services through our international commercial and production network..</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" class="carousel-item relative w-full">
    
     <div class="hero h-96 rounded-box" style={{backgroundImage:`url(${banner2})`}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold uppercase">What makes us special.</h1>
      <p class="mb-5">Our professional team works to increase productivity and cost effectiveness on the market.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide3" class="carousel-item relative w-full">
    
     <div class="hero h-96 rounded-box" style={{backgroundImage:`url(${banner3})`}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold uppercase">Successful business built
on trust</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div> 
  
  
</div>
    </div>
  );
};

export default Banner;
