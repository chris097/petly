import React from 'react';
import {
  Box,
  Text,
  Image, 
  Flex, 
  Icon,
  Button
} from '@chakra-ui/react';
import cardImage from '../images/card-img.png';
import { ReactComponent as DogIcon } from '../svgs/card-dog.svg';
import { ReactComponent as LocationIcon } from '../svgs/location-icon.svg';

const Cards = () => {
  return (
    <Box 
      w="327px" 
      h="323px" 
      shadow="base"
      border="1px"
      borderColor="#F0F6FF"
      mt="2rem"
      py="1.5rem"
    >
      <Box 
        w="275px" 
        h="full"
        mx="auto"
      >
        <Image 
          w="full" 
          h="165px" 
          src={cardImage} 
          alt="card_image" 
          objectFit="fill"
        />
        <Flex 
          justifyContent="space-between" 
          h="70px" 
          alignItems="center"
        >
          <Box lineHeight="25px">
            <Text fontSize="24px">Luna</Text>
            <Text>Havenese</Text>
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
            <Text ml=".5rem" fontSize="14px">Seattle, WA</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Cards;
