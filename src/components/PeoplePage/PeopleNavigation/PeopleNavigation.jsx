import React from 'react'
import { Link } from 'react-router-dom'
import { UIButton } from '../../UI/UIButton/UIButton'
import styles from './PeopleNavigation.module.css'


export const PeopleNavigation = ({
    getResponse, 
    prevPage, 
    nextPage, 
    queryPage,
  }) => {
   
  const handleChangeNext = () => getResponse(nextPage)
  const handleChangePrev = () => getResponse(prevPage)
  

  return (
    <div className={styles.container}>
      <Link className={styles.buttons} to={`/people/?page=${Number(queryPage)-1}`}>
        <UIButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link className={styles.buttons} to={`/people/?page=${Number(queryPage)+1}`} >
        <UIButton
          text="Next"
          onClick={handleChangeNext}
          disabled={!nextPage}
        />
      </Link>
    </div>
  )
}

