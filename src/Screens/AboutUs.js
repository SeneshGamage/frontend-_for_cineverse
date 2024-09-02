import React from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image

function AboutUs() {
  return (
    <div className='relative'>
      {/* Background Photo with Reduced Opacity */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>
      {/* Content Overlay */}
      <div className='relative bg-black bg-opacity-75'>
        <NavBar />
        <div className='container mx-auto py-12 px-4 md:px-8'>
          <h1 className='text-4xl font-bold mb-6 text-star'>About Us</h1>
          <section className='p-6 rounded-lg'>
            <h2 className='text-3xl font-semibold mb-4 text-blue-600'>Welcome to CineVerse!</h2>
            <p className='mb-4 text-white'>
              At CineVerse, we are passionate about movies and committed to providing a seamless and enjoyable experience for moviegoers. Our mission is to bring you the latest and greatest films, making it easier for you to find, book, and enjoy your favorite movies.
            </p>
            <h2 className='text-3xl font-semibold mb-4 text-blue-600'>Our Story</h2>
            <p className='mb-4 text-white'>
              Founded in 2024, CineVerse was created with the vision of revolutionizing the way people experience movies. Our team of film enthusiasts and tech experts have come together to build a platform that combines convenience with cutting-edge technology. We believe that booking movie tickets should be as enjoyable as watching the films themselves.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;