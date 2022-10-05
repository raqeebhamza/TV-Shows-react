import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {AboutPage} from './pages/AboutPage'
import {SinglePage} from './pages/SinglePage'
import {HomePage} from './pages/HomePage'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route  path="/" element={<HomePage/>}/>
          <Route  path="/about" element={<AboutPage/>}/> 
          <Route  path="/singleshow/:id" element={<SinglePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
