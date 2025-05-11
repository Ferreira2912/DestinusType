'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContatoSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    try {
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <section id="contato" className="contato-section">
      <div className="section-header">
        <h2>FALE <span>CONOSCO</span></h2>
        <p>Tire suas dúvidas ou solicite um orçamento personalizado</p>
      </div>
      
      <div className="contato-container">
        <div className="contato-info">
          <div className="info-item">
            <Image 
              src="/assets/icons/email-icon.svg" 
              alt="Email" 
              width={24} 
              height={24} 
            />
            <div>
              <h4>Email</h4>
              <p>contato@destinus.com.br</p>
            </div>
          </div>
          
          <div className="info-item">
            <Image 
              src="/assets/icons/whatsapp-icon.svg" 
              alt="WhatsApp" 
              width={24} 
              height={24} 
            />
            <div>
              <h4>WhatsApp</h4>
              <p>(11) 98765-4321</p>
            </div>
          </div>
          
          <div className="info-item">
            <Image 
              src="/assets/icons/clock-icon.svg" 
              alt="Horário" 
              width={24} 
              height={24} 
            />
            <div>
              <h4>Horário de Atendimento</h4>
              <p>Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h</p>
            </div>
          </div>
        </div>
        
        <div className="contato-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                value={formData.nome}
                onChange={handleChange}
                required 
              />
              <label htmlFor="nome">Nome Completo</label>
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <label htmlFor="email">Email</label>
            </div>
            
            <div className="form-group">
              <input 
                type="tel" 
                id="telefone" 
                name="telefone" 
                value={formData.telefone}
                onChange={handleChange}
                required 
              />
              <label htmlFor="telefone">Telefone</label>
            </div>
            
            <div className="form-group">
              <select 
                id="assunto" 
                name="assunto" 
                value={formData.assunto}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option value="orcamento">Solicitar Orçamento</option>
                <option value="duvida">Tirar Dúvidas</option>
                <option value="reclamacao">Reclamação</option>
                <option value="outros">Outros</option>
              </select>
              <label htmlFor="assunto">Assunto</label>
            </div>
            
            <div className="form-group">
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows={4} 
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="mensagem">Mensagem</label>
            </div>
            
            <button type="submit" className="cta-button full-width">ENVIAR MENSAGEM</button>
          </form>
        </div>
      </div>
    </section>
  );
}