import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom';
import Loading from './components/loading/Loading';
import { Center } from '@chakra-ui/react';

const queryClient = new QueryClient();
const App = lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={<Center mt="8rem"><Loading color="#0D75FF" size={70} /></Center>}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Suspense>,
  document.getElementById('root')
);

