import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

//contents
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>  
        <Route path='/About' element={<About />}/>       
        <Route path='/Education' element={<Education />}/>
        <Route path='/Skills' element={<Skills />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
