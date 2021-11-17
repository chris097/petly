import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Avatar, 
  Center
} from '@chakra-ui/react';
// import { useParams } from 'react-router-dom';
// import useData from '../data/useData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactComponent as DogIcon } from '../svgs/card-dog.svg';
import { ReactComponent as LocationIcon } from '../svgs/location-icon.svg';
import { useParams } from 'react-router';
import useData from '../data/useData';
import Loading from '../components/loading/Loading';

const PetDetails = () => {

  const { id } = useParams();
  const { data, isLoading } = useData(`pets?id=${id}`);
  
  return (
    <>
      <Header />
        {isLoading ? <Center mt="10rem"><Loading color="#0D75FF" size={50} /></Center> : data?.pets?.map((pet, index) => (
          <Box key={index} maxWidth="800px" mt="6rem" mx="auto">
          <Flex justifyContent="space-between" alignItems="center" h="50px">
            <Flex alignItems="center">
              <Avatar name={pet?.name} />
              <Box lineHeight="25px" mt=".5rem" ml="7px">
                <Text fontSize="36px">{pet?.name}</Text>
                <Text fontSize="14px" color="#8588A3">{pet?.breed}</Text>
              </Box>
            </Flex>
            <Box><DogIcon /></Box>
          </Flex>
          <Box bg="#F8FAFD" w="full" mt="1rem" py=".5rem" px="3rem">
            <Text fontSize="36px" color="#58667E">{pet?.name} pictures</Text>
            <Box w="100%" d="flex" justifyContent="center" bg="#fff" p="1rem" mt="1rem">
              <img style={{ width: '100%', height: '300px'}} src={pet && pet?.images[0]} alt="dog_image" />
            </Box>
            <Flex flexWrap="wrap">
              {pet?.images?.map((image, index) => (
                <img style={{ width: '170px', height: '150px', marginRight: '6px', marginTop: '1rem'}} key={index} src={image} alt="dog_image" />
              ))}
            </Flex>
            <Box bg="#fff" w="100%" color="#58667E" mt="1rem" p="2rem">
              <Text fontSize="24px">Description</Text>
              <Text fontSize="13px">
                {pet?.description}
              </Text>
              <Flex alignItems="center" bg="#F0F6FF" w="120px" justifyContent="center" py="5px" mt="2rem">
                <LocationIcon />
                <Text fontSize="14px" color="#0D75FF" ml="5px">{pet?.city}</Text>
              </Flex>
            </Box>
            <Button 
              bg="#0D75FF" 
              w="155px" 
              h="48px" 
              my="2rem" 
              color="#fff" 
              rounded="full"
              _focus={{border: 'none'}}
              _hover={{ bg: '#0D75FF', opacity: '.7'}}
              fontSize="14px"
            >
              Adopt Luna
            </Button>
          </Box>
        </Box>
        ))}
      <Footer />
    </>
  )
}

export default PetDetails;