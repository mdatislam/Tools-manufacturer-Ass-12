import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Dashbord from './Dashbord';

const Dashbord = () => {
    return (
        <div>
          <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content mt-3">
   
   {/*  <h2 className='text-primary text-2xl font-bold text-center mb-5'> Welcome My Favorit Dashbord</h2> */}
    <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-60 bg-[#eac13be4] text-white font-bold text-xl">
     {/*  <!-- Sidebar content here --> */}
     <li><Link to ="/Dashboard ">MyProfile</Link></li>
      <li><Link to ="/Dashboard/MyOrderList ">MyOrderList</Link></li>
      <li><Link to ="/Dashboard/ReviewAdd "> Add Review</Link></li>
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashbord;