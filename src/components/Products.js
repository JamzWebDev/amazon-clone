import React from 'react'
import "./Products.css"
import Product from './Product';

const Products = () => {
  return (
    <>
      <div className="products-row">
        <Product
          id="111"
          title="Microsoft Xbox Series S All-Digital Console 512GB (Disc-free Gaming) - White - Includes Xbox Wireless Controller - 10GB RAM 512GB SSD"
          image="https://m.media-amazon.com/images/I/61hwaBMvOxL._AC_UY218_.jpg"
          rating={4}
          price={399.90}
        />

        <Product
          id="222"
          title="ASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, 16GB DDR5, Windows 11"
          image="https://m.media-amazon.com/images/I/81GrCeuCzxL._AC_UY218_.jpg"
          rating={4}
          price={772.80}
        />
      </div>
      <div className="products-row">
        <Product
          id="333"
          title="GameSir G7 SE Wired Controller for Xbox Series X|S, Xbox One & Windows 10/11, Plug and Play Gaming Gamepad with Hall Effect Joysticks/Hall Trigger, 3.5mm Audio Jack"
          image="https://m.media-amazon.com/images/I/51iXILIT27L._AC_UY218_.jpg"
          rating={5}
          price={44.99}
        />

        <Product
          id="444"
          title="Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, Lightsync RGB, Blue VO!CE mic technology and PRO-G audio drivers - Black"
          image="https://m.media-amazon.com/images/I/71xNjrzG69L._AC_UY218_.jpg"
          rating={4}
          price={107.00}
        />

        <Product
          id="555"
          title="GTRACING Gaming Chair with Footrest Speakers Video Game Chair Bluetooth Music Heavy Duty Ergonomic Computer Office Desk Chair Red"
          image="https://m.media-amazon.com/images/I/71y9SgG-XaS._AC_UL320_.jpg"
          rating={3}
          price={149.99}
        />
      </div>
      <div className="products-row">
      <Product
          id="666"
          title="EA Sports FC 24 - For Playstation 5"
          image="https://m.media-amazon.com/images/I/51qA4aJekiL._AC_UY218_.jpg"
          rating={4}
          price={39.99}
        />
      </div>
    </>
  );
}

export default Products
