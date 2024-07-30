import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <img src= "/public/profile-pic.png" alt='' className='about__img'/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
        I am eager to pursue a dynamic career, leveraging my skills in challenging and innovative projects. I chose to study at EPITA Paris beacause I knew it was the most challenging computer science schooling in France.
        </p>
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Development
            </h3>
            <span className='skills__number'>90%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Teamwork</h3>
            <span className='skills__number'>100%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage teamwork'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Algorithmics</h3>
            <span className='skills__number'>80%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage algorithmics'></span>
          </div>
        </div>

      </div>

    </div>
    </div>

    <AboutBox/>

    </section>
  )
}

export default About
