import React from 'react'
import './Resume.scss'

let Resume = () => {
  return (
    <div className='Resume'>
      <div className='col1'>
        <h1>Nathaniel Millard</h1>
        <h2>Software Engineer</h2>
        <section className='projects'>
          <h3>Projects</h3>
            <div className='item'>
              <h4>Rume (group) ~2 weeks</h4>
              <a href=''>Github Repo</a>
              <p>Built for an already wellness conscious user, Rume is a design
              and animation heavy application build with a simple backend to
              illustrate a scalable user experience.</p>
              <p>React | React Router | React Testing Library/Jest | Styled Compo- nents | GSAP | Node.js/Express</p>
            </div>
            <div className='item'>
              <h4>Rancid Tomatillos (group) ~3 weeks</h4>
              <a href=''>Github Repo</a>
              <p>Built for your “everyday” movie consumer, Rancid Tomatillos was
               the first time delving into using React, dynamic sad path UX, and
                implementation of a micro service for this app and class API.</p>
              <p>React | React Router | React Testing Library/Jest | Node.js/Express</p>
            </div>
            <div className='item'>
              <h4>Whats Cooking (group) ~3 weeks</h4>
              <a href=''>Github Repo</a>
              <p>Built for a simple user looking for more inspiration in the
              kitchen, What’s Cooking is a vanilla javascript item creating
              dynamic displays for a user, refactoring the styling using Sass,
              working with Webpack, and maintaining Lighthouse accessibility.</p>
              <p>WebPack | Lighthouse | Fetch Api | Mocha/Chai | Sass</p>
            </div>
        </section>
        <section className='work-experience'>
          <h3>Work Experience</h3>
            <div>
              <h4>Babooshka Hair Co</h4>
              <h5>Hair Stylist</h5>
              <h6>January 2018 - June 2020</h6>
              <p>As a constant in a small locally owned salon, I was able to
              hone skills with collaborating and working independently with a
              small team, being a consistent and reliable resource for guests
              and coworkers, cultivating a welcoming and receptive environment,
              and giving and receiving constant feedback.</p>
            </div>
            <div>
              <h4>MAC Cosmetics</h4>
              <h5>Freelance MakeUp Artist</h5>
              <h6>February 2018 - May 2020</h6>
              <p>As someone called in to help on busy days or in short staffed
              situations, this role has allowed me to learn to quickly integrate
               to new teams, be able to readily and easily assess and fulfill
               needs in a work environment, and to be a dynamic flexible worker
               with a variety of responsibilities.</p>
            </div>
            <div>
              <h4>Aveda Institute Denver</h4>
              <h5>Education Mentor / Experience Center Coordinator</h5>
              <h6>January 2017 - December 2017</h6>
              <p>As a liaison between guest experience and education, this role
              gave me public speaking skills, principles of education and
              teaching, and the ability to communicate empathy between guests
              and students in a large complicated environment.</p>
            </div>
        </section>
      </div>
      <div className='col2'>
      <section className='contact'>
        <h3>Contact</h3>
        <h4>(970)-739-5659</h4>
        <h4>nathanielmillard@gmail.com</h4>
        <a href=''>Github</a>
        <a href=''>LinkedIn</a>
      </section>
      <section className='about'>
        <h3>About</h3>
        <p>Artist and creative turned front end engineer, I am pas- sionate
        about flexible inven- tive code that is empathetic to a wide user basis,
         build by a diverse team.</p>
      </section>
      <section>
        <h3>Fluent In:</h3>
        <ul>
          <li>JavaScript</li>
          <li>CSS/SCSS</li>
          <li>HTML</li>
        </ul>
      </section>
      <section>
        <h3>Works Well With:</h3>
        <ul>
          <li>React / Router</li>
          <li>Node.js / Express</li>
          <li>React Testing / Jest</li>
          <li>Mocha / Chai</li>
          <li>Git / Github</li>
          <li>REST APIs / Fetch</li>
          <li>GSAP</li>
          <li>NPM</li>
        </ul>
      </section>
      <section>
        <h3>Understands</h3>
        <ul>
          <li>Object Oriented Programing</li>
          <li>Project planning / wireframing Git Workflow</li>
          <li>Git Workflow</li>
          <li>Test Driven Development</li>
        </ul>
      </section>
      <section>
        <h3>Education</h3>
        <h4>Aveda Institute Denver</h4>
        <h5>Front End Engineering</h5>
        <h6>June 2020 - January 2021</h6>
        <p>1600+ hour intensive program, with project based hands on learning,
        with group and solo projects with a variety of scopes and deadline
        timeframes.</p>
        <h4>Aveda Institute Denver Cosmetology</h4>
        <h5>Cosmetology</h5>
        <h6>September 2015 - January 2017</h6>
        <p>1800 hour hands on program focusing on learning state board law,
        cosmetology principles and techniques, and performing services on guests.</p>
      </section>
      </div>
    </div>
  )
}

export default Resume
