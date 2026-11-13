import React from 'react';
import Header from './Header.jsx';
import Slider from './Slider.jsx'
import CategoryCard from './CategoryCard.jsx'

import slideImage from './assets/images/imagem_slide.png'
import categoryImage01 from './assets/images/imagem_secao.png'
import categoryImage02 from './assets/images/imagem_secao01.png'
import categoryImage03 from './assets/images/imagem_secao03.png'


function Home(){
    return(
    <>
       <Header />
       <Slider />
       <CategoryCard />

    </>   
    );
}

export default Home;