import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui podes integrar com o teu backend ou API de email
    console.log('Formulário enviado:', formData);
    alert('Obrigado pelo seu contacto! Entraremos em contacto em breve.');
    setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contacte-nos</h1>
        <p>Estamos ao seu dispor para esclarecer qualquer questão relacionada com serviços jurídicos. Preencha o formulário ou utilize os nossos contactos diretos.</p>
      </section>

      {/* Contact Info + Map */}
      <section className="contact-info-section">
        <div className="contact-grid">
          <div className="contact-details">
            <h2>Contactos do Escritório</h2>
            <p><strong>Endereço:</strong> Av. Serpa Pinto 232 1º andar, 4450-275 Matosinhos</p>
            <p><strong>Telefone:</strong> 910 614 229</p>
            <p><strong>Email:</strong> contacto@barbosamartins.pt</p>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.949037671222!2d-8.677563584691045!3d41.180830579299095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464ff30c33fbb%3A0x15a26fa5ed00a0f4!2sAv.%20Serpa%20Pinto%20232%2C%204450-275%20Matosinhos!5e0!3m2!1spt-PT!2spt!4v1693969891234!5m2!1spt-PT!2spt"
              allowFullScreen
              loading="lazy"
              title="Localização do Escritório"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <h2>Envie-nos uma Mensagem</h2>
        <p>Preencha o formulário abaixo e entraremos em contacto consigo o mais rapidamente possível.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Introduza o seu nome completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="assunto">Assunto</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              placeholder="Motivo do contacto"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="6"
              value={formData.mensagem}
              onChange={handleChange}
              required
              placeholder="Escreva a sua mensagem aqui..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-large">
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
