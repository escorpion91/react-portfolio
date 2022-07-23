import React from 'react';
import SoftwareDeveloper from '../../assets/SoftwareDeveloper.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={SoftwareDeveloper} className="btn" download>
        Download
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
