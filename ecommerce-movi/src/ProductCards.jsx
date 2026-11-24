import React from 'react';
import './productcard.css';

import productImg from './assets/images/imagem_produto.png';

const produtos = [
  {
    id: 1,
    imagem: productImg,
    nome: 'Tênis Unissex Olympikus Corre 4',
    desconto: '20% OFF',
    precoAntigo: 'De R$ 599,99',
    precoAtual: 'R$ 399,99',
    vendidos: '+500 vendidos',
    parcelasInfo: 'ou R$ 415,00 em ',
    parcelasDestaque: '7x R$ 78,00 sem juros',
    frete: 'Frete grátis',
  },
  {
    id: 2,
    imagem: productImg,
    nome: 'Tênis Unissex Olympikus Corre 4',
    desconto: '20% OFF',
    precoAntigo: 'De R$ 599,99',
    precoAtual: 'R$ 399,99',
    vendidos: '+500 vendidos',
    parcelasInfo: 'ou R$ 415,00 em ',
    parcelasDestaque: '7x R$ 78,00 sem juros',
    frete: 'Frete grátis',
  },
  {
    id: 3,
    imagem: productImg,
    nome: 'Tênis Unissex Olympikus Corre 4',
    desconto: '20% OFF',
    precoAntigo: 'De R$ 599,99',
    precoAtual: 'R$ 399,99',
    vendidos: '+500 vendidos',
    parcelasInfo: 'ou R$ 415,00 em ',
    parcelasDestaque: '7x R$ 78,00 sem juros',
    frete: 'Frete grátis',
  },
  {
    id: 4,
    imagem: productImg,
    nome: 'Tênis Unissex Olympikus Corre 4',
    desconto: '20% OFF',
    precoAntigo: 'De R$ 599,99',
    precoAtual: 'R$ 399,99',
    vendidos: '+500 vendidos',
    parcelasInfo: 'ou R$ 415,00 em ',
    parcelasDestaque: '7x R$ 78,00 sem juros',
    frete: 'Frete grátis',
  },
  
];

const ProductCards = () => {
  return (
    <section className="ofertas-section">
      <h2 className="ofertas-titulo">Ofertas do Dia</h2>

      <div className="ofertas-grid">
        {produtos.map((produto) => (
          <article className="produto-card" key={produto.id}>
            <div className="produto-img-box">
              <img src={produto.imagem} alt={produto.nome} />
            </div>

            <div className="produto-info">
              <h3 className="produto-nome">{produto.nome}</h3>

              <div className="preco-antigo-row">
                <span className="badge-desconto">{produto.desconto}</span>
                <span className="preco-de">{produto.precoAntigo}</span>
              </div>

              <div className="preco-atual-row">
                <span className="preco-valor">{produto.precoAtual}</span>
                <span className="vendidos">{produto.vendidos}</span>
              </div>

              <p className="texto-pix">no Pix</p>

              <p className="texto-parcelas">
                {produto.parcelasInfo}
                <span className="parcelas-verde">{produto.parcelasDestaque}</span>
              </p>

              <p className="texto-frete">{produto.frete}</p>
            </div>

            <button type="button" className="btn-comprar">Comprar</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;