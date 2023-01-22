import React, { useCallback, useEffect, useState } from 'react'
import { API_SEARCH } from '../../constants/api'
import { withErrorApi } from '../../hoc/withErrorApi'
import { getApiResource } from '../../utils/network'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleDate'
import SearchPageInfo from './SearchPageInfo/SearchPageInfo'
import { debounce } from 'lodash'
import UIInput from '../../components/UI/UIInput/UIInput'
import styles from './SearchPage.module.css'

const SearchPage = ({setErrorApi}) => {

    const [inputValue, setInputValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = async param => {
        console.log(param);
        const res = await getApiResource(API_SEARCH + param)

        if (res) {
            const peopleList = res.results.map(({name, url })=> {

                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return {
                   id,
                   name,
                   img
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(()=> {
        getResponse('')
    },[])

    const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 300), 
        []  
        )

    const handleInputChange = value => {
        setInputValue(value)
        debounceGetResponse(value)
    }

  return (
    <div>
        <h1 className='header__text'>Search</h1>

        <UIInput
            value={inputValue}
            handleInputChange={handleInputChange}
            placeholder="Input characters's name"
            classes={styles.input__search}
        />

        <SearchPageInfo
            people={people}
        />
    </div>
  )
}
export default withErrorApi(SearchPage)

//34:34