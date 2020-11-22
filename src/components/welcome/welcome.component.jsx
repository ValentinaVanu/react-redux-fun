import React, { useEffect, useState } from 'react'
import { get } from 'axios'

const Welcome = () => {
  const [app, updateApp] = useState({ menu: {} })

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

  return (
    <>
      <div>Welcome Page</div>
    </>
  )
}
export { Welcome }
