import React from 'react';
import './Home.css'
import { Container, Avatar, Button, Typography, Link } from '@material-ui/core'

function Home() {
  return (
    <div className='home-container ' style={{backgroundImage: 'url(/images/homePage.jpg)'}}>
        <div className='home-card'>
          <Link id="headshot" href="/">
              <Avatar alt="Colton O'Connor" src='images/me.jpeg' style={{height: '15rem', width: '15rem'}} />
          </Link>
          <Container maxWidth="xs" style={{display: 'flex', flexFlow: 'column', margin: '0', width: '14.5rem', alignItems: 'center'}}>
              <Typography variant="h5">Colton O'Connor</Typography>
              <Typography variant="h6" style={{fontFamily: 'Shadows Into Light', color: '#330000'}}>Full-Stack Developer</Typography>
              <Button href="mailto:colton.shawn.oconnor@gmail.com" size='small' variant='contained' style={{width: '10rem', marginBottom: '0.5rem', marginTop: '0.8rem', backgroundColor: '#330000', color: 'white'}}>
                  Contact
              </Button>
          </Container>
        </div>
    </div>

    // <div className='title-container ' style={{backgroundImage: 'url(/images/homePage.jpg)'}}>
    //   <div className='text-container'>
    //     <h1 className='title'>HomePage</h1>
    //   </div>
    // </div>
  );
}

export default Home;
