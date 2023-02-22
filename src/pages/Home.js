import React, { useEffect, useState } from 'react'
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
import RatIcon from '../public/svgs/RatIcon';
import { FaDog } from 'react-icons/fa';

const tags = [
  {name: "dog", icon: <DogIcon />},
  {name: "cat", icon: <CatIcon />},
  {name: "bird", icon: <BirdIcon />},
  {name: "rabbit", icon: <RatIcon />},
  {name: "reptile", icon: <FishIcon />},
]

const Home = () => {
  //states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFilterPets, setIsFilterPets] = useState("");
  const [currentAnimal, setCurrentAnimal] = useState("dog");
  const { data, isLoading } = useQueryApi('pets', 'pets');

  const filterPet = () => {
    const isPets = data?.pets?.filter(el => el.animal === currentAnimal);
    return setIsFilterPets(isPets);
  };

  const handlePetTags = (index, animal) => {
    setCurrentIndex(index)
    setCurrentAnimal(animal)
  }

  useEffect(() => {
    filterPet()
  },[currentAnimal, data])
 
  
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
          <h1 className='text-[36px] text-primarygray mt-14 mb-8 md:mb-0'>Browse Though Pet Types</h1>
          <div className='flex md:space-x-6 flex-wrap'>
            {tags?.map((tag, index) => (
            <button type='button' onClick={() => handlePetTags(index, tag.name)} key={index}>
                <div className={`w-[118px] h-[108px] ${currentIndex === index && 'border-blue-400 border transition-all ease-in-out duration-75'} md:mt-10 m-3 rounded-2xl bg-nextgray flex justify-center flex-col items-center cursor-pointer`}>
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
            </div> : (!isFilterPets?.length ? <div className='text-[36px] text-primarygray flex justify-center flex-col items-center w-full my-10'>
                <div className='mb-3'><FaDog color='#666879' size={48} /></div>
                No pets found!
              </div> : isFilterPets?.map((pet, index) => (
              <Card
                index={index}
                name={pet.name}
                breed={pet.breed}
                city={pet.city}
                state={pet.state}
                image={pet.images[0]}
                id={pet.id}
              />
            )))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home