import React from 'react';
import {
  Box,
  Text,
  Image, 
  Flex, 
  Icon,
  Button, 
  Center
} from '@chakra-ui/react';
import { 
  useHistory
} from 'react-router-dom';
// import cardImage from '../images/card-img.png';
import { ReactComponent as DogIcon } from '../svgs/card-dog.svg';
import { ReactComponent as LocationIcon } from '../svgs/location-icon.svg';
import Loading from './loading/Loading';

const Cards = ({
  isLoading,
  data,
}) => {

  const history = useHistory();

  return (
    <Flex 
      flexWrap="wrap"
    >
      { isLoading ? <Center><Loading color="#0D75FF" size={50} /></Center> : (data ? data?.map((pet, index) => (
          <Box 
            key={index}
            w="327px" 
            h="323px" 
            shadow="base"
            border="1px"
            borderColor="#F0F6FF"
            mt="2rem"
            mr="1rem"
            py="1.5rem"
          >
          <Box 
            w="275px" 
            h="full"
            mx="auto"
          >
          <img
            style={{ width: "100%", height: "165px", objectFit: "fill"}}
            src={pet?.images[0]} 
            alt="card_image" 
          />
          <Flex 
            justifyContent="space-between" 
            h="70px" 
            alignItems="center"
          >
            <Box lineHeight="25px">
              <Text fontSize="24px">{pet?.name}</Text>
              <Text>{pet?.breed}</Text>
            </Box>
            <Icon><DogIcon /></Icon>
          </Flex>
          <Flex justifyContent="space-between" mt="5px">
            <Button 
              w="121px"
              h="39px"
              rounded="full"
              bg="#0D75FF" 
              alignItems="center"
              color="#fff"
              _hover={{ bg: "#0D75FF", opacity: ".8",}}
              _focus={{ border: "none"}}
              onClick={() => {
                history.push(`pets/${pet?.id}`)
              }}
            >
              <Text 
                d="flex" 
                justifyContent="center" 
                alignItems="center" 
                h="full"
                fontSize="13px"
              >
                View Details
              </Text>
            </Button>
            <Flex 
              alignContent="center" 
              alignItems="center" 
              color="#AFB6C1"
            >
          <LocationIcon />
          <Text ml=".5rem" fontSize="14px">{pet?.city}</Text>
        </Flex>
      </Flex>
    </Box>
  </Box>
  )): 'No data...')}   
    </Flex 
    >
  )
}

export default Cards;
