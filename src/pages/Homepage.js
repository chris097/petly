import React, { useState, useEffect } from 'react';
import {
  Box, 
  Text,
  Icon,
  Flex
} from '@chakra-ui/react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
// import { ReactComponent as DogIcon } from '../svgs/card-dog.svg';
import { petTags } from '../constants/data';
import useData from '../data/useData';

const Homepage = () => {

  const animalIndex = 0;
  const birdIndex = 1;
  const rabbitIndex = 2;
  const reptileIndex = 3;
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ location, setLoaction ] = useState('');
  const [ breed, setBreed ] = useState('');
  const [ animal, setAnimal ] = useState('');
  const [ filterCity, setFilterCity ] = useState('');
  const [ filterAnimal, setFilterAnimal ] = useState('');
  const [ filterBreed, setFilterBreed ] = useState('');
  const [ filterDog, setFilterDog ] = useState('');
  const [ filterBird, setFilterBird ] = useState('');
  const [ filterReptile, setFilterReptile ] = useState('');
  const [ filterRabbit, setFilterRabbit ] = useState('')

  const { data, isLoading } = useData(`pets`);

  // function removeDuplicateData(arr){
  //   let currArr = [];
  //   let exists = {}
  //   let elm;
  
  //   for(let i = 0; i < arr.length; i++){
  //     elm = arr[i];
  //     if(!exists[elm])
  //     currArr.push(elm)
  //     exists[elm] = true
  //   }
  //   return currArr;
  // }

  useEffect(() => {
    let petLocation = data?.pets?.filter(pet => pet?.city?.includes(location));
    setFilterCity(petLocation)
  }, [data, location]);

  useEffect(() => {
    let petBreed = data?.pets?.filter(pet => pet?.breed?.includes(breed));
    setFilterBreed(petBreed)
  }, [data, breed]);

  useEffect(() => {
    let petAnimal = data?.pets?.filter(pet => pet?.animal?.includes(animal));
    setFilterAnimal(petAnimal)
  }, [data, animal]);

  // Filter pets to get dogs details
  useEffect(() => {
    const dogs = data?.pets?.filter(pet => pet?.animal === 'dog')
    setFilterDog(dogs)
  },[filterDog, data]);

  useEffect(() => {
    const birds = data?.pets?.filter(pet => pet?.animal === 'bird')
    setFilterBird(birds)
  },[filterBird, data]);

  useEffect(() => {
    const reptiles = data?.pets?.filter(pet => pet.animal === 'reptile')
    setFilterReptile(reptiles)
  },[filterReptile, data]);

  useEffect(() => {
    const rabbits = data?.pets?.filter(pet => pet.animal === 'rabbit')
    setFilterRabbit(rabbits)
  },[filterRabbit, data]);

  return (
    <>
      { /* Header */}
      <Header />
       { /* Homepage Banner */}
      <HomeBanner 
        data={data?.pets} 
        setAnimal={setAnimal}
        setBreed={setBreed}
        setLocation={setLoaction}
      />
       { /* Cards */}
       <Box px="4rem" my="2rem">
        <Text fontSize="24px">Search Results</Text>
        <Cards 
          isLoading={isLoading}
          data={filterCity || filterAnimal || filterBreed} 
        />

       </Box>
       <Box ml="4rem" mt="4rem">
        <Text fontSize="36px" color="#666879">Browse Though Pet Types</Text>
        <Flex>
          { petTags?.map((petTag, index) => (
            <Box 
              key={index}
              bg="#F0F6FF" 
              w="80px" 
              h="80px" 
              rounded="10px"
              d="flex"
              justifyContent="center"
              alignItems="center"
              mt="2rem"
              border={currentIndex === index ? "2px" : ''}
              mr="1.5rem"
              borderColor={currentIndex === index ? "rgba(13, 117, 255, 0.4)" : ''}
              cursor="pointer"
              _hover={{ bg: '#F0F6FF', opacity: '.8'}}
              onClick={() => setCurrentIndex(index)}
            >
              <Box>
                <Icon w="32px" h="27.13px">{petTag.avatar}</Icon>
                <Text color="#0D75FF">{petTag.name}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
        { animalIndex === currentIndex && <Cards data={filterDog} /> }
        { birdIndex === currentIndex && <Cards data={filterBird} /> }
        { rabbitIndex === currentIndex && <Cards data={filterRabbit} /> }
        { reptileIndex === currentIndex && <Cards data={filterReptile} /> }
       </Box>
       { /* Footer */}
       <Footer />
    </>
  )
}

export default Homepage
