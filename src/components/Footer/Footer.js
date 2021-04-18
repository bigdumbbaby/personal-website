import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <h2 className='footer-title' 
        // style={{
        //   color: 'white',
        // }}
        >Connect with Me</h2>
        <div className='social-media-wrap'>
            <div className='icon-container'>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
                onClick={() => window.location.assign('https://www.linkedin.com/in/colton-o-connor/')}
              >
                <FaLinkedin className='footer-icon' size='1x'/>
              </Link>
            </div>
            <div className='icon-container'>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
                onClick={() => window.location.assign('https://mail.google.com/mail/u/0/')}
              >
                <HiOutlineMail className='footer-icon' size='1x'/>
              </Link>
            </div>
            <div className='icon-container'>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='GitHub'
                onClick={() => window.location.assign('https://github.com/bigdumbbaby/')}
              >
                <FaGithub className='footer-icon' size='1x'/>
              </Link>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Footer;