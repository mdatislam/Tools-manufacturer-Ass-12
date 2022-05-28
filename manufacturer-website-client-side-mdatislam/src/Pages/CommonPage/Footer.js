
import React from "react";


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
<div className='bg-[#0c1a32]'>
<footer class="footer p-10 bg-[#0c1a32] text-white">
  <div>
  <span class="footer-title">About-us</span> 
  <p>
            we provide a unique solution for warehousing space for business and
            consumers.It has roots in a piece of classical Latin literature from
            45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur.
            
          </p>
  </div> 
  
  <div>
    <span class="footer-title">Contact Info</span> 
    <p className="flex"> 
    <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></span>
<span> &nbsp;&nbsp;92/2 Canopus Building, Rangpur Sadar,Rangpur</span></p>
<p className="flex"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
</svg>&nbsp; &nbsp; +880132843476 | (02) 5437262</p>
<p className="flex"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>&nbsp;&nbsp;  info@warehouse.com | support@warehouse.com</p>
  </div> 
  <div>
    <span class="footer-title">Newsletter</span> 
    <div class="form-control w-80">
      <label class="label">
        <span class="text-white">Enter your email address</span>
      </label> 
      <div class="relative">
        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>

<hr className="w-100 bg-light" />
      <h6 className="text-center text-white">&copy;{year} Deposito All Rights Reserved</h6>


      {/* <div className="info-container">
        <div>
          <h5 className="">About</h5>
          <p>
            we provide a unique solution for warehousing space for business and
            consumers.It has roots in a piece of classical Latin literature from
            45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur.
            
          </p>
        </div>
        <div>
          <h5>Contact Info</h5>
          <p>  92/2 Canopus Building, Rangpur Sadar,Rangpur</p>
          <p>+880132843476 | (02) 5437262</p>
          <p>  info@warehouse.com | support@warehouse.com</p>
        </div>
        <div>
          <h5>Subscribe</h5>
          <p>Sign Up To Our Newsletter And Get The Latest Offers.</p>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Your Email Address"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <button className="btn btn-warning mt-2">Get notified</button>
          </div>
        </div>
      </div>
      <hr className="w-100 bg-light" />
      <h6 className="text-center">&copy;{year} Deposito All Rights Reserved</h6> */}
    </div>
  );
};

export default Footer;