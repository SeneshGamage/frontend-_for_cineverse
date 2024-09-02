import React from 'react'
import UserLayout from '../UserLayout/UserLayout'
import Banner from '../Components/Home/Banner'
import PopularMovies from '../Components/Home/PopularMovies'
import Top from '../Components/Home/Top'

function UserHome() {
  return (
    <UserLayout>
    <div className='container mx-auto min-h-screen px-2 mb-6'>
      <Banner />
      <PopularMovies />
      <Top />
    </div>
    </UserLayout>
  )
}

export default UserHome;
