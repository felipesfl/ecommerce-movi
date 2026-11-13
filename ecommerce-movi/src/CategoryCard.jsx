import React from 'react';
import'./categorycard.css';

import card01 from './assets/images/imagem_secao.png'
import card02 from './assets/images/imagem_secao01.png'
import card03 from './assets/images/imagem_secao03.png'

const cards = [
    {id: 1, image: card01, alt: 'Coleção Masculina', link: '#masculino'},
    {id: 2, image: card02, alt: 'Coleção Corrida', link: '#corrida'},
    {id: 3, image: card03, alt: 'Coleção Feminina', link: '#feminina'},
];

const CategoryCard = () => {
   return (
     <section className="cards-section">
         <div className="cards-container">
            {cards.map((card) => (
                <div className="category-card" key={card.id}>
                    <img src={card.image} alt={card.alt} className="card-image" />
                    <a href={card.link} className="card-btn">Ver Mais</a>
                </div>
            ))}
         </div>
     </section>
   );
};

export default CategoryCard;