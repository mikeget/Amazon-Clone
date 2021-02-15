import React from 'react';
import './Home.css';
import Product from "./Product";

    function Home() {
            return (
            <div className="home">
                <div className="home__container">
                <img
                    className="Home__image"
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
                    title="Fender Squier Short Scale 24 Stratocaster  Transparent Red Learn-to-Play Bundle with Frontman10G Amp CableTunerStrap Picks Fender Play Online Lessons and Austin Bazaar Instructional DVD"
                    price={299.99}
                    rating={4.5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71y3xVeQpRL._AC_SL1498_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                    id="103"
                    title="GZ GZHISY Pack 5 Sport Bands Compatible with Apple Watch Band 38mm 40mm, Soft Silicone Band Sport Strap Compatible for iWatch Series 6/SE/5/4/3/2/1 (Black/Midnight Blue/Cactus/Lilac/Grapefruit, S/M"
                    price={15.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71w6HNAzCNL._AC_SL1500_.jpg"
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
                    title="Samsung UN85TU8000 4K Crystal 8 Series Ultra High Definition Smart TV with a Samsung HW-T650 Bluetooth Soundbar with Dolby Audio Wireless Subwoofer (2020)"
                    price={2025.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91o6%2Bqwl74L._AC_SX355_.jpg"
                    />
                </div>
                </div>
            </div>
            );
    }

    export default Home;
