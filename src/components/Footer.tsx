import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className={`${styles.footerHeading} text-white`}>Pro Lawn Care</h3>
            <p className={styles.footerText}>
              Your trusted partner for a beautiful and healthy lawn. We provide comprehensive lawn care services tailored to your needs.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h4 className={`${styles.footerHeading} text-white`}>Contact Us</h4>
            <ul>
              <li className={`${styles.contactItem}`}>
                <FaPhoneAlt className={styles.contactIcon} />
                <a href="tel:1234567890" className={styles.footerLink}>
                  (123) 456-7890
                </a>
              </li>
              <li className={`${styles.contactItem}`}>
                <FaEnvelope className={styles.contactIcon} />
                <a href="mailto:info@prolawncare.com" className={styles.footerLink}>
                  info@prolawncare.com
                </a>
              </li>
              <li className={`${styles.contactItem}`}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>123 Green Street, Springfield</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className={`${styles.footerHeading} text-white`}>Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
                aria-label="Facebook"
              >
                <FaFacebookF className={styles.socialIcon} />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
                aria-label="Twitter"
              >
                <FaTwitter className={styles.socialIcon} />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
                aria-label="Instagram"
              >
                <FaInstagram className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <p className={styles.copyText}>
            &copy; {new Date().getFullYear()} Pro Lawn Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
