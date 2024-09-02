import React from 'react';
import inceptionImage from '../Home/assests/OIP (10).jpg';
import darkKnightImage from '../Home/assests/OIP (7).jpg';
import interstellarImage from '../Home/assests/OIP (3).jpg';
import matrixImage from '../Home/assests/OIP (4).jpg';
import endgameImage from '../Home/assests/OIP (5).jpg';

const PopularMovies = () => {
  const movies = [
    { name: 'Paradise', photo: inceptionImage },
    { name: 'Deadpool & Wolverine', photo: darkKnightImage },
    { name: 'Twisters', photo: interstellarImage },
    { name: 'Despicable Me 4', photo: matrixImage },
    { name: 'Kalki 2098 AD', photo: endgameImage },
    // Add more movies as needed
  ];

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Now Showing</h2>
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
                <button className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600">
                  Book Now
                </button>
              </div>
            </div>
            <h3 className="text-center mt-2 text-sm font-medium">{movie.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;