import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar'

const Home = () => {
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('/products')
    }
  return (
    <>
        <button onClick={navigateHandler}>Go to products</button>
    </>
  )
}

export default Home