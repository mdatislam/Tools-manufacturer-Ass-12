import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate()
    const {img,_id,unitPrice,Brand,name,Stock,Description,minimuOrderQuantity }=product
    const goPurchase=(id)=>{
        navigate(`/Purchase/${id}`)
    }

    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
  <figure><img src={img} alt="" /></figure>
  <div class="card-body ">
      <div className='flex flex-row justify-space'>
      <div className="flex-1">
      <h2 class="text-sm font-bold"> <span className='font-bold text-pink-400 text-base'>Name</span> : {name}</h2>
      <h2 class=""> <span className='font-bold text-pink-400 text-base'>Unit Price</span> :  $ {unitPrice}</h2>
      <h2 class=""> <span className='font-bold text-pink-400 text-base'>Min Order qty</span>: {minimuOrderQuantity}</h2>
      </div>
      <div className="flex-1">
      <h2 class=""> <span className='font-bold text-pink-400 text-base'>Brand</span> : {Brand}</h2>
      <h2 class=""><span className='font-bold text-pink-400 text-base'>Stock</span> : {Stock}</h2>
      </div>
      </div>
    
    <p><span className='font-bold text-pink-400 text-base'>Product-info</span> : {Description}</p>
    <div class="card-actions justify-center">
      <button onClick={()=>{goPurchase(_id)}} class="btn btn-outline">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Product;