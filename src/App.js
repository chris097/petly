import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetailPage from './pages/DetailPage';
import { urls } from './utils/url';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
         <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={urls.PET_DETAILS(":petId")} element={<DetailPage />} />
      </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
