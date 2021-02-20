import React from 'react';
import './HomeButton.scss'
import {Link} from "react-router-dom"
let HomeButton = () => {
  return (
    <Link to='/' className='home'>Nathaniel Millard:</Link>
  )
}
export default HomeButton
