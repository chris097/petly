import React from 'react';
import {
  Box,
  Flex,
  Select, 
  Text
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { ReactComponent as BreedIcon } from '../svgs/breed-icon.svg';
import { ReactComponent as DogIcon } from '../svgs/dog-icon.svg';
import { ReactComponent as LocationIcon } from '../svgs/location-icon.svg';

const SearchDogs = () => {
  return (
    <Box
      pos="absolute"
      ml="4rem"
      mt="-90"
      bg="#fff"
      w="70%"
      h="236px"
      px="2rem"
      color="#8588A3"
    >
      <Flex
        alignItems="center"
        h="60px"
        bg="#F8FAFD"
        rounded="full"
        mt="1rem"
        justifyContent="space-between"
      >
        <Flex>
          <Flex w="150px" whiteSpace="nowrap" ml="2rem">
            <Box d="flex" alignItems="center"><LocationIcon /></Box>
            <Select 
              w="100%"
              placeholder="Location"
              border="none"
            >
              <option value="1">Breed1</option>
              <option value="1">Breed1</option>
              <option value="1">Breed1</option>
            </Select>
          </Flex>
          <Flex w="150px" whiteSpace="nowrap" mx="2rem">
            <Box d="flex" alignItems="center"><DogIcon /></Box>
            <Select 
              w="100%"
              placeholder="Animal"
              border="none"
            >
              <option value="1">Breed1</option>
              <option value="1">Breed1</option>
              <option value="1">Breed1</option>
            </Select>
          </Flex>
          <Flex w="150px" whiteSpace="nowrap">
            <Box d="flex" alignItems="center"><BreedIcon /></Box>
            <Select 
              w="100%"
              placeholder="Breed"
              border="none"
            >
              <option value="1">Breed1</option>
              <option value="1">Breed1</option>
              <option value="1">Breed1</option>
            </Select>
          </Flex>
        </Flex>
        <Box 
          bg="#0D75FF" 
          h="100%" 
          w="70px" 
          rounded="full" 
          d="flex" 
          justifyContent="center" 
          alignItems="center"
        >
          <FiSearch color="#fff" size="25px" />
        </Box>
      </Flex>
      <Text mt="1rem">You may be looking for</Text>
    </Box>
  )
}

export default SearchDogs;
