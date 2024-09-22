import React from 'react';
import './footer.css';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      {/* <a href="" className="footer__logo">
        This is a footer!
      </a> */}
      <ul className="permalinks">
        <li>
          <a href="#about">Home</a>
        </li>
        {/* <li>
          <a href="#about">About</a>
        </li> */}
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="services">Testimonials</a>
        </li> */}
        {/* <li>
          <a href="portfolio">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/fenomenomenofeno">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/juanmanuelenderica/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/escorpion91">
          <AiFillGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Derechos reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
