import React from 'react';
import './App.css'; // Make sure you import your CSS file
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import NotFound from './Screens/NotFound';
import Movies from './Screens/Movies';
import ContactUs from './Screens/ContactUs';
import MovieDetails from './Screens/MovieDeatails';
import Login from "./Screens/Login";
import Register from "./Screens/Regsiter";
import Verification from './Screens/Verification';
import UserHome from './Screens/UserHome';
import UserProfile from './Screens/UserProfile';
import ChangePassword from './Screens/ChangePassword';
import EditProfile from './Screens/EditProfile';

import Dashboard from './Screens/Dashboard/Admin/Dashboard';
import AddMovie from './Screens/Dashboard/Admin/AddMovie';
import DeleteMovie from './Screens/Dashboard/Admin/DeleteMovie';
import Users from './Screens/Dashboard/Admin/Users';

function App() {
  return (
    <Routes>
      <Route path='/'element={<HomeScreen/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/movie' element={<MovieDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Register/>}/>
      <Route path='/verify' element={<Verification/>}/>
      <Route path='/user' element={<UserHome/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/pwd' element={<ChangePassword/>}/>
      <Route path='/edit' element={<EditProfile/>}/>
      <Route path='*' element={<NotFound/>}/>
    
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/add' element={<AddMovie/>}/>
      <Route path='/del' element={<DeleteMovie/>}/>
      <Route path='/list' element={<Users/>}/>
    </Routes>
  );
}

export default App;
