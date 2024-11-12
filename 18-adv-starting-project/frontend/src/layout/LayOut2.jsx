import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'

const LayOut2 = () => {
  return (
    <>
      <EventsNavigation/>
      <Outlet/>
    </>
  )
}

export default LayOut2