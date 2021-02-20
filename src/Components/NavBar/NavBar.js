import React from 'react';
import './NavBar.scss'
import {Link} from "react-router-dom"
let NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/resume'>resume, </Link>
      <Link to='/background'>background, </Link>
      <Link to='/contact'>contact</Link>
    </nav>
  )
}
export default NavBar
