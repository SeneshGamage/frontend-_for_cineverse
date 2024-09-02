import React from 'react'
import UserNavBar from '../UserLayout/UserNavbar'
import Footer from '../Layout/Footer'

function UserLayout({ children }) {
  return (
    <>
    <div className='bg-main text-white'>
      <UserNavBar/>
      {children}
      <Footer/>
    </div>
    </>
  )
}

export default UserLayout;
