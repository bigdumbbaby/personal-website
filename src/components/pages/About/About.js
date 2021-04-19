import React from 'react';
import './About.css';
import { Button } from '../../Button';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { Container, Avatar, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <>
      <div
        className='about__hero-section'
      >
        <div className='about-container'>
          <div
            className='row about__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
          >
            <div className='col'>
              <div className='about__hero-text-wrapper'>
                <h1 className='about-heading'>
                  Colton O'Connor
                </h1>
                <div className='top-line'>Full Stack Software Engineer</div>
                <p
                  className='about__hero-subtitle dark'
                >
                  Full-Stack Engineer with a background in Electrical and Computer Engineering. Possess strong rapport building and cross-functional collaboration with clients, colleagues, and all tiers of leadership that help Software Developers drive to build community and achieve their goals. Technical experiences include Ruby on Rails, JavaScript, React, React Native, HTML5, Node, Express, Knex, and Postgres.
                </p>
                <Container maxWidth="lg" disableGutters={true} style={{display: 'flex', flexFlow: 'row', justifyContent: 'center', paddingTop: '0.5rem'}}>
                  
                </Container>

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
