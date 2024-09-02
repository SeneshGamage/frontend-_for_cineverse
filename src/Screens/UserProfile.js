import React from 'react';
import UserNavBar from '../UserLayout/UserNavbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image
import userPhoto from '../assests/OIP (9).jpg'; // Replace with the actual user photo
import movie1 from '../assests/OIP (10).jpg';
import movie2 from '../assests/OIP (7).jpg';
import movie3 from '../assests/OIP (3).jpg';
import {Link} from 'react-router-dom';

const UserProfile = () => {
  const bookedMovies = [
    { name: 'Movie 1', photo: movie1 },
    { name: 'Movie 2', photo: movie2 },
    { name: 'Movie 3', photo: movie3 },
    // Add more movies as needed
  ];

  return (
    <div className='relative'>
      {/* Background Photo with Reduced Opacity */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>
      
      {/* Content Overlay */}
      <div className='relative bg-black bg-opacity-75 min-h-screen'>
        <UserNavBar />
        <div className='container mx-auto py-12 px-4 md:px-8'>
          <h1 className='text-4xl font-bold mb-6 text-white'>Profile</h1>
          
          {/* User Details */}
          <div className='mb-8'>
            <div className='flex items-center mb-6'>
              <img src={userPhoto} alt="User Name" className='w-24 h-24 rounded-full shadow-md mr-6'/>
              <div>
                <h2 className='text-2xl font-semibold text-white mb-2'>User Name</h2>
                <p className='text-white mb-1'><strong>Email:</strong> user@example.com</p>
                <p className='text-white'><strong>Contact:</strong> +123 456 7890</p>
              </div>
            </div>
            <div className='flex space-x-4'>
              <Link to = '/edit'
                 className='bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600'>
                Edit Profile
              </Link>
              <Link to = '/pwd'
               className='bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600'>
                Change Password
              </Link>
            </div>
          </div>
          
          {/* Booked Movies */}
          <div>
            <h2 className='text-2xl font-semibold text-blue-600 mb-4'>Booked Films</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
              {bookedMovies.map((movie, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <img src={movie.photo} alt={movie.name} className='w-24 h-36 rounded-lg shadow-md mb-2'/>
                  <p className='text-white text-sm'>{movie.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserProfile;
