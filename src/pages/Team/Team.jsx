import React from 'react';
import { motion } from 'framer-motion';
import './Team.scss';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. João Barbosa",
      position: "Sócio Fundador",
      specialization: "Direito Civil e Empresarial",
      experience: "25 anos",
      description: "Especialista em direito civil com vasta experiência em casos complexos. Mestre em Direito pela Universidade de Lisboa.",
      email: "joao@barbosamartins.pt",
      phone: "+351 123 456 789"
    },
    {
      id: 2,
      name: "Dra. Maria Martins",
      position: "Sócia",
      specialization: "Direito Tributário",
      experience: "20 anos",
      description: "Referência em direito tributário e planeamento fiscal. Doutorada em Direito Fiscal.",
      email: "maria@barbosamartins.pt",
      phone: "+351 123 456 780"
    },
    {
      id: 3,
      name: "Dr. Pedro Silva",
      position: "Advogado Sénior",
      specialization: "Direito Laboral",
      experience: "15 anos",
      description: "Especialista em relações laborais e direito do trabalho. Pós-graduado em Direito do Trabalho.",
      email: "pedro@barbosamartins.pt",
      phone: "+351 123 456 781"
    },
    {
      id: 4,
      name: "Dra. Ana Costa",
      position: "Advogada Sénior",
      specialization: "Direito da Família",
      experience: "12 anos",
      description: "Dedicada ao direito de família e sucessões. Mediadora familiar certificada.",
      email: "ana@barbosamartins.pt",
      phone: "+351 123 456 782"
    },
    {
      id: 5,
      name: "Dr. Miguel Oliveira",
      position: "Advogado",
      specialization: "Direito Comercial",
      experience: "8 anos",
      description: "Atuação em direito comercial e contratual. Especialista em contratos internacionais.",
      email: "miguel@barbosamartins.pt",
      phone: "+351 123 456 783"
    },
    {
      id: 6,
      name: "Dra. Sofia Rodrigues",
      position: "Advogada",
      specialization: "Propriedade Intelectual",
      experience: "6 anos",
      description: "Especialista em propriedade intelectual e marcas. Membro da Associação Portuguesa da Propriedade Intelectual.",
      email: "sofia@barbosamartins.pt",
      phone: "+351 123 456 784"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container-elegant">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Nossa Equipa</h1>
            <p className="hero-description">
              Conheça os profissionais que fazem do Barbosa Martins 
              uma referência em excelência jurídica e compromisso com o cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-grid-section">
        <div className="container-elegant">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Profissionais de Excelência</h2>
            <p>Uma equipa dedicada e especializada para melhor o servir</p>
          </motion.div>

          <motion.div 
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="team-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="card-image">
                  <img 
                    src="/images/team/placeholder.jpg" 
                    alt={member.name}
                    className="member-photo"
                  />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <button className="view-profile-btn">
                        Ver Perfil Completo
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  
                  <div className="member-specialization">
                    {member.specialization}
                  </div>

                  <div className="member-experience">
                    <span className="experience-icon">⏳</span>
                    {member.experience} de experiência
                  </div>

                  <p className="member-description">
                    {member.description}
                  </p>

                  <div className="card-actions">
                    <button className="contact-btn">
                      <span className="btn-icon">✉️</span>
                      Contactar
                    </button>
                    <button className="linkedin-btn">
                      <span className="btn-icon">💼</span>
                      LinkedIn
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="team-stats">
        <div className="container-elegant">
          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Anos de Experiência Coletiva</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Casos Resolvidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Taxa de Sucesso</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta">
        <div className="container-elegant">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Pronto para Falar com um Especialista?</h2>
            <p>Agende uma consultoria gratuita com a nossa equipa</p>
            <button className="btn btn-primary btn-large">
              Agendar Consultoria
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;