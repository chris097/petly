import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PetDetails = () => {
  return (
    <>
      <Header />
        <Box h="400px" maxWidth="800px" mt="6rem" mx="auto" border="1px">do something here...</Box>
      <Footer />
    </>
  )
}

export default PetDetails;