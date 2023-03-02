import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../components/Login'
import Registration from '../components/Registration'


const LoginReg = () => {
    const [firstName] = useState([])
    
    return (
        <div className='loginPage'>
            <div className='logReg'>
            <Registration firstName = {firstName}/>
            </div>
            <div className='logReg'>
            <Login firstName = {firstName}/>
            </div>
        </div>
    )
}

export default LoginReg