import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span>DESTINUS</span>
          <p>Sua jornada começa aqui</p>
          
          <div className="social-icons">
            <a href="#"><Image src="/assets/icons/facebook-icon.svg" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="/assets/icons/instagram-icon.svg" alt="Instagram" width={24} height={24} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Pacotes</h4>
            <ul>
              <li><Link href="/pacotes/rodoviarios">Pacotes Rodoviários</Link></li>
              <li><Link href="/pacotes/aereos">Pacotes Aéreos</Link></li>
              <li><Link href="/pacotes/nacionais">Pacotes Nacionais</Link></li>
              <li><Link href="/pacotes/internacionais">Pacotes Internacionais</Link></li>
              <li><Link href="/promocoes">Promoções</Link></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h4>Informações</h4>
            <ul>
              <li><Link href="/blog">Blog de Viagens</Link></li>
              <li><Link href="/blog/dicas">Dicas para Viajar</Link></li>
              <li><Link href="/documentacao">Documentação Necessária</Link></li>
              <li><Link href="/faq">Perguntas Frequentes</Link></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h4>Empresa</h4>
            <ul>
              <li><Link href="/sobre">Sobre a Destinus</Link></li>
              <li><Link href="/termos">Termos e Condições</Link></li>
              <li><Link href="/privacidade">Política de Privacidade</Link></li>
              <li><Link href="/trabalhe-conosco">Trabalhe Conosco</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Destinus Turismo. Todos os direitos reservados.</p>
        <div className="payment-methods">
          <Image src="/assets/icons/visa-icon.svg" alt="Visa" width={40} height={25} />
          <Image src="/assets/icons/mastercard-icon.svg" alt="Mastercard" width={40} height={25} />
          <Image src="/assets/icons/pix-icon.svg" alt="Pix" width={40} height={25} />
        </div>
      </div>
    </footer>
  );
}