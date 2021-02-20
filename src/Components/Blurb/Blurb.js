import React from 'react'
import './Blurb.scss'
import headshot from '../../headshot.png'

let Blurb = () => {
  return (
    <section className='Blurb'>
      <p className='about'>
      General creative and artist turned developer.
      Enjoying the human intercetions of Arts and STEM.

      </p>
      <p className='mission'>
      Interested in high impact, simple code, developed by a diverse team for a diverse variety of users.
      </p>
      <img className='headshot' src={headshot}/>
    </section>
  )
}

export default Blurb
