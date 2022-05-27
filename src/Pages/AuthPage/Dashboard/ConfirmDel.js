import React from 'react';
import { toast } from 'react-toastify';

const ConfirmDel = ({order, setDel,del, refetch}) => {
    const { _id}=order

    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`,{
          method:'DELETE',
          headers:{
            'content-type':'application/json'
          },
          
        })
        .then(res=>res.json())
        .then(result=>{
          if(result.success){
            toast.success('Delete success')
          }
          else{
            toast('Not delete')
          }
          setDel(null)
          refetch()
        })
       
      }
    return (
        <div>
            <input type="checkbox" id="del" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg"> Are You Sure to Delete it?</h3>
    <div class="modal-action">
      <label for="del" class="btn">Cancel</label>
      <button onClick={()=>handleDelete(_id)} class="btn btn-error">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmDel;