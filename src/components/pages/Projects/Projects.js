import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './projectsData';
import './Projects.css'

function Projects() {
  return (
    <>
    <div className='title-container'>
      <h1 className='title'>Projects</h1>
    </div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Projects;