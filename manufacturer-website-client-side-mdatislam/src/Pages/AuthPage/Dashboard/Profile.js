import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import UpdateProfile from '../UpdateProfile';
import propic from '../../../image/PP.png'

const Profile = () => {
    const [user]= useAuthState(auth)
    const [profile, setProfile]= useState(null)
    // console.log(user)
    return (
    <div>
    <div class=" w-full mt-2">
  <div class="grid h-8 card place-items-center font-bold text-2xl">My Profile</div> 
  <div class="divider"></div> 
    <div class="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row mt-2">
   

  <div className='flex flex-col mb-3 py-4 flex-1'>
  <figure><img src={propic} style={{width:"150px"}} alt=""/></figure>
  <label className='btn btn-info w-36 mx-auto text-white btn-modal' for="profileUpdate" onClick={()=>setProfile(user)}> Update Profile</label>
  </div>
  <div className='flex-1'>
  <div class="card-body">
  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text font-bold">Full Name</span>
  </label>
  <h2 class="card-title"> {user?.displayName}</h2>
  <label class="label">
    <span class="label-text font-bold">Email Address</span>
  </label>
  <h2 class="card-title"> {user?.email}</h2>
</div>
  </div>
  </div>
</div>
</div>
{
    profile && <UpdateProfile
    user ={user}
    setProfile={setProfile}>
     profile={profile}

    </UpdateProfile>
}
    </div>
    );
};

export default Profile;

