import React, { useEffect, useState } from 'react'
import { get } from 'axios'

const Welcome = () => {
  const[welcome, updateWelcome] = useState ({})

  useEffect(
    () => {
      const getResult = async() => {
        const { data } = await get("http://localhost:1234/welcome")
        updateWelcome(data)
      }
      getResult()
    },
    []
  )
  
  const {
    menu =[]
  }= welcome

  return (
    <>
      <div>
        <div>This is going to be a Logo</div>
      </div>
        <div>{menu.map( menuItem => {
          return(
            <li>{menuItem}</li>
          )
        })}
        </div>
    </>
    )
}
export { Welcome }