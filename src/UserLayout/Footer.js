import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Layout/logo.png";

function Footer() {
  const Links = [
    {
      title: 'CINEVERSE',
      links: [
        { name: 'Home', link: '/' },
        { name: 'Movies', link: '/movies' },
        { name: 'Contact Us', link: '/contact' },
        { name: 'About Us', link: '/about-us' },
        { name: 'Account', link: '/login' }
      ]
    },
    {
      title: 'MyAccount',
      links: [
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Booked Films', link: '/favourites' },
        { name: 'MyProfile', link: '/profile' },
        { name: 'Password Recovery', link: '/password' }
      ]
    }
  ];

  return (
    <div className='bg-dry py-4 border-t-2 border-black'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-1 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10'>

          {/* Links Section */}
          <div className='col-span-1 md:col-span-4 lg:col-span-6 grid grid-cols-2 gap-5'>
            {Links.map((link, index) => (
              <div key={index} className='col-span-1'>
                <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title}</h3>
                <ul className='text-sm flex flex-col space-y-3'>
                  {link.links.map((text, index) => (
                    <li key={index} className='flex items-baseline'>
                      <Link to={text.link} className='text-white inline-block w-full hover:text-subMain focus:text-subMain active:text-subMain'>
                        {text.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Logo and Copyright Section */}
          <div className='col-span-1 md:col-span-3 lg:col-span-6 mt-8 md:mt-0 flex flex-col items-center md:items-start'>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className='w-full object-contain h-20 mb-4'
              />
            </Link>
            <p className='leading-7 text-sm text-white text-center md:text-left'>
              <span> © {new Date().getFullYear()} CINEVERSE.</span>
              <span>All rights reserved.</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;
