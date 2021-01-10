import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const Welcome = () => {
  const [app, updateApp] = useState({})
  // const [app, updateApp] = useState({ menu: {} })
  const bet = useSelector(({ bet }) => bet)
  const dispach = useDispatch()
  useEffect(
    () => {
      const getResult = async () => {
        const { data } = await get("http://localhost:1234/app")
        updateApp(data)
      }
      getResult()
    },
    []
  )

  // const {
  //   menu
  // } = app
  const handleClick = () => {
    dispach({
      type: "add",
      bet: {
        name: "Ana",
        age: 14
      }
    })
  }
  return (
    <>
      <div>Welcome Page</div>
      {bet.map(each => <div>{each.name}, {each.age}</div>)}
      <button onClick={handleClick}>Add</button>
    </>
  )
}
export { Welcome }
