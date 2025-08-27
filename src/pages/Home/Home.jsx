import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.scss';

// Animations
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const stats = [
    { number: "25+", label: "Anos de Experiência" },
    { number: "500+", label: "Casos Resolvidos" },
    { number: "100%", label: "Dedicação ao Cliente" }
  ];

  const services = [
    { title: "Direito Civil", icon: "⚖️", description: "Atuação em questões civis com excelência e compromisso" },
    { title: "Direito Empresarial", icon: "🏢", description: "Assessoria jurídica completa para empresas" },
    { title: "Direito Tributário", icon: "📊", description: "Defesa e consultoria em matéria tributária" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section section-bordered">

        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1 variants={fadeInUp}>
              Excelência Jurídica com 
              <span className="highlight"> Integridade</span> e 
              <span className="highlight"> Compromisso</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="hero-description">
              No Barbosa Martins Advocacia, combinamos tradição jurídica com inovação, 
              oferecendo soluções legais personalizadas que protegem seus interesses 
              e garantem seus direitos.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="hero-actions">
              <Link to="/contactos" className="btn btn-primary">
                Consultoria Gratuita
              </Link>
              <Link to="/servicos" className="btn btn-secondary">
                Nossos Serviços
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-line"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section-bordered">
        <div className="container">
          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-section section-bordered">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Áreas de Atuação</h2>
            <p>Serviços jurídicos especializados para suas necessidades</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/servicos" className="service-link">
                  Saiba mais →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section-bordered">
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Excelência que Gera Confiança</h2>
              <p>
                Com mais de duas décadas de atuação, o escritório Barbosa Martins 
                consolidou-se como referência em advocacia, pautando-se pela ética, 
                transparência e resultados excepcionais.
              </p>
              <div className="about-features">
                <div className="feature">
                  <div className="feature-badge">✓</div>
                  <span>Atendimento personalizado</span>
                </div>
                <div className="feature">
                  <div className="feature-badge">✓</div>
                  <span>Transparência absoluta</span>
                </div>
                <div className="feature">
                  <div className="feature-badge">✓</div>
                  <span>Compromisso com resultados</span>
                </div>
              </div>
              <Link to="/sobre" className="btn btn-outline">
                Conheça Nossa História
              </Link>
            </motion.div>
            
            <motion.div 
              className="about-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="visual-placeholder">
                <div className="visual-content">
                  <span>Imagem do Escritório</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-bordered">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Pronto para Resolver sua Questão Jurídica?</h2>
            <p>Agende uma consultoria gratuita e descubra como podemos ajudar</p>
            <Link to="/contactos" className="btn btn-primary btn-large">
              Fale com um Especialista
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;