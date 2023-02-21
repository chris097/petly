import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import useQueryApi from '../hooks/useQueryApi'

const Home = () => {
  const { data } = useQueryApi('pets', 'pets');
  console.log(data)
  return (
    <div>
      <Header />
      <Banner />
      <div className='px-5 lg:px-20 mt-16'>
        <h1 className='text-xl'>Search Results</h1>
        <div>
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home