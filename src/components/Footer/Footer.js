import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Container, Avatar, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className='footer-container'>
      <section className='social-media'>
        <h2 className='footer-title'>Connect with Me</h2>
        <div className='social-media-wrap'>
          <div className='logo-container'>
            <Link href="https://github.com/bigdumbbaby/" target="_blank">
              <Avatar className="social-icon" alt="github logo" src='/images/github-icon.svg' className={classes.large}/>
            </Link>
            <h3 className='logo-label'>GitHub</h3>
          </div>
          <div className='logo-container'>
            <Link href="https://www.linkedin.com/in/colton-o-connor/" target="_blank">
              <Avatar className="social-icon" alt="LinkedIn Icon" src='/images/linkedin-logo.png' className={classes.large}/>
            </Link>
            <h3 className='logo-label'>LinkedIn</h3>
          </div>
          <div className='logo-container'>
            <Link href="mailto:colton.shawn.oconnor@gmail.com" target="_blank">
              <Avatar className="social-icon" alt="Gmail Icon" src='/images/Gmail-logo.png' className={classes.large}/>
            <h3 className='logo-label'>Email</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;