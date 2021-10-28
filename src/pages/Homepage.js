import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';

const Homepage = () => {
  return (
    <>
      { /* Header */}
      <Header />
       { /* Homepage Banner */}
      <HomeBanner />
       { /* Cards */}
       <Cards />
    </>
  )
}

export default Homepage
