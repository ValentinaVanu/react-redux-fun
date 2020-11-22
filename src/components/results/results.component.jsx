import React from 'react'
import { useEffect, useState  } from 'react'
import { get } from 'axios'

import * as SR from './results.style'

const Results = () => {
  const[results, updateResult] = useState({ resultList: [] })

  useEffect(
    () => {
      const getResult = async() => {
        const{ data } = await get("http://localhost:1234/results")
        updateResult(data)
      }
      getResult()
    },
    []
  )

  const {
    resultList
  } = results

  return (
    <div>
      <div> First Name Last Name Result Date</div>
      <SR.ListWrapper>
        {resultList.map( person => {
          return (
            <SR.StyledPersonList key={person.id}>
              <div>{person.firstName}</div>
              <div>{person.lastName}</div>
              <div>{person.boolean}</div>
              <div>{person.date}</div>
            </SR.StyledPersonList>
          )
        })}
      </SR.ListWrapper>
      <div>Page</div>
    </div>
  )
}

export { Results }
