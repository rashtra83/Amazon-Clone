import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/ApparelGW/ATF/TopBrand/V1/5._CB668916628_.jpg"
                    alt=""
                ></img>
                
                <div className="home__row">
                    <Product
                        id="66223344"
                        title='Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)'
                        price={14999}
                        image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        id="77223344"
                        title='Redmi Note 9 (Pebble Grey, 4GB RAM 64GB Storage) - 48MP Quad Camera & Full HD+ Display'
                        price={10999}
                        image="https://m.media-amazon.com/images/I/71X5I1cVfbL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        id="88223344"
                        title='Oppo A31 (Mystery Black, 6GB RAM, 128GB Storage)'
                        price={10990}
                        image="https://images-na.ssl-images-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id = "11223344"
                        title="Harry Potter and the Philosopher's Stone"
                        price={282.00}
                        image="https://m.media-amazon.com/images/P/1408855658.01._SCLZZZZZZZ_SX500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="55223344"
                        title='Harry Potter and the Chamber of Secrets'
                        price={317}
                        image="https://m.media-amazon.com/images/I/91HHqVTAJQL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="11223344"
                        title="Harry Potter and the Prisoner of Azkaban"
                        price={318.00}
                        image="https://m.media-amazon.com/images/I/91uix57X+jL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="55223344"
                        title='Harry Potter and the Goblet of Fire'
                        price={436}
                        image="https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="99223344"
                        title='New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band'
                        price={32900.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="99223344"
                        title='Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Silver),SM-R840NZSAINS'
                        price={32400}
                        image="https://images-na.ssl-images-amazon.com/images/I/715H19Jsp-L._SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="99223344"
                        title='Realme Watch S with 1.3" TFT-LCD Touchscreen, 15 Days Battery Life, SpO2 & Heart Rate Monitoring, IP68 Water Resistance'
                        price={4999}
                        image="https://images-na.ssl-images-amazon.com/images/I/614SBqXrTES._SL1500_.jpg"
                        rating={4}
                    />
                </div>

                 <div className="home__row">
                    <Product
                        id="11223344"
                        title="Lenovo Tab M10 FHD Plus (2nd Gen) (10.3 inch, 4 GB, 128 GB, Wi-Fi+ LTE) with Active Pen"
                        price={22999.00}
                        image="https://m.media-amazon.com/images/I/71UD5dhwyYS._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="55223344"
                        title='Samsung Galaxy Tab A 10.1 Wi-Fi Tablet 25.65 cm (10.1 inch), RAM 2 GB, ROM 32GB,Black'
                        price={14999}
                        image="https://m.media-amazon.com/images/I/71PWPoS+NtL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="11223344"
                        title="Lenovo Tab M10 HD 2nd Gen (10.1 inch, 4 GB, 64 GB, Wi-Fi+LTE)"
                        price={16999.00}
                        image="https://m.media-amazon.com/images/I/41jdvXSoeyS._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="55223344"
                        title='Panasonic Tab 8 HD Tablet (20.32 cm (8 Inch), 3GB | 32GB, Wi-Fi + 4G LTE + Voice Calling, Dual Sim), Black'
                        price={9499}
                        image="https://m.media-amazon.com/images/I/51a7pDa3xjS._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Home
