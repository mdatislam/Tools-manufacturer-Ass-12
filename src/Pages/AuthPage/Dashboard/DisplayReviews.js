import React from 'react';

const DisplayReviews = ({review}) => {
    const {name,photoUrl,comment,ratting}= review
    return (
        <div>
            <div class=" card card-compact w-full bg-base-100 shadow-xl px-5 py-3">
  <div className='flex flex-row justify-self-auto'>
  
            <div class="avatar">
            <div class="w-24 mask mask-squircle">
            < figure><img src={photoUrl} alt="{name}" /></figure>
            </div>
            </div>
    
 
                <div className='ml-10'>
                        <h2 class="card-title">{name}</h2>
                        <small className='italic leading-3'>customer</small>
                        <p className='font-bold'> <span className='text-pink-400'>Ratting:</span> &nbsp; {ratting}</p>
                </div>
</div>
    
  <p className='mt-5'>{comment}</p>

</div>
            
        </div>
    );
};

export default DisplayReviews;