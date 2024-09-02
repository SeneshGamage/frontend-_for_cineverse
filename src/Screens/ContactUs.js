import React, { useState } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image

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
          <h1 className='text-4xl font-bold mb-6 text-white'>Contact Us</h1>
          <section className='p-6 rounded-lg'>
            <h2 className='text-3xl font-semibold mb-4 text-blue-600'>Get in Touch</h2>
            <p className='mb-4 text-white'>
              We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the form below.
            </p>
            <form onSubmit={onSubmit}>
              <div className='mb-4'>
                <label className='block text-white mb-2'>Name</label>
                <input
                  type='text'
                  name='name'
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Your Name'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white mb-2'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Your Email'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white mb-2'>Subject</label>
                <input
                  type='text'
                  name='subject'
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='Subject'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white mb-2'>Message</label>
                <textarea
                  name='message'
                  className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                  rows='4'
                  placeholder='Your Message'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200'
              >
                Send Message
              </button>
            </form>
            <span className='text-white mt-4 block'>{result}</span>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
