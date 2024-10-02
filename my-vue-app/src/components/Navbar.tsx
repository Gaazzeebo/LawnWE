// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Pro Lawn Care</h1>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="navbar-link"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className="navbar-link"
            onClick={closeMenu}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="navbar-link"
            onClick={closeMenu}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="photos-reviews"
            smooth={true}
            duration={500}
            className="navbar-link"
            onClick={closeMenu}
          >
            Photos & Reviews
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="navbar-link"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
