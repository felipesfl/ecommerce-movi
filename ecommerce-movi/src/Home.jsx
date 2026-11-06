import React from 'react';
import Header from './Header.jsx';

import slideImage from './assets/images/imagem_slide.png'


function Home(){
    return(
    <>
       <Header />

       <section className='section-slide'>
           <div className='hs-carousel'>
              <div className="">
                  <div className="slides">
                      <div className="slide-image">
                         <img src={slideImage} alt="" srcset="" />
                      </div>

                      <div className="slide-image">
                         <img src={slideImage} alt="" srcset="" />
                      </div>

                      <div className="slide-image">
                         <img src={slideImage} alt="" srcset="" />
                      </div>
                  </div>
              </div>
           </div>

           <div className="buttons-active">
               <button className="btn-active"></button>
               <button className="btn-active"></button>
               <button className="btn-active"></button>
           </div>

       </section>

       
    </>   
    );
}

export default Home;