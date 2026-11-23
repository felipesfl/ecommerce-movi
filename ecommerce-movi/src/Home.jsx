import React from 'react';
import './home.css';
import Header from './Header.jsx';
import Slider from './Slider.jsx'
import CategoryCard from './CategoryCard.jsx'
import ProductCards from './ProductCards.jsx'
import CarroselMarcas from './CarroselMarcas.jsx'


import banner01 from './assets/images/imagem_banner.png'


function Home(){
    return(
    <>
       <Header />
       <Slider />
       <CategoryCard />
       <ProductCards />
       <CarroselMarcas />

    <section className="banner-promo-wrapper">
      <div className="banner-promo-box">
        <img 
          src={banner01} 
          alt="Banner Promocional" 
          className="banner-promo-img" 
        />
      </div>
    </section>

    <ProductCards />

    </>   
    );
}

export default Home;