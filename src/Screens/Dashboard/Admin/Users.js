import React, { useState } from 'react';
import NavBar from '../UserLayout/UserNavbar';
import Footer from '../UserLayout/Footer';
import backgroundImage from '../UserLayout/wallpaperflare.com_wallpaper.jpg';
import defaultProfilePic from '../UserLayout/OIP (9).jpg'; // Default profile picture

const Users = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, username: 'JohnDoe', email: 'johndoe@example.com', contactNumber: '+123 456 7890', profilePic: defaultProfilePic },
    { id: 2, username: 'JaneSmith', email: 'janesmith@example.com', contactNumber: '+098 765 4321', profilePic: defaultProfilePic },
    { id: 3, username: 'JohnDoe', email: 'johndoe@example.com', contactNumber: '+123 456 7890', profilePic: defaultProfilePic },
    { id: 4, username: 'JohnDoe', email: 'johndoe@example.com', contactNumber: '+123 456 7890', profilePic: defaultProfilePic }
    // Add more users as needed
  ]);

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    contactNumber: '',
    profilePic: defaultProfilePic
  });

  const handleAddUser = () => {
    if (!newUser.username || !newUser.email || !newUser.contactNumber) {
      alert('Please fill in all fields.');
      return;
    }
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ username: '', email: '', contactNumber: '', profilePic: defaultProfilePic });
  };

  const handleRemoveUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewUser(prevState => ({ ...prevState, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
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
      <div className='relative bg-black bg-opacity-75 min-h-screen'>
        <NavBar />
        <div className='container mx-auto py-12 px-4 md:px-8'>
          <h1 className='text-4xl font-bold mb-6 text-white'>Users List</h1>
          
          {/* Users List */}
          <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Users</h2>
            <ul className="space-y-4">
              {users.map((user) => (
                <li key={user.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.profilePic}
                      alt={user.username}
                      className='w-16 h-16 rounded-full object-cover'
                    />
                    <div>
                      <h3 className="text-lg font-medium text-white">{user.username}</h3>
                      <p className="text-sm text-gray-400">{user.email}</p>
                      <p className="text-sm text-gray-400">{user.contactNumber}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveUser(user.id)}
                    className='bg-red-500 text-white py-2 px-4 rounded shadow-md hover:bg-red-600'
                  >
                    Remove User
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Add User Form */}
          <div className='bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-4 text-white'>Add New User</h2>
            <div className='mb-4 flex items-center'>
              <img
                src={newUser.profilePic}
                alt="Profile"
                className='w-16 h-16 rounded-full object-cover mr-4 cursor-pointer'
                onClick={() => document.getElementById('profilePicInput').click()}
              />
              <input
                id='profilePicInput'
                type='file'
                accept='image/*'
                onChange={handleProfilePicChange}
                className='hidden'
              />
              <div className='flex flex-col w-full'>
                <input
                  type='text'
                  className='w-full p-3 mb-2 text-black rounded-lg focus:outline-none'
                  placeholder='Username'
                  value={newUser.username}
                  onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                />
                <input
                  type='email'
                  className='w-full p-3 mb-2 text-black rounded-lg focus:outline-none'
                  placeholder='Email'
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <input
                  type='tel'
                  className='w-full p-3 mb-2 text-black rounded-lg focus:outline-none'
                  placeholder='Contact Number'
                  value={newUser.contactNumber}
                  onChange={(e) => setNewUser({ ...newUser, contactNumber: e.target.value })}
                />
                <button
                  onClick={handleAddUser}
                  className='bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 w-full'
                >
                  Add User
                </button>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Users;
