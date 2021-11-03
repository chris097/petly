import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom';

const queryClient = new QueryClient();
const App = lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback="loading ...">
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Suspense>,
  document.getElementById('root')
);

