import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Pro Lawn Care</h1>
      <ul style={styles.ul}>
        <li style={styles.li}><Link to="/" style={styles.link}>Home</Link></li>
        <li style={styles.li}><Link to="/about-us" style={styles.link}>About Us</Link></li>
        <li style={styles.li}><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li style={styles.li}><Link to="/photos-reviews" style={styles.link}>Photos & Reviews</Link></li>
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2E8B57',
    padding: '10px 20px',
    color: '#fff',
  },
  title: {
    margin: 0,
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  li: {},
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
