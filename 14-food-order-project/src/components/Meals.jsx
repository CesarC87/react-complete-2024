import React, { useEffect, useState } from 'react'
import MealCard from './MealCard'
import useHttp from '../hooks/useHttp'

const requestConfig = {}

const Meals = () => {

    const { data:mealsData, 
            error,
            loading 
          } = useHttp('http://localhost:3000/meals', requestConfig, [])

          console.log('asd', mealsData)
          
  return (
    <ul id='meals'>{mealsData.map( meal => {
        return (
            <MealCard key={meal.id} meal={meal}/>
        )        
    })}</ul>
  )
}

export default Meals