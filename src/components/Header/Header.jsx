import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            Blog<span className="header__logo-accent">App</span>
          </Link>
        </div>

        <button
          className={`header__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                to="/"
                className={`header__nav-link ${isActivePath('/') ? 'header__nav-link--active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/blogs"
                className={`header__nav-link ${isActivePath('/blogs') ? 'header__nav-link--active' : ''}`}
              >
                Blog
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/about"
                className={`header__nav-link ${isActivePath('/about') ? 'header__nav-link--active' : ''}`}
              >
                About
              </Link>
            </li>
            <li className="header__nav-item header__nav-item--author">
              <Link
                to="/author/Umesh"
                className={`header__nav-link ${isActivePath('/author/Umesh') ? 'header__nav-link--active' : ''}`}
              >
                <div className="header__author">
                  <span className="header__author-avatar">U</span>
                  <span className="header__author-name">Umesh</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
