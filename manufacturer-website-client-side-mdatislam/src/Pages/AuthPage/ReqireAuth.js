import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../CommonPage/Loading';

const ReqireAuth = ({children}) => {
    const [user,loading]= useAuthState(auth)
    const location= useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(!user){

      return <Navigate to='/Login' state={{from:location}}></Navigate>
    }

    return children
};

export default ReqireAuth;