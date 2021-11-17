import React from 'react';
import {
  Box,
  Text,
  Flex,
  Image
} from '@chakra-ui/react';
import homepageDog1 from '../images/dog1.png';
import homepageDog2 from '../images/dog2.png';
import homepageDog3 from '../images/dog3.png';
import homepageDog4 from '../images/dog4.png';
import SearchDogs from './SearchDogs';
import HomepageColor from '../constants/colorSchema/HomepageColor';

const HomeBanner = ({ 
  data,
  setAnimal,
  setBreed,
  setLocation
 }) => {

  return (
    <Box
      w="100%"
      h="800px"
      bg="rgba(4, 37, 81, 0.05)"
    >
      <Flex 
        alignItems="center"
        px="4rem"
        justifyContent="space-between"
      >
        <Box w="547px">
          <Text fontSize="14px" color="#0D75FF">FIND SPECIAL PETS</Text>
          <Text 
            fontSize="48px" 
            lineHeight="60px" 
            pos="relative"
            >
            <span color="#344062">Think you Love Pets?</span> <span color="#CB2E42">Adopt One.</span>
          </Text>
          <Text 
            fontSize="16px" 
            color="#344062"
            mt="7px"
          >
            Pet Adoption is quickly becoming the preferred way to find a new dog,
            puppy, cat or kitten
          </Text>
        </Box>
        <Box mt="6rem">
          <Flex>
            <Image oobjectFit="cover" src={homepageDog1} alt="dog_image" />
            <Image objectFit="cover" src={homepageDog2} alt="dog_image" />
          </Flex>
          <Flex>
            <Image objectFit="cover" src={homepageDog3} alt="dog_image" />
            <Image objectFit="cover" src={homepageDog4} alt="dog_image" />
          </Flex>
        </Box>
      </Flex>
      <SearchDogs 
        data={data} 
        setAnimal={setAnimal}
        setBreed={setBreed}
        setLocation={setLocation}
      />
      <HomepageColor />
    </Box>
  )
}

export default HomeBanner
