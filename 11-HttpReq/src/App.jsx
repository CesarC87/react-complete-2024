import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { getUserPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdating, setErrorUpdating] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ loadingUserPlaces, setLoadingUserPlaces ] = useState(false)
  const [ errorFetchUserPlaces, setErrorFetchUserPlaces ] = useState(false)

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces])      
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdating({message: error.message || 'No se pudo actualizar...'})
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    
    try {
      await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id))
      
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdating({message: error.message || 'No se pudo borrar este item'})
    }

    setModalIsOpen(false);
  }, []);

  const handleError = () => {
    setErrorUpdating(null)
  }

  useEffect(()=>{
    const userPlaces = async () => {
      
      setLoadingUserPlaces(true)
      try {
        const places = await getUserPlaces()
        setUserPlaces(places)
      } catch (error) {
        setErrorFetchUserPlaces({message: error.message || 'No pudimos cargar tus lugares - catch de getUserPlaces'})
      }
      setLoadingUserPlaces(false)
    }
    userPlaces()
  },[])

  return (
    <>
    <Modal open={errorUpdating} onClose={handleError}> {/*onClose para cuando se apreta el esc*/}
      {errorUpdating && <Error 
        title='Ocurrió un error' 
        message={errorUpdating.message}
        onConfirm={handleError}
      />}
    </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {errorFetchUserPlaces && <Error title={'Oops!'} message={errorFetchUserPlaces.message}/>}
        {!errorFetchUserPlaces && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          loadingText={'Cargando tus lugares...'}
          isLoading={loadingUserPlaces}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
