import React from 'react'

import CatApi from './components/reactQuery/CatApis'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from './components/reactQuery/Home';

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });
  return (
    <div>
      <QueryClientProvider client={ client } >
        <Router>
          <Link to="/"> Cat Fact </Link>
          <Link to="/About"> About </Link>
          <Routes>
            <Route path="/" element={ <CatApi /> } />
            <Route path="/About" element={ <About /> } />
          </Routes>
        </Router>

      </QueryClientProvider>
    </div>
  )
}

export default App