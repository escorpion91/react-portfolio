import React from 'react';
import './about.css';
import ME from '../../assets/pic3.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiTwotoneFolderOpen } from 'react-icons/ai';
import HeaderSocials from '../header/HeaderSocials';

const about = () => {
  return (
    <section id="about">
      <HeaderSocials />
      <h5 className="name">JUAN MANUEL ENDERICA</h5>
      {/* <h2>Web Developer</h2> */}
      {/* <h2>Front-end Dev</h2> */}
      <h2>WordPress & Python Dev</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
{/*             <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2nd Year Software Development student</small>
            </article> */}
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <AiTwotoneFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>WordPress, React, API Rest, HTML, CSS, Js & Python</small>
            </article>
          </div>
          <p>
            A passionate Wordpress developer/Python coder. Very eager to build things, whether in web development (HTML, CSS, JS, PHP and WordPress mainly) or solving tasks with Python.
            I’m always opened to learning new things and take on new challenges.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
