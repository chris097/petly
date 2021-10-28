import React from 'react';
import {
  Box,
  Flex
} from '@chakra-ui/react';

const HomepageColor = () => {
  return (
    <Box 
      pos="absolute"
      right="0"
      mt="6rem"
    >
      <Flex>
        <Box bg="#245997" w="69px" h="49px"></Box>
        <Box bg="#E1AB21" w="69px" h="49px"></Box>
      </Flex>
      <Box bg="#D21A30" w="69px" h="49px"></Box>
      <Flex>
        <Box bg="transparent" w="69px" h="49px"></Box>
        <Box bg="#7C97B6" w="69px" h="49px"></Box>
      </Flex>
    </Box>
  )
}

export default HomepageColor;
