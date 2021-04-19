
import React from 'react';
import './HeroSection.css';
import { Button, Link } from '@material-ui/core';
// import { Link } from 'react-router-dom';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonLabel2,
  img,
  alt,
  imgStart,
  githubLink,
  demoLink,
  pageLink
}) {
  console.log(buttonLabel2)
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                {/* <Link 
                to={pageLink}
                onClick={() => window.location.assign(githubLink)}
                >
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link> */}
                <Link href={githubLink} target="_blank">
                  <Button size='small' variant='contained' style={{width: '10rem', marginBottom: '0.5rem', marginTop: '0.5rem', backgroundColor: '#b30000', color: 'white'}}>
                      {buttonLabel}
                  </Button>
                </Link>
                { demoLink
                  ? <Link href={demoLink} target="_blank">
                      <Button size='small' variant='contained' style={{width: '8rem', marginBottom: '0.5rem', marginTop: '0.5rem', backgroundColor: '#b30000', color: 'white' }}>
                          Demo
                      </Button>
                    </Link>
                  : null
                }
                
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
