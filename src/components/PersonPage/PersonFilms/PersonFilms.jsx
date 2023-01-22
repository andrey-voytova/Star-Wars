import React, { useEffect, useState } from 'react';
import styles from './PersonFilms.module.css';
import PropTypes from 'prop-types';
import { changeHTTP, makeConcurrentRequest } from '../../../utils/network';

const PersonFilms = ({personFilms}) => {
    
    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map((url) => changeHTTP(url))
            const response = await makeConcurrentRequest(filmsHTTPS)
            
            setFilmsName(response)
        })()
    },[])
    
  return (
    <div className={styles.wrapper}>
        <ul className={styles.list__container}>
            {filmsName
                .sort((a,b) => a.episode_id - b.episode_id)
                .map(({title, episode_id}) =>
                    <li className={styles.list__item} key={episode_id}>
                        <span className={styles.item__episode}>Episode: {episode_id}</span>
                        <span className={styles.item__colon}> : </span>
                        <span className={styles.item__title}>{title}</span>
                    </li>
            )}
        </ul>
    </div>
  )
}

export default PersonFilms

PersonFilms.propTypes = {
    personInfo: PropTypes.array,
}

