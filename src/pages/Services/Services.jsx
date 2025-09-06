import React from 'react';
import './Services.scss';
import { Briefcase, Scale, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    icon: <Briefcase size={48} />,
    title: 'Consultoria Jurídica Empresarial',
    description: 'Prestamos aconselhamento jurídico especializado a empresas, garantindo conformidade legal e mitigação de riscos em todas as operações comerciais.'
  },
  {
    icon: <Scale size={48} />,
    title: 'Direito Civil e Comercial',
    description: 'Atuamos em litígios civis e comerciais, fornecendo representação eficiente e estratégias legais para proteção dos interesses dos nossos clientes.'
  },
  {
    icon: <FileText size={48} />,
    title: 'Contratos e Acordos',
    description: 'Elaboramos, analisamos e negociamos contratos complexos, assegurando a clareza, legalidade e proteção jurídica das partes envolvidas.'
  },
  {
    icon: <Users size={48} />,
    title: 'Direito Laboral',
    description: 'Oferecemos apoio em questões laborais, incluindo contratação, litígios, acordos coletivos e resolução de conflitos entre empregadores e colaboradores.'
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <h1>Serviços Jurídicos</h1>
        <p>Oferecemos soluções jurídicas completas, personalizadas para empresas e particulares, garantindo segurança e confiança em cada processo.</p>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="section-header">
          <h2>Áreas de Atuação</h2>
          <p>Conheça os serviços especializados que disponibilizamos, sempre com rigor técnico e atenção aos detalhes.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Services;
