import React from 'react';
import { Route } from "react-router-dom";
import "./Home.css";
import Products from './Products';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" className='cover-image' alt='background'/>
        <Products />  
      </div>
      
    </div>
  )
}

export default Home

