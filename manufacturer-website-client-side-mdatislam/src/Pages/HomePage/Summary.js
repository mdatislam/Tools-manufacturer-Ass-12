import React from 'react';
import satisfaction from '../../image/client-satisfaction-logo.png'
import sales from '../../image/product sale.png'
import store from '../../image/finalsotre.jpg'

const Summary = () => {
    return (
        <div>
            <div class="stats shadow mt-6 py-10 bg-slate-200 mb-8 container mx-auto ml-4 bg-[#353535]">

            <div class="stat flex justify-center ">
    <div class=" text-white flex flex-row">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src={store} alt={store}/>
                        </div>
                    </div>
                <div className='ml-3 text-white '>
                    <div class="stat-title">world Class</div>
                    <div class="stat-value">70+</div>
                    <div class="stat-desc text-xl font-bold">Store Location</div>
                </div>
    </div>
    
  </div>


  
  <div class="stat flex justify-center ">
    <div class=" text-white flex flex-row">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src={sales} />
                        </div>
                    </div>
                <div className='ml-3 text-white '>
                    <div class="stat-title">Per Month</div>
                    <div class="stat-value">900+</div>
                    <div class="stat-desc text-xl font-bold">Product Sales</div>
                </div>
    </div>
    
  </div>


  <div class="stat flex justify-center ">
    <div class=" text-white flex flex-row">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src={satisfaction} />
                        </div>
                    </div>
                <div className='ml-3 text-white '>
                    <div class="stat-title">Customer</div>
                    <div class="stat-value">99.99%</div>
                    <div class="stat-desc text-xl font-bold">Satisfaction</div>
                </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Summary;