import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc/withErrorApi'

import { PeopleList } from '@components/PeoplePage/PeopleList/PeopleList'
import { PeopleNavigation } from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation'

import { API_PEOPLE } from '@constants/api'
import { getPeopleId, getPeopleImage } from '@services/getPeopleDate'
import { getApiResource } from '@utils/network'
import { useQueryParams } from '../../hooks/useQueryParams'
import { changeHTTP } from '../../utils/network'
import { getPeoplePageId } from '../../services/getPeopleDate'



const PeoplePage = ({setErrorApi}) => {

    const [people, setPeople] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [counterPage, setCounterPage] = useState(1)


    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResponse = async (url) => {
        const res = await getApiResource(url)
        
       
        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
    
                return {
                    id,
                    name,
                    img,
                }
            })
            setPeople(peopleList);
            setNextPage(changeHTTP(res.next))
            setPrevPage(changeHTTP(res.previous))
            setCounterPage(getPeoplePageId(url))
            
        }else{
            setErrorApi(true);
        }

        
    }
    useEffect(() => {
        getResponse(API_PEOPLE+queryPage)
    },[])

  return (
            <>
                <PeopleNavigation
                    getResponse={getResponse}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    queryPage={queryPage}
                />
                {people && <PeopleList people={people} />}
            </>
  )
}

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func
}
export default withErrorApi( PeoplePage )

//9