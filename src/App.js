
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import Service from './components/pages/Service';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='mainContainer'>
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/service' element={<Service/>} />
         <Route path='/product' element={<Product/>} />
         <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
