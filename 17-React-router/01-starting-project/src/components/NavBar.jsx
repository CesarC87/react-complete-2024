import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css' 

const NavBar = () => {
  return (
    <header>
        <nav className='home-nav'>
            <ul className='home-nav__links'> 
                {/* <li><Link to='/'>Home</Link></li> */}
                {/* <li><Link to='/products'>Products</Link></li> */}
                <li><NavLink className={({isActive})=> isActive ? 'active' : undefined}to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar