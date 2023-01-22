import { object } from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Favorite.module.css'
import bookmark from './img/bookmark.svg'

const Favorite = () => {

    const [counter, setCounter] = useState(0)
    const storeDate = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(storeDate).length
        length.toString().length > 2 ? setCounter('...') : setCounter(length)
    })
  return (
    <div className={styles.container}>
        <Link to='/favorites '>
        <span className={styles.counter}>{counter}</span>
        <img className={styles.bookmark} src={bookmark} alt="favorites" />
    </Link>
    </div>
  )
}

export default Favorite