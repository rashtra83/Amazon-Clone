import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB654576486_.png"
                    alt=""
                ></img>

                <div className="home__row">
                    <Product
                        id = "11223344"
                        title="Amazfit GTS2 mini Super-light Smart Watch with 14 Days' Battery Life, 70+ Sports Modes, Built-in GPS, Built-in Amazon Alexa, SpO2 Level Measurement, Heart Rate, Sleep&Stress Monitoring(Midnight Black)"
                        price={6999.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/618MEYCaUQL._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="55223344"
                        title='HP Envy x360 Convertible Touchscreen 13.3-inch FHD Laptop (3rd Gen Ryzen 5 4500U/8GB/512GB SSD/Win 10 Home/Night Fall Black/1.32kg), 13-ay0045AU'
                        price={70490}
                        image="https://images-na.ssl-images-amazon.com/images/I/61nTgrUV%2BjL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="66223344"
                        title='Creative Pebble 2.0 USB-Powered Desktop Speakers with Far-Field Drivers and Passive Radiators for PCs and Laptops (Black)'
                        price={1440}
                        image="https://images-na.ssl-images-amazon.com/images/I/31lrbOsJ2qL._AC_.jpg"
                        rating={4}
                    />
                    <Product
                        id="77223344"
                        title='Sony WF-1000XM3 Truly Wireless Industry Leading Active Noise Cancellation with Battery Life 32 Hours, Alexa Voice Control and mic for Phone Calls – True Wireless Bluetooth Earbuds (Black)'
                        price={14990}
                        image="https://images-na.ssl-images-amazon.com/images/I/61zKkP36kDL._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="88223344"
                        title='Sony WH-CH710N Noise Cancelling Wireless Headphones : Bluetooth Over The Ear Headset with Mic for Phone-Call, 35 Hours Battery Life, Quick Charge and Google Assitant - Black'
                        price={4743}
                        image="https://images-na.ssl-images-amazon.com/images/I/61N6Ai7RkJL._AC_SL1500_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="99223344"
                        title='Amazfit Huami 20 Days Battery Life, AMOLED Display, Built-in GPS, 12 Military Certifications, Water Resistance, 14 Sports Modes Amazfit T-Rex Smartwatch (Rock Black)'
                        price={9999}
                        image="https://images-na.ssl-images-amazon.com/images/I/61HulY%2Bf9uL._AC_SL1281_.jpg"
                        rating={4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
