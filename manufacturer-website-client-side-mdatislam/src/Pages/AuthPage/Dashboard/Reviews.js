import React, { useEffect, useState } from 'react';
import DisplayReviews from './DisplayReviews';

const Reviews = () => {
  const [reviews,setReviews]= useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/review',{
      method:'GET',
      headers:{
        'content-type':'application/json'
      },
    })
    .then(res=> res.json())
    .then(result=> {
      console.log(result)
      setReviews(result)
    })

  },[])
    return (
        <div className='mt-6 py-10 bg-slate-200 mb-8 container mx-auto'>
            <h2 className='uppercase  text-rose-700 text-center  text-3xl font-bold py-5'>Customer Reviews</h2>
           
        <div className='sm:container sm:mx-auto px-5 grid grid-cols-1  gap-4 mt-4 py-5'>
          {
            reviews.map(review =><DisplayReviews
            review={review}
            
            ></DisplayReviews>)
          }
        </div>
            
        </div>
    );
};

export default Reviews;