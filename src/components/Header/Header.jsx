import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import './Header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container-elegant">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src="/images/logo-barbosa-martins.png"
              alt="Barbosa Martins Advocacia"
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navigation">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className={`nav-link ${location.pathname === '/sobre' ? 'active' : ''}`}
            >
              Sobre
            </Link>
            <Link
              to="/equipa"
              className={`nav-link ${location.pathname === '/equipa' ? 'active' : ''}`}
            >
              Equipa
            </Link>
            <Link
              to="/servicos"
              className={`nav-link ${location.pathname === '/servicos' ? 'active' : ''}`}
            >
              Serviços
            </Link>
            <Link
              to="/contactos"
              className={`nav-link ${location.pathname === '/contactos' ? 'active' : ''}`}
            >
              Contactos
            </Link>
          </nav>

          {/* Hamburger Mobile */}
          <div className="hamburger-wrapper">
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              size={24}
              color="#fff"
            />
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={closeMenu}>Início</Link>
            <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
            <Link to="/equipa" onClick={closeMenu}>Equipa</Link>
            <Link to="/servicos" onClick={closeMenu}>Serviços</Link>
            <Link to="/contactos" onClick={closeMenu}>Contactos</Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
