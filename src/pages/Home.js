import React, { useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CardSkeleton from '../components/Skeleton/CardSkeleton'
import useQueryApi from '../hooks/useQueryApi'
import BirdIcon from '../public/svgs/BirdIcon'
import CatIcon from '../public/svgs/CatIcon'
import DogIcon from '../public/svgs/DogIcon';
import FishIcon from '../public/svgs/FishIcon'
import RatIcon from '../public/svgs/RatIcon'

const tags = [
  {name: "Dogs", icon: <DogIcon />},
  {name: "Cat", icon: <CatIcon />},
  {name: "Bird", icon: <BirdIcon />},
  {name: "Rabbit", icon: <RatIcon />},
  {name: "Reptile", icon: <FishIcon />},
]

const Home = () => {
  //states
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isLoading } = useQueryApi('pets', 'pets');
 
  
  return (
    <div>
      <Header />
      <Banner />
      <div className='px-5 lg:px-20 mt-16'>
        {/* <h1 className='text-xl'>Search Results</h1>
        <div>
          <Card />
        </div> */}
        <div className='font-inter'>
          <h1 className='text-[36px] text-primarygray mt-14'>Browse Though Pet Types</h1>
          <div className='flex space-x-6'>
            {tags?.map((tag, index) => (
            <button type='button' onClick={() => setCurrentIndex(index, tag.aminal)} key={index}>
                <div className={`w-[118px] h-[108px] ${currentIndex === index && 'border-blue-400 border'} mt-10 rounded-2xl bg-nextgray flex justify-center flex-col items-center cursor-pointer`}>
              {tag.icon}
                  <p className={`${currentIndex === index && 'text-primaryblue'} text-darkpurple font-light text-lg`}>{tag.name}</p>
            </div>
          </button>
          ))}
          </div>
          <div className='mt-12 flex flex-wrap'>
            {isLoading ? <div className='flex space-x-8'>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div> : data?.pets?.map((pet) => (
              <Card
                name={pet.name}
                breed={pet.breed}
                city={pet.city}
                state={pet.state}
                image={pet.images[0]}
                id={pet.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home