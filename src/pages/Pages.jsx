import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Pages() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
      </Routes>
  )
}

export default Pages