import React from 'react';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Service</a></li>
            <li><a>Book Now</a></li>
            <li><a>FAQ</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <img className='w-2/12' src={logo} alt="" />
        <a className='text-amber-400'>PREMIERE<br/><span className='text-blue-600'>STAYS</span></a>
      </div>
      <div className="navbar-center hidden lg:flex gap-6">
          <NavLink to='/'>Home</NavLink>
          <Link to="About" smooth={true} duration={700} className="cursor-pointer">About</Link>
          <Link to="Services" smooth={true} duration={700} className="cursor-pointer">Service</Link>
          <NavLink>Book Now</NavLink>
          <Link to="FAQ" smooth={true} duration={700} className="cursor-pointer">FAQ</Link>
          <NavLink>Contact Us</NavLink>

      </div>
      <div className="navbar-end">
        <a className="cursor-pointer">Login</a>
        <a className="btn mx-2 rounded-4xl text-indigo-600">Register</a>
      </div>
    </div>
  );
};

export default Navbar;