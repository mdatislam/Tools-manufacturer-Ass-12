import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../CommonPage/Loading';
import AllUsersRow from './AllUsersRow';

const AllUser = () => {

    const {data:users, isLoading, refetch}= useQuery('users',()=>
    fetch('http://localhost:5000/users').then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-blue-600 text-xl text-center mb-2"> Total User Found { users.length}</h2>
            <div class="overflow  w-full">
  <table class=" table mx-auto border">
   {/*  <!-- head --> */}
    <thead className=' text-red-500 bg-blue-600'>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Photo/Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
        {
         users.map(user => <AllUsersRow
         key={user._id}
         user={user}
         refetch={refetch}></AllUsersRow>)
     }

      
     
      
      
    </tbody>
    
    
    
  </table>
</div>
                


        </div>
    );
};

export default AllUser;