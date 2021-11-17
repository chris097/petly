import React from 'react';
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

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/pets/:id">
              <PetDetails />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
