import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

function About() {
  return (
    <>
      <div
        className='about__hero-section'
      >
        <div className='container'>
          <div
            className='row about__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
          >
            <div className='col'>
              <div className='about__hero-text-wrapper'>
                <h1 className='heading'>
                  Colton O'Connor
                </h1>
                <div className='top-line'>Full Stack Software Engineer</div>
                <p
                  className='about__hero-subtitle dark'
                >
                  Full-Stack Engineer with a background in Electrical and Computer Engineering. Possess strong rapport building and cross-functional collaboration with clients, colleagues, and all tiers of leadership that help Software Developers drive to build community and achieve their goals. Technical experiences include Ruby on Rails, JavaScript, React, React Native, HTML5, Node, Express, Knex, and Postgres.
                </p>
                <Link 
                to='/about'
                onClick={() => window.location.assign('https://github.com/bigdumbbaby/')}
                >
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    Github 
                    <FaGithub className='footer-icon'/>
                  </Button>
                </Link>
                <Link 
                to='/about'
                onClick={() => window.location.assign('https://github.com/bigdumbbaby/')}
                >
                  <Button buttonSize='btn--wide' buttonColor='blue' size='1x'>
                    LinkedIn 
                    <FaLinkedin className='footer-icon'/>
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='about__hero-img-wrapper'>
                <img src='images/me.jpeg' alt='me' className='about__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
