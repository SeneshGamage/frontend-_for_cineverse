import React from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image

function NotFound() {
  return (
    <div className='relative'>
      {/* Background Photo with Reduced Opacity */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>

      {/* Content Overlay */}
      <div className='relative bg-black bg-opacity-75 min-h-screen flex flex-col'>
        <NavBar />
        <div className='container mx-auto flex-grow flex flex-col items-center justify-center py-12 px-4 md:px-8'>
          <h1 className='text-6xl font-bold text-white mb-4'>404</h1>
          <p className='text-2xl text-gray-300 mb-8'>Page Not Found</p>
          <a
            href="/"
            className='bg-blue-500 text-white py-2 px-6 rounded shadow-md hover:bg-blue-600'
          >
            Go to Home
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
