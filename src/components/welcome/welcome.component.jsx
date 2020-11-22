import React, { useEffect, useState } from 'react'
import { get } from 'axios'

const Welcome = () => {
  const [app, updat] = useState({ menu: {} })

  useEffect(
    () => {
      const getResult = async () => {
        const { data } = await get("http://localhost:1234/app")
        updat(data)
      }
      getResult()
    },
    []
  )

  const {
    menu
  } = app

  return (
    <>
      <div>Welcome  </div>
    </>
  )
}
export { Welcome }
