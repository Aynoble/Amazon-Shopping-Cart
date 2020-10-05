import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="anImage"
        />
        <div className="home_rows">
          <Product
            id="184737"
            title="Xiaomi Mi Note 10 128GB 108MP Penta Camera 6.47″ LTE Factory Unlocked Smartphone (International Version) "
            price={424}
            image="https://m.media-amazon.com/images/I/91AHzW462WL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="296874"
            title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers "
            price={44}
            image="https://images-na.ssl-images-amazon.com/images/I/41yavwjp-8L._AC_US218_.jpg"
            rating={3}
          />
        </div>

        <div className="home_rows">
          <Product
            id="287490"
            title="Apple AirPods with Charging Case (Wired)"
            price={113.52}
            image="https://images-na.ssl-images-amazon.com/images/I/31jBnwWr91L._AC_US218_.jpg"
            rating={4}
          />
          <Product
            id="175093"
            title="PlayStation 4 Slim 1TB Console"
            price={310.92}
            image="https://images-na.ssl-images-amazon.com/images/I/31qwualUaLL._AC_US218_.jpg"
            rating={5}
          />
          <Product
            id="498735"
            title="SteelSeries Arctis 7 - Lossless Wireless Gaming Headset with DTS Headphone:X v2.0 Surround - For PC and PlayStation 4 "
            price={149}
            image="https://m.media-amazon.com/images/I/81pCpKFjBZL._AC_UY218_.jpg"
            rating={3}
          />
        </div>

        <div className="home_rows">
          <Product
            id="398764"
            title="Casio Men's MDV106-1AV 200M Duro Analog Watch, Black"
            price={59}
            image="https://m.media-amazon.com/images/I/91jXI3HY2nL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
