import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'


const Registration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const navigate= useNavigate()

    const postRegistrationDetails = () => {
        fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify({
                firstName, lastName, username, password, confPassword
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.error_message) {
                alert(data.error_message);
            } else {
                alert(data.message);
                navigate("/");
            }
        })
        .catch((err) => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postRegistrationDetails();

        console.log({ firstName, lastName, username, password, confPassword });
        setFirstName("");
        setLastName("");
        setUsername("");
        setPassword("");
        setConfPassword("");

    };


    return (
        <div className=' registration_containter'>
        <form className="register p-4 mt-5" onSubmit={handleSubmit}>

        {/* <form className='register mt-5 w-50 mx-auto p-4 ' onSubmit={handleSubmit}> */}
            <h2 className='text-white mb-3'>Register</h2>
            <input 
                placeholder='First Name' 
                className='form-control  my-2' 
                type="text" 
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input 
                placeholder='Last Name' 
                className='form-control  my-2' 
                type="text" 
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
            />
            <input 
                placeholder='Username' 
                className='form-control  my-2' 
                type="text" 
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                placeholder='Password' 
                className='form-control  my-2' 
                type="password" 
                minLength={8}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input 
                placeholder='Confirm Password' 
                className='form-control  my-2' 
                type="password" 
            />
            <button className='btn btn-success mt-2'>Register</button>
        </form>
        </div>
    )
}

export default Registration