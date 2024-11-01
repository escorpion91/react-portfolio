import React from 'react';
import './experience.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>React Three Fiber</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>Three Js</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>Wordpress</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
{/*             <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>Tailwind</h4>
                {/* <small className="text-light">Experienced</small> */}
{/*               </div> */}
{/*             </article> */} 
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>HTML, CSS, Tailwind and JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>Django</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            {/* <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article> */}
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>Python</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>REST API</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>MySQL</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icons" />
              <div>
                <h4>PHP</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
