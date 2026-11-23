import React from 'react';
import './carroselmarcas.css';

import logoAdidas from './assets/images/icone_adidas.png'
import logoNike from './assets/images/icone_nike.png'
import logoOlympikus from './assets/images/icone_olympikus.png'
import logoUmbro from './assets/images/icone_umbro.png';
import logoUnder from './assets/images/icone_under.png';
import logoJoma from './assets/images/icone_joma.png'

const CarroselMarcas = () => {
    const marcas = [
        {nome: 'Adidas', img: logoAdidas},
        {nome: 'Nike', img: logoNike},
        {nome: 'Olympikus', img: logoOlympikus},
        {nome: 'Umbro', img: logoUmbro},
        {nome: 'Under Armour', img: logoUnder},
        {nome: 'Joma', img: logoJoma},
    ];

    const listaInfinita = [...marcas, ...marcas];

    return (
        
        <section className="marcas-container">
                <div className="marcas-track">
                    {listaInfinita.map((marca, index) => (
                        <div className="marca-item" key={index}>
                            <img src={marca.img} alt={marca.nome} />
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default CarroselMarcas;