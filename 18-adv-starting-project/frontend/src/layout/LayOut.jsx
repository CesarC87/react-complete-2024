import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const LayOut = () => {

  const navigation = useNavigation()
  console.log('asd navi', navigation)

  return (
    <>
      <MainNavigation/>
      <Outlet/>
    </>
  )
}

export default LayOut
