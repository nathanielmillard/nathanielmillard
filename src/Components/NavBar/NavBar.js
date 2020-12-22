import React from 'react';
import './NavBar.scss'
import {Link} from "react-router-dom"
let NavBar = () => {
  return (
    <header className='NavBar'>
        <Link to='/' className='home'>Nathaniel:</Link>
      <nav>
        <Link to='/resume'>resume,</Link>
        <Link to='/work'>work,</Link>
        <Link to='/background'>background,</Link>
        <Link to='/contact'>contact</Link>
      </nav>
    </header>
  )
}
export default NavBar
