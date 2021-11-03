import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/Homepage';

import './index.css';
import PetDetails from './pages/PetDetails';

function App() {

  const [ petInfo, setPetInfo] = useState('');
  console.log(petInfo.name)

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage setPetInfo={setPetInfo} />
          </Route>
          <Route path="/pets/:id">
              <PetDetails pet={petInfo} />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
