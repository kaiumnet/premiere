import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
  return (


    <div className='bg-[#100A55] pt-20 mt-50'>
      <footer className="footer sm:footer-horizontal text-base-200 p-10 mt-20">
        <aside>
          <img className='w-6/12' src={logo} alt="" />

          <h2 className='text-2xl'>ACME Industries Ltd.</h2>
          <p>
            Providing reliable tech since 1992
          </p>
        </aside>


          <div className='mr-20'>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">FAQs</a>
            <a className="link link-hover">Book Now</a>
            <a className="link link-hover">Contact Us</a>
          </div>
          <div className='mr-20'>
            <h6 className="footer-title">For Sale and Rent</h6>
            <a className="link link-hover">Owner Services</a>
            <a className="link link-hover">Manage Your Rental</a>
            <a className="link link-hover">Grow Your Portfolio</a>
            <a className="link link-hover">Owner Login</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms and Condition</a>
          </div>
          <div>
            <h6 className="footer-title">Contact Information</h6>
            <p><i class="fa-solid fa-phone-volume bg-blue-950 p-3 rounded-4xl"></i> Phone: (123) 767-2068</p>
            <p><i class="fa-solid fa-envelope bg-blue-950 p-3 rounded-4xl"></i> Email :
              imfo@premierestaysmiami.com</p>
            <p><i class="fa-solid fa-location-dot bg-blue-950 p-3 rounded-4xl"></i> #1 Darling Street, St. Thomas Village, Chaguanas, Trinidad & Tobag</p>
          </div>




      </footer>

      <div className='border-t-1 border-gray-700 items-center flex justify-between px-8'>

        <div className='text-base-100'>
          <p>©2025. PremierestaysMiami. All Rights Reserved.</p>
        </div>


        <div className='text-blue-200 text-2xl py-4 flex gap-6'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>




  );
};

export default Footer;