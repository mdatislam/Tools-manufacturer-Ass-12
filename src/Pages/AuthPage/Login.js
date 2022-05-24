import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import loginImg from "../../image/login.png";
import google from "../../image/gogle.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../CommonPage/Loading";
import { toast } from "react-toastify";
import { async } from "@firebase/util";




const Login = () => {
  const navigate= useNavigate()
  const {register, handleSubmit,formState: { errors }, } = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword,guser,gloading,gerror,] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, Perror] = useSendPasswordResetEmail(auth);
  const  location = useLocation()
  let from = location.state?.from.pathname || '/'
  

  if(loading || gloading || sending){
    return <Loading></Loading>
}
let ErrorMessage
if(error || gerror || Perror){
  ErrorMessage= <p className="text-red-500 ">{error?.message ||gerror?.message || Perror?.message} </p>
}
  const onSubmit = (data) =>{
      signInWithEmailAndPassword(data.email,data.password)
     
  }

  if(user || guser){
    toast('Welcome our Tools Manufacturer')
    navigate(from,{replace:true})
  
  }
/* const handleEmail=(e)=>{
  setEmail(e.target.value)
  
}
console.log(email)
 const handlePassword = async ()=>{
   
    console.log(email)
    if(email){
      await sendPasswordResetEmail(email)
      toast('Password Rest mail send to Email Account')
    }
    else{
      toast.error('Please provide email')
    }
   
  }  */
  //  console.log(data);
  return (
    <div>
        <div class="flex min-h-screen bg-base-200 justify-center items-center ">
      <div class="hero-content  flex-col lg:flex-row  ">
       <div >
       <div className="text-center">
          <button onClick={() => signInWithGoogle()}
            class="btn btn-wide btn-secondary text-primary uppercase  "
          >
          <img style={{ height: "30px" }} src={google} alt="" /> &nbsp; Continue with google
          </button>
          </div>
          <img className="mt-2" src={loginImg}  alt=" login img" />
         
       </div>
       <div class="divider lg:divider-horizontal">OR</div> 
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="card w-full shadow-2xl bg-base-100 ">
            <h1 class="text-2xl text-primary text-center mt-3 font-bold">
              Login now!
            </h1>
            <div class="card-body">
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
                  value="SIGN IN"
                  className="btn btn-primary w-full max-w-xs"
                />
              </div>
              {/* <small><button onClick={handlePassword} className="btn btn-link no-underline">  Forgot password?</button></small> */}
              <p> Don't have Account ? <Link  className="text-blue-600" to='/SignOut'>Create New Account</Link></p>
            </div>
          </div>
        </form>
       
      </div>
      
    </div>
    
    </div>
  );
};

export default Login;
