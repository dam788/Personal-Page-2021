import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
  return (
    <>
      <div className='contacts'>
        <a
          href='https://www.linkedin.com/in/damdev/'
          className='contacts_link'
          target='blank'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href='https://github.com/dam788'
          className='contacts_link'
          target='blank'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href='https://twitter.com/damdev88
        '
          className='contacts_link'
          target='blank'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href='mailto:dam788@gmail.com'
          className='contacts_link'
          target='blank'
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </>
  );
};

export default Contacts;
