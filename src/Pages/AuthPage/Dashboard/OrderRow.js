import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmDel from './ConfirmDel';

const OrderRow = ({order,refetch,index}) => {
    const {_id,customerName,OrderedProduct,orderQuantity}= order
    // refetch()
    const [del,setDel]= useState()

    
    return (
      <>
          <tr class="hover">
        <th>{index+1}</th>
        <td>{customerName}</td>
        <td>{OrderedProduct}</td>
        <td>{orderQuantity}</td>
        <td>Unpaid</td>
        <td>
      {/*   <button onClick={()=>handleDelete(_id)} class="btn btn-square btn-outline btn-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button> */}
 <label className='btn btn-square btn-outline btn-error text-white btn-modal' for="del" onClick={()=>setDel(order)}> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
        </td>
       
      </tr>
      {
        del && <ConfirmDel
        del={del} order={order} setDel={setDel}
        refetch={refetch}></ConfirmDel>
      }
       </>
     
    );
};

export default OrderRow;