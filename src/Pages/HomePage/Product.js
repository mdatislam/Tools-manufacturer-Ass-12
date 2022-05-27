import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate()
    const {img,_id,unitPrice,Brand,name, stock ,Description,minimuOrderQuantity }=product


    const goPurchase=(id)=>{
        navigate(`/Purchase/${id}`)
    }

    return (
        <div>
          <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
  <div className='flex flex-row justify-space'>
      <div className="flex-1">
      <h2 class="text-sm font-bold"> <span className='font-bold text-pink-400 text-base'>Name</span> : {name}</h2>
      <h2 class=""> <span className='font-bold text-pink-400 text-base'>Unit Price</span> : <span className=''> $ {unitPrice}</span></h2>
      <h2 class=""> <span className='font-bold text-pink-400 text-base'>Min Order qty</span>: {minimuOrderQuantity}</h2>
      </div>
      <div className="flex-1">
      <h2 class=""> <span className='font-bold text-pink-400 text-base'>Brand</span> : {Brand}</h2>
      <p class=""><span className='font-bold text-pink-400 text-base'>Stock :</span>{stock}</p>
      
      </div>
      </div> 
    <div class="card-actions justify-center">
      <button onClick={()=>{goPurchase(_id)}} class="btn btn-primary">Explore</button>
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default Product;