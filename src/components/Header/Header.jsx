import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'
import Favorite from '../Favorite/Favorite'
import styles from './Header.module.css'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '../../context/ThemeProvider'


import droid from './img/droid.png'
import deathStar from './img/death-star.png'
import lightSaber from './img/lightSaber.png'

const Header = () => {

  const isTheme = useTheme()

  const [icon, setIcon] = useState(deathStar)

  useEffect(()=> {
    switch (isTheme.theme) {
      case THEME_LIGHT: setIcon(lightSaber); break;
      case THEME_DARK: setIcon(deathStar); break;
      case THEME_NEUTRAL: setIcon(droid); break;
    
      default:
        setIcon(deathStar)
    }
  },[isTheme])

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />
        <ul className={styles.list__container}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/people/?page=1'>People</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to='/not-found'>Not Found</NavLink></li>
            <li><NavLink to='/fail'>Fail</NavLink></li>
        </ul>
        <Favorite/>
    </div>
  )
}

export default Header