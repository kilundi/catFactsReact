/* import React from 'react'
import Home from './Home'
import CatApi from './CatApis'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MainTop = () => {
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
                    <Link to="/"> Home </Link>
                    <Link to="/catApi"> CatApi </Link>
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/catApi" element={ <CatApi /> } />
                    </Routes>
                </Router>

            </QueryClientProvider>
        </div>
    )
}

export default MainTop */