import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    return (
        <div className='loginPage d-flex justify-content-between'>
            <div className='col-6'>
                <form className='register mt-5 w-50 mx-auto p-4 '>
                    <h2 className='text-white mb-3'>Register</h2>
                    <input placeholder='First Name' className='form-control  my-2' type="text" />
                    <input placeholder='Last Name' className='form-control  my-2' type="text" />
                    <input placeholder='Username' className='form-control  my-2' type="text" />
                    <input placeholder='Password' className='form-control  my-2' type="password" />
                    <input placeholder='Confirm Password' className='form-control  my-2' type="password" />
                    <Link to="/search"> <button className='btn btn-success mt-2'>Register</button></Link>
                </form>
            </div>
            <div className='col-6'>
            <form className='login mt-5 w-50 mx-auto p-4 '>
                    <h2 className='text-white mb-3'>Login</h2>
                    <input placeholder='Username' className='form-control  my-2' type="text" />
                    <input placeholder='Password' className='form-control  my-2' type="password" />
                    <Link to="/search"><button className='btn btn-success mt-2'>Login</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login