import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/Homepage';

import './index.css';

function App() {
  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
