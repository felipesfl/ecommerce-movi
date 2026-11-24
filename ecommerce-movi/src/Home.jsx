import React from 'react';
import './home.css';
import Header from './Header.jsx';
import Slider from './Slider.jsx'
import CategoryCard from './CategoryCard.jsx'
import ProductCards from './ProductCards.jsx'
import CarroselMarcas from './CarroselMarcas.jsx'
import Footer from './Footer.jsx'


import banner01 from './assets/images/imagem_banner.png'
import banner02 from './assets/images/imagem_banner02.png'
import banner03 from './assets/images/imagem_banner03.png'


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

   <section className='banner-duplo-wrapper'>
      <div className="banner-duplo-grid">
         <div className="banner-duplo-card">
             <img src={banner02} alt="" sizes="" srcset="" />
         </div>

         <div className="banner-duplo-card">
             <img src={banner03} alt="" sizes="" srcset="" />
         </div>
      </div>
   </section>

   <Footer />

    </>   
    );
}

export default Home;