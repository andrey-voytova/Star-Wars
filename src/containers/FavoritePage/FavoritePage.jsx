import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PeopleList } from '../../components/PeoplePage/PeopleList/PeopleList';
import styles from './FavoritePage.module.css';

const FavoritePage = () => {
    const [people, setPeople] = useState([])

    const storeData = useSelector(state => state.favoriteReducer)
    
    useEffect(() => {
      const arr = Object.entries(storeData)

      if(arr.length) {
        const res = arr.map((item) => {
          return{
            id: item[0],
            ...item[1],
          }
        })
        setPeople(res)
      }

    }, [])
    

  return (
    <>
      {people.length 
        ?<PeopleList people={people}/>
        : <h2 className={styles.comments}>No Date</h2>
      }
    </>
  )
}

export default FavoritePage