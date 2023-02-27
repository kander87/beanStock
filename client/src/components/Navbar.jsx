import React from 'react'
import logo from './beanlogo.jpg'

const Navbar = () => {
    return (
        <div className='nav d-block py-3'>
            <img src={logo} alt='beanlogo'/>
        </div>
    )
}

export default Navbar