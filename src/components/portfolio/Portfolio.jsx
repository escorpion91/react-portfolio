import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/yolisimo.jpeg';
import IMG2 from '../../assets/fnmnWebsite.png';
import IMG3 from '../../assets/Cetepe.png';
import IMG4 from '../../assets/mefis.png';

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
          <h3>Fenómeno Menófeno Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/escorpion91/random-advice-generator"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.fenomenomenofeno.com/"
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
          <h3>Cetepe Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/duranduranduran/Cetepe-webpage"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="https://cetepe.org/" className="btn" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        {/* FIN DE UN PROYECTO */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Photography Website</h3>
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
      </div>
    </section>
  );
};

export default Portfolio;
