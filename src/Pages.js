import React from "react";
import {Routes, Route} from 'react-router-dom'
import Pricing from './Navbar/Pricing';
import Contact from './Navbar/Contact';
import Features from './Navbar/Features';
import Login from './Navbar/Login';
import Bookmarking from './Section/MiniRoutes/Bookmarking'
import Searching from './Section/MiniRoutes/Searching'
import Sharing from './Section/MiniRoutes/Sharing'
import Home from "./Section/Home";
    

const Pages = () => {
    return(
        <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/features' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/login' element={< Login/>} />

        <Route path="/" element={<Home />}>
        <Route path='/bookmarking' element={< Bookmarking/>} />
        <Route path='/Searching' element={< Searching/>} />
        <Route path='/sharing' element={< Sharing/>} />
        </Route>
      </Routes>
    )
};

export default Pages;