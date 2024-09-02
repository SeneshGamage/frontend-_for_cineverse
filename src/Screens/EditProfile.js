import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavBar from '../UserLayout/UserNavbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image
import defaultProfilePic from '../assests/OIP (9).jpg'; // Adjust the path to your default profile picture

const EditProfile = () => {
  // Initialize state with current user data
  const [username, setUsername] = useState('User Name'); // Replace with actual user data
  const [email, setEmail] = useState('user@example.com'); // Replace with actual user data
  const [contactNumber, setContactNumber] = useState('+123 456 7890'); // Replace with actual user data
  const [error, setError] = useState('');
  const [profilePic, setProfilePic] = useState(defaultProfilePic); // Default profile picture
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !contactNumber) {
      setError('Please fill in all fields.');
    } else {
      setError(''); // Clear the error if input is valid
      // Navigate to the profile page after successful update
      navigate('/profile');
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Update profile picture preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className='relative'>
      {/* Background Image covering the Edit Profile Section */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>
      
      {/* Content Overlay */}
      <div className='relative bg-black bg-opacity-75 min-h-screen'>
        <UserNavBar />
        <div className='container mx-auto py-12 px-4 md:px-8 flex justify-center items-center'>
          <div className='bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md'>
            <h1 className='text-4xl font-bold mb-6 text-white text-center'>Edit Your Profile</h1>
            <form onSubmit={handleSubmit}>
              <div className='mb-6 flex flex-col items-center'>
                <img
                  src={profilePic}
                  alt="Profile"
                  className='w-32 h-32 rounded-full object-cover mb-4 cursor-pointer'
                  onClick={() => document.getElementById('profilePicInput').click()}
                />
                <input
                  id='profilePicInput'
                  type='file'
                  accept='image/*'
                  onChange={handleProfilePicChange}
                  className='hidden'
                />
              </div>
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
                  Save Changes
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

export default EditProfile;
