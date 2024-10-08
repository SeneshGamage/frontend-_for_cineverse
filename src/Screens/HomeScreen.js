import Banner from '../Components/Home/Banner'
import Layout from '../Layout/Layout'
import PopularMovies from '../Components/Home/PopularMovies'
import React from 'react'
import Top from '../Components/Home/Top'

function HomeScreen() {
  return (
    <Layout>
    <div className='container mx-auto min-h-screen px-2 mb-6'>
      <Banner />
      <PopularMovies />
      <Top />
    </div>
    </Layout>
  )
}

export default HomeScreen;
