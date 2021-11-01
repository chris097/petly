import React from 'react';
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
import { ReactComponent as DogIcon } from '../svgs/card-dog.svg';
import { petTags } from '../constants/data';

const Homepage = () => {
  return (
    <>
      { /* Header */}
      <Header />
       { /* Homepage Banner */}
      <HomeBanner />
       { /* Cards */}
       <Box px="4rem" my="2rem">
        <Text fontSize="24px">Search Results</Text>
        <Cards />
       </Box>
       <Box ml="4rem" mt="4rem">
        <Text fontSize="36px" color="#666879">Browse Though Pet Types</Text>
        <Flex>
          { petTags?.map((petTag, index) => (
            <Box 
              bg="#F0F6FF" 
              w="80px" 
              h="80px" 
              rounded="10px"
              d="flex"
              justifyContent="center"
              alignItems="center"
              mt="2rem"
              border="1px"
              mr="1.5rem"
              borderColor="rgba(13, 117, 255, 0.4)"
              cursor="pointer"
              _hover={{ bg: '#F0F6FF', opacity: '.8'}}
            >
              <Box>
                <Icon w="32px" h="27.13px">{petTag.avatar}</Icon>
                <Text color="#0D75FF">{petTag.name}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
        <Cards />
       </Box>
       { /* Footer */}
       <Footer />
    </>
  )
}

export default Homepage
