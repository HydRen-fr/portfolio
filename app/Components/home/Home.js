
import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className='home container' id='home'>
   <div className='intro'>
    <img src= "/public/profile-pic.png" alt='' className='home__img'/>
    <h1 className='home__name'>Helios Bringuet</h1>
    <span className='home__education'>
    I am a student at EPITA Paris.
    </span>

    <HeaderSocials/>
    
    <ScrollDown/>
   </div>

   <Shapes/>

   </section> 
  )
}

export default Home

