import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }

    // Handle password change logic here

    // Redirect to Profile page
    navigate('/profile');
  };

  return (
    <div className='relative'>
      {/* Background Photo with Reduced Opacity */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>
      
      {/* Content Overlay */}
      <div className='relative bg-black bg-opacity-75 min-h-screen'>
        <NavBar />
        <div className='container mx-auto py-12 px-4 md:px-8'>
          <h1 className='text-4xl font-bold mb-6 text-white'>Change Password</h1>
          
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-white text-sm font-medium mb-2'>
                Old Password
              </label>
              <input
                type='password'
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className='w-full p-2 rounded bg-white text-black'
                required
              />
            </div>
            <div>
              <label className='block text-white text-sm font-medium mb-2'>
                New Password
              </label>
              <input
                type='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className='w-full p-2 rounded bg-white text-black'
                required
              />
            </div>
            <div>
              <label className='block text-white text-sm font-medium mb-2'>
                Confirm New Password
              </label>
              <input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-full p-2 rounded bg-white text-black'
                required
              />
            </div>

            {error && <p className='text-red-500 text-sm'>{error}</p>}

            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600'
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ChangePassword;
