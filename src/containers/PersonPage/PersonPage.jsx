import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getApiResource } from '../../utils/network';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc/withErrorApi';
import PropTypes from 'prop-types'
import { getPeopleImage } from '../../services/getPeopleDate';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import styles from './PersonPage.module.css';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';
import UILoading from '../../components/UI/UILoading/UILoading';
import { useSelector } from 'react-redux';

const PersonFilms = React.lazy(() => import('../../components/PersonPage/PersonFilms/PersonFilms'))

const PersonPage = ({setErrorApi}) => {

    const [personInfo, setPersonInfo] = useState('');
    const [personName, setPersonName] = useState('');
    const [personPhoto, setPersonPhoto] = useState('');
    const [personFilms, setPersonFilms] = useState('');
    const [personId, setPersonId] = useState('');
    const [personFavorite, setPersonFavorite] = useState(false)

    const storeDate = useSelector(state => state.favoriteReducer)
    
    const { id } = useParams()
    useEffect(() =>{
        
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`)

            storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false)
            setPersonId(id)
            if(res) {
                setPersonInfo([          
                        {title:'Height', data: res.height},
                        {title:'Mass', data: res.mass},
                        {title:'Skin Color', data: res.skin_color},
                        {title:'Hair Color', data: res.hair_color},
                        {title:'Eye Color', data: res.eye_color},
                        {title:'Gender', data: res.gender},
                        {title:'Birth Year', data: res.birth_year},
                ])

                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))

                res.films.length && setPersonFilms(res.films);
                setErrorApi(false)
            }else {
                setErrorApi(true)
            }
        })()
        
    },[])
    

  return (
    <div>
        <PersonLinkBack/>
        <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
            <div className={styles.container}>
                <PersonPhoto
                    personId={personId}
                    personName={personName}
                    personPhoto={personPhoto}
                    setPersonFavorite={setPersonFavorite}
                    personFavorite={personFavorite}
                />
                
                {personInfo && <PersonInfo personInfo={personInfo}/>}
                {personFilms && (
                    <Suspense fallback={<UILoading/>}>
                        <PersonFilms personFilms={personFilms}/>
                    </Suspense>
                )}
            </div>
        </div>
    </div>
  )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage)
//17 56

