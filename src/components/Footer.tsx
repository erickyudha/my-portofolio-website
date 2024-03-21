// Footer.tsx

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer: React.FC = () => {
  const [isFooterVisible, setFooterVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show the footer when scrolling to the bottom - 120px
      if (scrollPosition > documentHeight - windowHeight - 120) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={isFooterVisible ? 'visible' : ''}>
      <h4>Contact Me</h4>
      <div className="social-icon">
        <FontAwesomeIcon icon={faLinkedin} />
        <a target='_blank' href="http://linkedin.com/in/erickyudha">erickyudha</a>
      </div>
      <div className="social-icon">
        <FontAwesomeIcon icon={faGithub} />
        <a target='_blank' href="http://github.com/erickyudha">erickyudha</a>
      </div>
      <div className="social-icon">
        <FontAwesomeIcon icon={faGoogle} />
        <a target='_blank' href="mailto:erickyudha18@gmail.com">erickyudha18@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
