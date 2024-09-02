import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
    } else {
      setError(''); // Clear the error if input is valid
      // Add logic to handle sign in here

      // Navigate to the /user route
      navigate('/user');
    }
  };

  return (
    <div className='relative'>
      {/* Background Image covering the Login Section */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>
      
      {/* Content Overlay */}
      <div className='relative bg-black bg-opacity-75 min-h-screen'>
        <NavBar />
        <div className='container mx-auto py-12 px-4 md:px-8 flex justify-center items-center'>
          <div className='bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md'>
            <h1 className='text-4xl font-bold mb-6 text-white text-center'>Login</h1>
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
                  className='bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 w-full'
                >
                  Sign In
                </button>
              </div>
              <div className='flex items-center justify-center mt-4'>
                <Link
                  to='/sign'
                  className='bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 w-full flex items-center justify-center'
                >
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
