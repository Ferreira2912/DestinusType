'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Make header sticky after scrolling 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" id="logo">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="Destinus"
              className="logo-img"
              width={180}
              height={60}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>
        </div>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link href="/" className="nav-link active">Home</Link></li>
            <li><Link href="/pacotes" className="nav-link">Pacotes</Link></li>
            <li><Link href="/blog" className="nav-link">Blog</Link></li>
            <li><Link href="/sobre" className="nav-link">Sobre Nós</Link></li>
          </ul>
        </nav>
        
        <div className="header-cta">
          <button className="cta-button pulse">FALE COM UM ESPECIALISTA</button>
        </div>
        
        <div className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
  );
}