import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './ErrorPage.module.css'
import img from './img/not-found.jpg'


const ErrorPage = () => {

    let location = useLocation()
    
    
  return (
    <div>
        <img className={styles.img} src={img} alt="not found" />
        <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </div>
  )
}

export default ErrorPage