import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !contactNumber || !password) {
      setError('Please fill in all fields.');
    } else {
      setError(''); // Clear the error if input is valid
      // Navigate to the verification page after successful registration
      navigate('/verify');
    }
  };

  return (
    <div className='relative'>
      {/* Background Image covering the Sign-Up Section */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>
      
      {/* Content Overlay */}
      <div className='relative bg-black bg-opacity-75 min-h-screen'>
        <NavBar />
        <div className='container mx-auto py-12 px-4 md:px-8 flex justify-center items-center'>
          <div className='bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md'>
            <h1 className='text-4xl font-bold mb-6 text-white text-center'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='username'>
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter your username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='contactNumber'>
                  Contact Number
                </label>
                <input
                  type='tel'
                  id='contactNumber'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter your contact number'
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <div className='mb-6'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='password'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className='mb-4 text-red-500 text-center'>
                  {error}
                </div>
              )}
              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 w-full flex items-center justify-center'
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
