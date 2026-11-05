import React from 'react';
import './header.css';

import logoImage from './assets/images/logo_01.png'
import searchIcone from './assets/images/icone_buscar.png'
import localizacaoIcone from './assets/images/icone_localizacao.png'
import carrinhoIcone from './assets/images/icone_carrinho.png'
import userIcone from './assets/images/icone_usuario.png'

const Header = () => {
    return(
        <header className="header-container">
            <div className="header-top">
                 <div className="header-logo">
                    <img src={logoImage} alt="" srcset="" />
                 </div>

                 <div className="header-search">
                    <input type="text" placeholder="O que você procura?" />
                    <img src={searchIcone} alt="Buscar" className="icon search-icon" />
                 </div>

                 <div className="header-actions">
                    <div className="action-item">
                        <img src={localizacaoIcone} alt="Localizacao" className="icon"/>
                        <span>Informe seu CEP </span>
                    </div>

                    <div className="action-item cart-icon">
                        <img src={carrinhoIcone} alt="Carrinho de compras" className="icon-large"/>
                    </div>

                    <div className="action-item">
                        <img src={userIcone} alt="Perffil do Usuario" className="icon" />
                        <span>Entre ou Cadastre</span>
                    </div>
                 </div>
            </div>

            <nav className="header-bottom">
                <ul className="nav-links">
                    <li><a href="#esportes">Esportes</a></li>
                    <li><a href="#masculino">Masculino</a></li>
                    <li><a href="#feminino">Feminino</a></li>
                    <li><a href="#infantil">Infantil</a></li>
                    <li><a href="#calcados">Calçados</a></li>
                    <li><a href="#roupas">Roupas</a></li>
                    <li><a href="#corrida">Corrida</a></li>
                    <li><a href="#futebol">Futebol</a></li>
                    <li><a href="#suplementos">Suplementos</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;