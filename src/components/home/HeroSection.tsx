'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: '/assets/images/hero-1.webp',
    title: 'DESCUBRA O BRASIL <span>DE ÔNIBUS</span>',
    description: 'Pacotes rodoviários com conforto, segurança e o melhor custo-benefício'
  },
  {
    id: 2,
    image: '/assets/images/hero-2.webp',
    title: 'VIAGENS AÉREAS <span>COM DESCONTO</span>',
    description: 'As melhores tarifas aéreas combinadas com hospedagens exclusivas'
  },
  {
    id: 3,
    image: '/assets/images/hero-3.webp',
    title: 'CRUZEIROS <span>INESQUECÍVEIS</span>',
    description: 'Navegue pelos melhores destinos com todo conforto e luxo dos navios mais modernos'
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide ${index === activeSlide ? 'active' : ''}`} 
            style={{ 
              backgroundImage: slide.image ? `url(${slide.image})` : 'none' 
            }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
              <p>{slide.description}</p>
              <div className="hero-cta">
                <button className="cta-button large">VER PACOTES</button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="slider-controls">
          <button className="slider-prev" onClick={prevSlide}>&lt;</button>
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
          <button className="slider-next" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
      
      {/* Moved the scroll indicator outside the slider-controls */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
}