import React, { useState } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Import icons

function ContactUs() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', '85facdbb-3963-4333-8298-684173311952');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        console.log('Success', data);
        setResult(data.message);
        event.target.reset();
      } else {
        console.log('Error', data);
        setResult('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      setResult('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='relative min-h-screen'>
      {/* Background Photo with Reduced Opacity */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>
      {/* Content Overlay */}
      <div className='relative bg-black bg-opacity-75'>
        <NavBar />
        <div className='container mx-auto py-12 px-4 md:px-8'>
          <h1 className='text-4xl font-bold mb-6 text-blue-800 text-center'>CONTACT US</h1>
          <h2 className='text-3xl font-semibold mb-12 text-star text-center'>Get in Touch</h2>
          <div className='flex flex-col md:flex-row'>
            {/* Left Column - Contact Information */}
            <div className='md:w-1/2 md:pr-12 text-white'>
              <h3 className='text-2xl font-semibold mb-4'>Send us a message</h3>
              <p className='mb-8 text-gray-300'>
                Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.
              </p>
              <div className='mb-4 flex items-center'>
                <FiMail className='text-blue-600 text-2xl mr-4' />
                <p className='text-gray-300'>Contact@GreatStack.dev</p>
              </div>
              <div className='mb-4 flex items-center'>
                <FiPhone className='text-blue-600 text-2xl mr-4' />
                <p className='text-gray-300'>+1123-456-7890</p>
              </div>
              <div className='flex items-center'>
                <FiMapPin className='text-blue-600 text-2xl mr-4' />
                <p className='text-gray-300'>
                  77 Massachusetts Ave, Cambridge, MA 02139, United States
                </p>
              </div>
            </div>
            {/* Right Column - Contact Form */}
            <div className='md:w-1/2 md:pl-12 mt-8 md:mt-0'>
              <form onSubmit={onSubmit} className='bg-gray-800 p-6 rounded-lg bg-opacity-50'>
                <div className='mb-4'>
                  <label className='block text-gray-300 mb-2'>Your name</label>
                  <input
                    type='text'
                    name='name'
                    className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                    placeholder='Enter your name'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-300 mb-2'>Phone Number</label>
                  <input
                    type='tel'
                    name='phone'
                    className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                    placeholder='Enter your mobile number'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-300 mb-2'>Write your message here</label>
                  <textarea
                    name='message'
                    className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                    rows='4'
                    placeholder='Enter your message'
                    required
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 flex items-center justify-center'
                >
                  Submit now <span className='ml-2'>→</span>
                </button>
              </form>
              <span className='text-white mt-4 block'>{result}</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
