import React from 'react';
import './footer.css';

import logoMovi from './assets/images/logo_01.png';
import iconeFacebook from './assets/images/icone_facebook.png';
import iconeInstagram from './assets/images/icone_instagram.png';
import iconeX from './assets/images/icone_x.png';
import iconeYoutube from './assets/images/icone_youtube.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Colunas alinhadas à esquerda com o logo */}
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Ajuda e Suporte</h3>
            <ul>
              <li><a href="#acompanhar">Acompanhar Pedido</a></li>
              <li><a href="#duvidas">Dúvidas Frequentes</a></li>
              <li><a href="#fale-conosco">Fale com a gente</a></li>
              <li><a href="#troca">Troca e arrependimento</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Política e regulamentos</h3>
            <ul>
              <li><a href="#cookies">Política de cookies</a></li>
              <li><a href="#privacidade">Política de privacidade</a></li>
              <li><a href="#seguranca">Segurança</a></li>
              <li><a href="#termos">Termos e condições</a></li>
              <li><a href="#regulamentos">Regulamentos</a></li>
              <li><a href="#denuncias">Denúncias de fraudes digitais</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#imprensa">Assessoria de imprensa</a></li>
              <li><a href="#investidores">Relação com investidores</a></li>
              <li><a href="#trabalhe">Trabalhe conosco</a></li>
              <li><a href="#empresas">Soluções para empresas</a></li>
            </ul>
          </div>
        </div>

        {/* Linha divisória e barra inferior dentro do mesmo container */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src={logoMovi} alt="Movi Material Esportivo" />
          </div>

          <p className="footer-copyright">
            Todos os direitos reservados - 2026 - Movi - Material Esportivo
          </p>

          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook">
              <img src={iconeFacebook} alt="Facebook" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <img src={iconeInstagram} alt="Instagram" />
            </a>
            <a href="#x" aria-label="X">
              <img src={iconeX} alt="X" />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <img src={iconeYoutube} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;