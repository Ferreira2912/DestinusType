import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="section-header">
        <h2>DICAS E <span>NOTÍCIAS</span></h2>
        <p>Confira nossas últimas publicações para planejar sua viagem</p>
      </div>
      <div className="blog-grid">
        {/* Post 1 */}
        <div className="blog-card">
          <div className="blog-image">
            <Image
              src="/assets/images/blog-1.jpg" // Updated path from /images/ to /assets/images/
              alt="Dicas para viagens de ônibus"
              width={400}
              height={250}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
            <div className="blog-overlay"></div>
          </div>
          <div className="blog-info">
            <h3>10 Dicas para Viajar de Ônibus com Conforto</h3>
            <p className="blog-resumo">Saiba como tornar sua viagem rodoviária mais agradável com essas dicas essenciais...</p>
            <div className="blog-meta">
              <span className="blog-data">15 MAI 2025</span>
              <span className="blog-tempo">5 MIN LEITURA</span>
            </div>
          </div>
        </div>
        
        {/* Post 2 */}
        <div className="blog-card">
          <div className="blog-image">
            <Image
              src="/assets/images/blog-2.jpg" // Updated path from /images/ to /assets/images/
              alt="Destinos nacionais"
              width={400}
              height={250}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
            <div className="blog-overlay"></div>
          </div>
          <div className="blog-info">
            <h3>5 Destinos Nacionais Perfeitos para Viajar em 2025</h3>
            <p className="blog-resumo">Confira nossa seleção dos melhores destinos brasileiros para visitar este ano...</p>
            <div className="blog-meta">
              <span className="blog-data">02 MAI 2025</span>
              <span className="blog-tempo">7 MIN LEITURA</span>
            </div>
          </div>
        </div>
        
        {/* Post 3 */}
        <div className="blog-card">
          <div className="blog-image">
            <Image
              src="/assets/images/blog-3.jpg" // Updated path from /images/ to /assets/images/
              alt="Economizar em viagens"
              width={400}
              height={250}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
            <div className="blog-overlay"></div>
          </div>
          <div className="blog-info">
            <h3>Como Economizar em Pacotes de Viagem sem Perder Qualidade</h3>
            <p className="blog-resumo">Estratégias inteligentes para gastar menos e aproveitar mais suas férias...</p>
            <div className="blog-meta">
              <span className="blog-data">20 ABR 2025</span>
              <span className="blog-tempo">6 MIN LEITURA</span>
            </div>
          </div>
      </div>
      </div>
      <div className="section-cta">
        <Link className="cta-button2" href="/blog">
          VER TODOS OS ARTIGOS
        </Link>
      </div>
    </section>
  );
}