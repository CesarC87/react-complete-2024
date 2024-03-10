export const getAvailablePlaces = async () => {
    const response = await fetch('http://localhost:3000/places')
        const resData = await response.json() // Método de fetch que devuelve otra promesa
  
        // if(response.ok) 200 o 300
        if(!response.ok){ // 400 o 500
          console.log('asd', response.status)
          throw new Error('No pudimos cargar todos los lugares') //* Si el fetch pasó pero no tenemos respuesta
        } 

    return resData.places
}

export const getUserPlaces = async () => {
    const response = await fetch('http://localhost:3000/user-places')
        const resData = await response.json() // Método de fetch que devuelve otra promesa
  
        // if(response.ok) 200 o 300
        if(!response.ok){ // 400 o 500
          console.log('asd', response.status)
          throw new Error('No pudimos cargar tus lugares - catch de getUserPlaces en http') //* Si el fetch pasó pero no tenemos respuesta
        } 

    return resData.places
}

export const updateUserPlaces = async (places) => {
    const response = await fetch('http://localhost:3000/user-places',{
        method: "PUT",
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const resData = await response.json()

    if(!response.ok){
        throw new Error('No se pudo actualizar')
    }

    return resData.message
}