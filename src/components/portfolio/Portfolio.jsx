import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/yolisimo.jpeg';
import IMG2 from '../../assets/Botica.png';
import IMG3 from '../../assets/python.png';
import IMG4 from '../../assets/mefis.png';
import IMG5 from '../../assets/weatherApp.png';
import IMG6 from '../../assets/giphy.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Random Advice Generator</h3>
          <h5>API Request/React</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/escorpion91/random-advice-generator"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://gleeful-jelly-71ddd3.netlify.app/"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* FIN DE UN PROYECTO */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Botica Barcia</h3>
          <h5>Wordpress</h5>
          <div className="portfolio__item-cta">
{/*             <a
              href="https://github.com/escorpion91/random-advice-generator"
              className="btn"
              target="_blank"
            >
              Github
            </a> */}
            <a
              href="https://boticabarcia.com/"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* FIN DE UN PROYECTO */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Giphy App</h3>
          <h5>API Request/React</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/escorpion91/giphy-api-react-app"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://curious-cajeta-8bda19.netlify.app/"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* FIN DE UN PROYECTO */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Weather App</h3>
          <h5>API Request/JavaScript</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/escorpion91/weather-app"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://lively-platypus-0ff2c6.netlify.app/"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* FIN DE UN PROYECTO */}
        {/* FIN DE UN PROYECTO */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Photography Website</h3>
          <h5>HTML/CSS/JavaScript</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/escorpion91/random-advice-generator"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://cosmic-conkies-36eddf.netlify.app/"
              className="btn"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* FIN DE UN PROYECTO */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Python Daily Sales Report</h3>
          <h5>Various Python Librariest</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://juanmanuelenderica.carrd.co/#one"
              className="btn"
              target="_blank"
            >
              Code Explanation
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
