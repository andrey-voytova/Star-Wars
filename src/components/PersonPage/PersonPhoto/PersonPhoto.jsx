import React from 'react'
import PropTypes from 'prop-types'
import styles from './PersonPhoto.module.css'
import { useDispatch } from 'react-redux'
import { removePersonFromFavorite, setPersonToFavorite } from '../../../store/actions'
import iconFavorite from './img/favorite.png'
import iconFavoriteFill from './img/star.png'


const PersonPhoto = ({personPhoto, personName, personId, setPersonFavorite, personFavorite}) => {
  
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId))
      setPersonFavorite(false)
    }else{
      dispatch(setPersonToFavorite({
        [personId]:{
          name: personName,
          img: personPhoto
        }
      }))
      setPersonFavorite(true)
    }
  }
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img 
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="add to favorite" 
          className={styles.favorite}
          onClick={dispatchFavoritePeople}
        />
      </div>
    </div>
  )
}
PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    setPersonFavorite: PropTypes.func,
    personFavorite: PropTypes.bool,
}


export default PersonPhoto
