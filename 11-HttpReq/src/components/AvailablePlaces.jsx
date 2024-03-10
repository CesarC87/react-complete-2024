import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { getAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const [ loadingData, setLoadingData ] = useState(false)
  const [ availablePlaces, setAvailablePlaces ] = useState([])
  const [ errorFetch, setErrorFetch ] = useState(false)
  
  useEffect(()=>{

    const getPlaces = async () => {

      setLoadingData(true)

      //* -----> Fetch con async / await
      try {
        const places = await getAvailablePlaces()       

        navigator.geolocation.getCurrentPosition( position => {
          let lat = position.coords.latitude
          let lon = position.coords.longitude
          const sortedPlaces = sortPlacesByDistance(places, lat, lon)
          setAvailablePlaces(sortedPlaces)
          setLoadingData(false)
        })


      } catch (error) { //* Si el fetch NO pasó - Si hay un Error thrown, el catch dispara lo que seteemos, un redirect por ejemplo
        console.log('catch')
        setErrorFetch({message: error.message || 'No pudimos cargar esta info'})
        setLoadingData(false)
      }       
      
    }
      //* -----> Fetch con promesa:
      // fetch('http://localhost:3000/places') 
      //   .then(res => {
      //     return res.json() // Método de fetch que devuelve otra promesa
      //   })
      //   .then( data => {
      //     setAvailablePlaces(data.places)
      //   })

      getPlaces()
  },[])

  if(errorFetch){
    return <Error title={'Oops!'} message={errorFetch.message}/>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={loadingData}
      loadingText={'Loading data...'}
    />
  );
}
