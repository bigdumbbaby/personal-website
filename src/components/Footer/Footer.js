import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              onClick={() => window.location.assign('https://www.linkedin.com/in/colton-o-connor/')}
            >
              <FaLinkedin size='2x' className='footer-icon'/>
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='GitHub'
              onClick={() => window.location.assign('https://github.com/bigdumbbaby/')}
            >
              <FaGithub size='2x' className='footer-icon'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;