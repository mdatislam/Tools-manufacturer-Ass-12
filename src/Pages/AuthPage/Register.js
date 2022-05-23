import React from 'react';
import { useForm } from "react-hook-form";
import loginImg from "../../image/login.png";
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../CommonPage/Loading';
import { toast } from 'react-toastify';


const Register = () => {
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword,user,loading,error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, Uerror] = useUpdateProfile(auth);

    const {register, handleSubmit,formState: { errors }, } = useForm();
  
    if(loading || updating){
      return <Loading></Loading>
  }
  let ErrorMessage
  if(error || Uerror){
    ErrorMessage= <p className="text-red-500 ">{error?.message ||Uerror?.message} </p>
  }

    const onSubmit = async (data) =>{
        const email = data.email;
        const password = data.password;
      
        await createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName: data.name });
        // console.log(data);
    }
   

    if(user){
      toast.success('User Create successfully')
        navigate('/')
    }
    
     
    return (
        <div>
        <div class="flex min-h-screen bg-base-200 justify-center items-center ">
      <div class="hero-content  flex-col lg:flex-row  ">
       <div >
       
          <img className="mt-2" src={loginImg}  alt=" login img" />
         
       </div>
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="card w-full shadow-2xl bg-base-100 ">
            <h1 class="text-2xl text-primary text-center mt-2 font-bold">
              Register now!
            </h1>
            <div class="card-body">
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  w-full
                  max-w-xs
                  type="text"
                  required
                  placeholder="Your Name"
                  class="input input-bordered"
                  {...register("name")}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  w-full
                  max-w-xs
                  type="email"
                  placeholder="email"
                  class="input input-bordered"
                  {...register("email", {
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a Valid Email",
                    },
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  w-full
                  max-w-xs
                  type="password"
                  placeholder="password"
                  class="input input-bordered"
                  {...register("password", {
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                    required: {
                      value: true,
                      message: "password is Required",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {ErrorMessage}
              <div class="form-control mt-2">
                <input
                  type="submit"
                  value="REGISTER"
                  className="btn btn-primary w-full max-w-xs"
                />
              </div>
              <p>Have Account ? <Link  className="text-blue-600" to='/Login'> Please Login</Link></p>
            </div>
          </div>
        </form>
        
      </div>
      
    </div>
    
    </div>
    );
};

export default Register;