import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import backgroundImage from '../assests/wallpaperflare.com_wallpaper.jpg';
import inceptionImage from '../assests/OIP (10).jpg';
import darkKnightImage from '../assests/OIP (7).jpg';
import interstellarImage from '../assests/OIP (3).jpg';
import matrixImage from '../assests/OIP (4).jpg';
import endgameImage from '../assests/OIP (5).jpg';

const Movies = () => {
  const movies = [
    { name: 'Paradise', photo: inceptionImage },
    { name: 'Deadpool & Wolverine', photo: darkKnightImage },
    { name: 'Twisters', photo: interstellarImage },
    { name: 'Despicable Me 4', photo: matrixImage },
    { name: 'Kalki 2098 AD', photo: endgameImage },
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
        <NavBar />
        <div className='container mx-auto py-12 px-4 md:px-8'>
          <h1 className='text-4xl font-bold mb-6 text-white'>Movies</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.map((movie, index) => (
              <div key={index} className="relative flex flex-col items-center group">
                <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
                  <img
                    src={movie.photo}
                    alt={movie.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <Link to="/movie" className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 flex items-center justify-center">
                      Book Now
                    </Link>
                  </div>
                </div>
                <h3 className="text-center mt-2 text-sm font-medium text-white">{movie.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Movies;
