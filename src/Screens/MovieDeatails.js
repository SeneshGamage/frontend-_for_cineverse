import React from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg'; // Adjust the path to your background image
import moviePhoto from '../assests/OIP (7).jpg'; // Replace with the actual movie photo
import directorPhoto from '../assests/R.jpg'; // Replace with the director's photo
import cast1Photo from '../assests/R (1).jpg'; 
import cast2Photo from '../assests/OIP (8).jpg';
import cast3Photo from '../assests/R (2).jpg';

const MovieDetails = () => {
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
          <h1 className='text-4xl font-bold mb-6 text-white'>Deadpool & Wolverine</h1>
          
          {/* Movie Photo and Book Now Button */}
          <div className="relative flex flex-col items-center group mb-8">
            <div className="relative w-full h-72 overflow-hidden rounded-lg shadow-md">
              <img
                src={moviePhoto}
                alt="Deadpool & Wolverine"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Movie Details */}
          <div className='text-white'>
            <p className='text-lg mb-4'><strong>Year:</strong> 2024</p>
            <p className='mb-6'>
              <strong>Plot:</strong> In "Deadpool & Wolverine," the Merc with a Mouth teams up with the legendary X-Man for an action-packed adventure filled with humor, heart, and explosive action. When a new threat emerges that could alter the fate of mutants forever, these two unlikely allies must work together to save the day.
            </p>
          </div>
          
          {/* Director Details */}
          <div className='mb-8'>
            <h2 className='text-2xl font-semibold text-blue-600 mb-4'>Director</h2>
            <div className='flex items-center'>
              <img src={directorPhoto} alt="Director Name" className='w-24 h-24 rounded-full shadow-md mr-4'/>
              <p className='text-white text-lg'>Director Name</p>
            </div>
          </div>
          
          {/* Cast Details */}
          <div>
            <h2 className='text-2xl font-semibold text-blue-600 mb-4'>Cast</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
              <div className='flex flex-col items-center'>
                <img src={cast1Photo} alt="Cast Member 1" className='w-24 h-24 rounded-full shadow-md mb-2'/>
                <p className='text-white text-sm'>Cast Member 1</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src={cast2Photo} alt="Cast Member 2" className='w-24 h-24 rounded-full shadow-md mb-2'/>
                <p className='text-white text-sm'>Cast Member 2</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src={cast3Photo} alt="Cast Member 3" className='w-24 h-24 rounded-full shadow-md mb-2'/>
                <p className='text-white text-sm'>Cast Member 3</p>
              </div>
              {/* Add more cast members as needed */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MovieDetails;
