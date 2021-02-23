import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="101"
            title="Kindle Paperwhite – Now Waterproof with 2x the Storage – Ad-Supported"
            price={59.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61eAq6gg-XL._AC_SY450_.jpg"
          />
          <Product
            id="102"
            title="Fender Squier Short Scale 24 Stratocaster Transparent Red Learn-to-Play Bundle with Frontman10G Amp CableTunerStrap Picks"
            price={299.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71y3xVeQpRL._AC_SL1498_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="103"
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
            price={169.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
          />
          <Product
            id="104"
            title="Amplim Hospital Medical Grade Non Contact Clinical Infrared Forehead Thermometer for Baby and Adults, 1701, Serenity"
            price={22.87}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/515WGi0QINL._SL1500_.jpg"
          />
          <Product
            id="105"
            title="Nike Men's Downshifter 9 Running Shoe"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/718VXgpyTLL._AC_SY500._SX._UX._SY._UY_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="106"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
          />
          <Product
            id="107"
            title="Bose Lifestyle 650 Home Entertainment System, works with Alexa - Black"
            price={3999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71yCuyhzg7L._AC_SL1500_.jpg"
          />
          <Product
            id="109"
            title="DeskCycle Under Desk Bike Pedal Exerciser – Mini Exercise Peddler – Stationary Cycle for Home & Office"
            price={195.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71X63V-G%2BbL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="110"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
