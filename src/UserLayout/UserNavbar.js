import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../Layout/logo.png";
import userPhoto from "./OIP (9).jpg"; // Adjust the path to your user photo
import { Menu } from '@mui/icons-material';

function UserNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hover = "hover:text-white transition text-star";
  const Hover = ({ isActive }) => (isActive ? 'text-subMain' : hover);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className='bg-main shadow-md sticky top-0 z-20'>
        <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
          <div className='col-span-1 lg:block hidden'>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ maxWidth: "auto", height: "auto" }}
              />
            </Link>
          </div>
          <div className='col-span-6 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
            <NavLink to="/user" className={Hover}>
              Home
            </NavLink>
            <NavLink to="/movies" className={Hover}>
              Movies
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={Hover}>
              Contact Us
            </NavLink>
            <NavLink to="/profile" className={Hover}>
              <img src={userPhoto} alt="User" className="w-8 h-8 rounded-full" />
            </NavLink>
          </div>

          {/* Mobile Menu Icon and Logo */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link to="/">
              <img src={logo} alt="logo" className="h-16 w-auto" />
            </Link>
            <div onClick={handleMenuToggle} className="cursor-pointer">
              <Menu />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="flex flex-col items-center bg-black bg-opacity-80 fixed top-0 left-0 w-full h-full z-50">
            <NavLink to="/" className="hover:text-white transition text-star py-2" onClick={handleMenuToggle}>
              Home
            </NavLink>
            <NavLink to="/movies" className="hover:text-white transition text-star py-2" onClick={handleMenuToggle}>
              Movies
            </NavLink>
            <NavLink to="/about-us" className="hover:text-white transition text-star py-2" onClick={handleMenuToggle}>
              About Us
            </NavLink>
            <NavLink to="/contact" className="hover:text-white transition text-star py-2" onClick={handleMenuToggle}>
              Contact Us
            </NavLink>
            <NavLink to="/login" className="hover:text-white transition text-star py-2" onClick={handleMenuToggle}>
              <img src={userPhoto} alt="User" className="w-8 h-8 rounded-full" />
            </NavLink>
            {/* Logo and Footer Text */}
            <div className="mt-auto pb-4 flex flex-col items-center">
              <img src={logo} alt="logo" className="h-30 w-auto mb-4" />
              <p className="text-xs text-center">&copy; 2024 CINEVERSE. All rights reserved.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserNavbar;
