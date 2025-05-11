import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function DestaquesSection() {
  return (
    <section className="destaques-section">
      <div className="section-header">
        <h2>PACOTES <span>EM DESTAQUE</span></h2>
        <p>Os pacotes mais procurados pelos nossos clientes</p>
      </div>
      <div className="pacotes-grid">
        {/* Pacote 1 */}
        <div className="pacote-card rodoviario">
          <div className="pacote-badge">RODOVIÁRIO</div>
          <div className="pacote-image">
            <Image
              src="/assets/images/pacote-1.webp" // Updated path to match folder structure
              alt="Pantanal"
              width={400}
              height={250}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
            <div className="pacote-overlay"></div>
          </div>
          <div className="pacote-info">
            <h3>Pantanal, Bonito, Miranda e Corumbá S</h3>
            <div className="pacote-meta">
              <span className="duracao">8 dias</span>
              <span className="preco">10x de R$375,00</span>
            </div>
            <div className="pacote-desc">
              <p>Conheça as maravilhas do Pantanal, Bonito, Miranda e Corumbá em uma viagem repleta de natureza e aventura.</p>
            </div>
            <div className="pacote-cta">
              <button className="cta-button small">DETALHES</button>
              <button className="secondary-button small">FAZER RESERVA</button>
            </div>
          </div>
        </div>
        
        {/* Pacote 2 */}
        <div className="pacote-card rodoviario">
          <div className="pacote-badge">RODOVIÁRIO</div>
          <div className="pacote-image">
            <Image
              src="/assets/images/pacote-2.webp" // Updated path to match folder structure
              alt="Aparecida e Rio de Janeiro"
              width={400}
              height={250}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
            <div className="pacote-overlay"></div>
          </div>
          <div className="pacote-info">
            <h3>Aparecida e Rio de Janeiro</h3>
            <div className="pacote-meta">
              <span className="duracao">6 dias</span>
              <span className="preco">10x de R$275,00</span>
            </div>
            <div className="pacote-desc">
              <p>Descubra a fé e a beleza em uma viagem que une Aparecida e Rio de Janeiro.</p>
            </div>
            <div className="pacote-cta">
              <button className="cta-button small">DETALHES</button>
              <button className="secondary-button small">FAZER RESERVA</button>
            </div>
          </div>
        </div>
        
        {/* Pacote 3 */}
        <div className="pacote-card aereo">
          <div className="pacote-badge">RODOVIÁRIO</div>
          <div className="pacote-image">
            <Image
              src="/assets/images/pacote-3.webp" // Updated path to match folder structure
              alt="Ametista do Sul"
              width={400}
              height={250}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
            <div className="pacote-overlay"></div>
          </div>
          <div className="pacote-info">
            <h3>Ametista do Sul</h3>
            <div className="pacote-meta">
              <span className="duracao">1 dia</span>
              <span className="preco">04x de R$87,59</span>
            </div>
            <div className="pacote-desc">
              <p>Encante-se com Ametista do Sul, um destino único no sul do Brasil onde natureza, espiritualidade e pedras preciosas se encontram.</p>
            </div>
            <div className="pacote-cta">
              <button className="cta-button small">DETALHES</button>
              <button className="secondary-button small">FAZER RESERVA</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-cta">
        <Link className="cta-button2" href="/pacotes">
          VER TODOS OS PACOTES
        </Link>
      </div>
    </section>
  );
}