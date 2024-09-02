import React from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image

function ContactUs() {
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
          <h1 className='text-4xl font-bold mb-6 text-star'>Contact Us</h1>
          <section className='p-6 rounded-lg'>
            <h2 className='text-3xl font-semibold mb-4 text-blue-600'>Get in Touch</h2>
            <p className='mb-4 text-white'>
              We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the form below.
            </p>
            <form>
              <div className='mb-4'>
                <label className='block text-white mb-2'>Name</label>
                <input
                  type='text'
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Your Name'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white mb-2'>Email</label>
                <input
                  type='email'
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Your Email'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white mb-2'>Subject</label>
                <input
                  type='text'
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Subject'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white mb-2'>Message</label>
                <textarea
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                  rows='4'
                  placeholder='Your Message'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200'
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
