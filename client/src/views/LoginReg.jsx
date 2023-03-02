import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../components/Login'
import Registration from '../components/Registration'


const LoginReg = () => {
    return (
        // <div className='loginPage d-flex justify-content-between'>
        <div className='backgroundStyle'>
            <div className='logReg'>
            <Registration/>
            </div>
            <div className='logReg'>
            <Login/>
            </div>
        </div>
    )
}

export default LoginReg