import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavBar from '../UserLayout/UserNavbar';
import Footer from '../UserLayout/Footer';
import backgroundImage from '../UserLayout/wallpaperflare.com_wallpaper.jpg'; 
import defaultMoviePic from '../UserLayout/OIP (7).jpg'; 

const AddMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [year, setYear] = useState('');
  const [language, setLanguage] = useState('');
  const [odcPrice, setOdcPrice] = useState('');
  const [dolby3dPrice, setDolby3dPrice] = useState('');
  const [imaxPrice, setImaxPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [moviePic, setMoviePic] = useState(defaultMoviePic); 
  const [movies, setMovies] = useState([]); // State to store the list of movies
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!movieName || !year || !language || !description || (!odcPrice && !dolby3dPrice && !imaxPrice)) {
      setError('Please fill in all fields.');
    } else {
      setError(''); 
      
      const newMovie = {
        id: movies.length + 1, // Generate a new ID
        name: movieName,
        year,
        language,
        odcPrice,
        dolby3dPrice,
        imaxPrice,
        description,
        photo: moviePic
      };

      setMovies([...movies, newMovie]); // Add the new movie to the list

      // Clear the form fields
      setMovieName('');
      setYear('');
      setLanguage('');
      setOdcPrice('');
      setDolby3dPrice('');
      setImaxPrice('');
      setDescription('');
      setMoviePic(defaultMoviePic);

      // Navigate to DeleteMovies.js
      navigate('/del');
    }
  };

  const handleMoviePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMoviePic(reader.result);
      };
      reader.readAsDataURL(file); 
    }
  };

  useEffect(() => {
    if (movieName && year && language && description && (odcPrice || dolby3dPrice || imaxPrice)) {
      setError('');
    }
  }, [movieName, year, language, description, odcPrice, dolby3dPrice, imaxPrice]);

  return (
    <div className='relative'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>
      
      <div className='relative bg-black bg-opacity-75 min-h-screen'>
        <UserNavBar />
        <div className='container mx-auto py-12 px-4 md:px-8 flex flex-col items-center'>
          <div className='bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md'>
            <h1 className='text-4xl font-bold mb-6 text-white text-center'>Add New Movie</h1>
            <form onSubmit={handleSubmit}>
              <div className='mb-6 flex flex-col items-center'>
                <img
                  src={moviePic}
                  alt="Movie"
                  className='w-32 h-32 rounded-lg object-cover mb-4 cursor-pointer'
                  onClick={() => document.getElementById('moviePicInput').click()}
                />
                <input
                  id='moviePicInput'
                  type='file'
                  accept='image/*'
                  onChange={handleMoviePicChange}
                  className='hidden'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='movieName'>
                  Movie Name
                </label>
                <input
                  type='text'
                  id='movieName'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter movie name'
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='year'>
                  Year
                </label>
                <input
                  type='number'
                  id='year'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter release year'
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='language'>
                  Language
                </label>
                <input
                  type='text'
                  id='language'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter language'
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='odcPrice'>
                  ODC Price
                </label>
                <input
                  type='number'
                  id='odcPrice'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter ODC price'
                  value={odcPrice}
                  onChange={(e) => setOdcPrice(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='dolby3dPrice'>
                  DOLBY 3D Price
                </label>
                <input
                  type='number'
                  id='dolby3dPrice'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter DOLBY 3D price'
                  value={dolby3dPrice}
                  onChange={(e) => setDolby3dPrice(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='imaxPrice'>
                  IMAX Price
                </label>
                <input
                  type='number'
                  id='imaxPrice'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter IMAX price'
                  value={imaxPrice}
                  onChange={(e) => setImaxPrice(e.target.value)}
                />
              </div>
              <div className='mb-6'>
                <label className='block text-white text-sm font-bold mb-2' htmlFor='description'>
                  Movie Description
                </label>
                <textarea
                  id='description'
                  className='w-full p-3 text-black rounded-lg focus:outline-none'
                  placeholder='Enter movie description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  Add Movie
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

export default AddMovie;
