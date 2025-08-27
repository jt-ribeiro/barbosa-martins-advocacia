import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container-elegant">
        <div className="header-content">
          <Link to="/" className="logo">
            <img 
              src="/images/logo-barbosa-martins.png" 
              alt="Barbosa Martins Advocacia" 
              className="logo-image"
            />
            <div className="logo-text">
              <span className="firm-name">Barbosa Martins</span>
              <span className="firm-description">Advocacia</span>
            </div>
          </Link>
          
          <nav className="navigation">
            <Link to="/" className="nav-link">Início</Link>
            <Link to="/sobre" className="nav-link">Sobre</Link>
            <Link to="/equipa" className="nav-link">Equipa</Link>
            <Link to="/servicos" className="nav-link">Serviços</Link>
            <Link to="/contactos" className="nav-link">Contactos</Link>
          </nav>

          {/* Menu mobile (opcional) */}
          <button className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;