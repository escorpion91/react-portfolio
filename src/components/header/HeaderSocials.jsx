import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/juanmanuelenderica/" target="_blank">
        <AiOutlineLinkedin size={40} />
      </a>
      <a href="https://github.com/escorpion91" target="_blank">
        <AiOutlineGithub size={40} />
      </a>
    </div>
  );
};

export default HeaderSocials;
