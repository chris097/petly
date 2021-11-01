import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import Homepage from './pages/Homepage';

import './index.css';
import PetDetails from './pages/PetDetails';

function App() {
  return (
    <ChakraProvider>
   {/* <Homepage /> */}
   <PetDetails />
    </ChakraProvider>
  );
}

export default App;
