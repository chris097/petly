import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button
} from '@chakra-ui/react';
import { ReactComponent as LogoIcon } from '../svgs/logo.svg';
import { ReactComponent as FacebookIcon } from '../svgs/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../svgs/twiter-icon.svg';
import { ReactComponent as InstagramIcon } from '../svgs/instagram-icon.svg';
import { ReactComponent as LinkedInIcon } from '../svgs/linkedin-icon.svg';
import { ReactComponent as FooterCol1 } from '../svgs/footerColor1.svg';
import { ReactComponent as FooterCol2 } from '../svgs/footerCol2.svg';
import { ReactComponent as FooterCol3 } from '../svgs/footerCol3.svg';

const Footer = () => {
  return (
    <Box 
      w="100%"
      h="500px" 
      bg="#F3F5FB" 
      mt="7rem" 
      px="2rem"
    > 
      <Flex justifyContent="space-between">
        <Box pos="absolute">
          <Box>
            <FooterCol1 />
          </Box>
          <Box ml="8rem">
            <FooterCol3 />
          </Box>
        </Box>
        <Box pos="absolute" right="0">
          <Box ml="10rem">
            <FooterCol2 />
          </Box>
          <Box mr="10rem" mt="4rem">
            <FooterCol1 />
          </Box>
        </Box>
      </Flex>
      <Box
        d="flex" 
        justifyContent="center" 
        alignContent='center'
      >
       <Box mt="5rem">
        <Text fontSize="48px" w="400px">
          Need help with Adopting a pet?
        </Text>
        <Button 
          bg="#0D75FF" 
          w="155px" 
          h="48px" 
          rounded="full" 
          mt="1rem" 
          color="#fff" 
          fontSize='14px'
          _focus={{border: 'none'}}
          _hover={{ bg: '#0D75FF', opacity: '.7'}}
        >
          View all pets
        </Button>
       </Box>
      </Box>
      <Flex 
        justifyContent="space-between" 
        alignContent="center" 
        color="#616681" 
        mx="2rem"
        mt="5rem"
      >
      <Flex alignItems="center">
      <Box 
        bg="#0D75FF" 
        w="50px" h="50px" 
        rounded="full" 
        d="flex"
        justifyContent="center"
        alignItems="center"
        
      >
        <LogoIcon />
      </Box>
      <Box ml="5px">Petly</Box>
    </Flex>
        <Flex alignItems="center" w="200px" justifyContent='space-between'>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </Flex>
        <Flex fontSize="14px" alignItems="center">
          <Text>Term of use</Text>
          <Text ml="2rem">Privacy Policy</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="center" fontSize="14px" color="#616681" mt="2rem" mr="2rem">
        Copyright © 2021 Petly. All rights reserved.
      </Flex>
    </Box>
  )
}

export default Footer
