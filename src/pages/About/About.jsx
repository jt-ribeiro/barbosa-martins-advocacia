import React from 'react';
import './About.scss';
import { Activity, Award, Users, CheckCircle, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Sobre Nós</h1>
          <div className="hero-description">
            <p>
              Somos um escritório de advocacia dedicado a fornecer serviços jurídicos de excelência, sempre focados nas necessidades dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* History/Timeline Section */}
      <section className="timeline-section">
        <div className="section-header">
          <h2>Nosso Percurso</h2>
          <p>Marcos importantes que marcaram a trajetória da nossa empresa.</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2005</div>
            <div className="timeline-content">
              <div className="timeline-dot"><Award size={24} /></div>
              <div className="timeline-event">
                <h3>Fundação</h3>
                <p>O início do nosso escritório de advocacia.</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2010</div>
            <div className="timeline-content">
              <div className="timeline-dot"><Users size={24} /></div>
              <div className="timeline-event">
                <h3>Crescimento</h3>
                <p>Expandimos a equipa e aumentamos a base de clientes.</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2015</div>
            <div className="timeline-content">
              <div className="timeline-dot"><Activity size={24} /></div>
              <div className="timeline-event">
                <h3>Inovação</h3>
                <p>Implementámos novas tecnologias e processos para maior eficiência.</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <div className="timeline-dot"><Target size={24} /></div>
              <div className="timeline-event">
                <h3>Presente</h3>
                <p>Hoje somos referência em serviços jurídicos, reconhecidos pela excelência.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2>Nossos Valores</h2>
          <p>Principais princípios que orientam nosso trabalho diariamente.</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><Activity /></div>
            <h3>Proatividade</h3>
            <p>Antecipamos problemas e oferecemos soluções eficazes e rápidas.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Award /></div>
            <h3>Excelência</h3>
            <p>Compromisso com a qualidade e resultados superiores em todos os casos.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><Users /></div>
            <h3>Transparência</h3>
            <p>Trabalhamos com comunicação aberta e honesta com nossos clientes.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><CheckCircle /></div>
            <h3>Confiabilidade</h3>
            <p>Clientes podem confiar que cumpriremos com nossos compromissos.</p>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Entre em Contacto</h2>
          <p>Tem alguma dúvida ou precisa de orientação jurídica? Entre em contacto conosco agora mesmo.</p>
          <a href="/contact" className="btn btn-primary btn-large">Contacte-nos</a>
        </div>
      </section>
    </div>
  );
};

export default About;
