import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaCodepen } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href='https://www.linkedin.com/in/sam-feighery-b5265126/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>
        <div>
            <a href='https://github.com/Sam-Feighery' target="_blank" rel="noreferrer"><BsGithub /></a>
        </div>
        <div>
            <a href='https://codepen.io/geoneo123/pens/showcase' target="_blank" rel="noreferrer"><FaCodepen  /></a>
        </div>
    </div>
  )
}

export default SocialMedia