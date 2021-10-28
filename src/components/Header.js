import React from 'react';
import {
  Box,
  Flex, 
  Link,
  Button
} from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { ReactComponent as LogoIcon } from '../svgs/logo.svg';

const Header = () => {
  return (
    <Box 
      w="100%"
      h="72px"
      bg="#fff" 
      color="#58667E"
      pos="fixed"
      left="0"
      top="0"
      boxShadow="xs"
      px="4rem"
      zIndex="2"
      >
      <Flex 
        justifyContent="space-between"
        alignItems="center"
        h="100%"
      >
        <Flex 
          w="600px" 
          justifyContent="space-between" 
          alignItems="center"
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
          <Flex fontSize="14px">
            <Link>Find a pet to Adopt</Link>
            <Link ml="4rem">Report a missing pet</Link>
          </Flex>
        </Flex>
        <Flex border="1px" rounded="5px">
          <Button 
            bg="transparent" 
            _focus={{bg: '#fff'}} 
            _hover={{bg: '#fff'}}
          >
            <FaSun color="#0D75FF" />
          </Button>
          <Button 
            bg="transparent"  
            _focus={{bg: '#fff'}} 
            _hover={{bg: '#fff'}}
          >
            <BsFillMoonStarsFill />
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
