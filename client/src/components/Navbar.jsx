import React from 'react'
import logo from './bslogo.png'

const Navbar = () => {
    return (
        <div className='nav d-block'>
            <img className='logo' src={logo} alt='bslogo'/>
        </div>
    )
}

export default Navbar