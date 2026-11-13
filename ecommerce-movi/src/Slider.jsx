import React, { useState, useEffect } from 'react';
import './slider.css';

import slide01 from './assets/images/imagem_slide.png';
import slide02 from './assets/images/imagem_slide01.png';
import slide03 from './assets/images/imagem_slide02.png';
import setaIcone from './assets/images/icone_seta.png';

const slides = [
  { id: 1, image: slide01, alt: 'Slide 1' },
  { id: 2, image: slide02, alt: 'Slide 2' },
  { id: 3, image: slide03, alt: 'Slide 3' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="banner-slider">
      <button className="slider-btn prev" onClick={prevSlide} aria-label="Anterior"><img src={setaIcone} alt="Anterior" className="arrow-icon flip" /></button>


      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div className="banner-slide" key={slide.id}>
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>

      <button className="slider-btn next" onClick={nextSlide} aria-label="Próximo"><img src={setaIcone} alt="Próximo" className="arrow-icon" /></button>
    </section>
  );
};

export default Slider;