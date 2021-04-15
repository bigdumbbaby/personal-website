import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree} from './blogData';
import './Blogs.css'

function Blogs() {
  return (
    <>
    <div className='title-container'>
      <h1 className='title'>Blog Posts</h1>
    </div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Blogs;