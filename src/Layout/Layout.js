import React from 'react'
import NavBar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

function Layout({ children }) {
  return (
    <>
    <div className='bg-main text-white'>
      <NavBar/>
      {children}
      <Footer/>
    </div>
    </>
  )
}

export default Layout
