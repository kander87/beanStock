import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const Registration = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors,setErrors]= useState([])
    const navigate= useNavigate()

    const [register, setRegister] = useState([])

    const postRegistrationDetails = () => {
        // if (password == confirmPassword){
            axios.post("http://localhost:8000/api/register", {
                firstName,lastName,userName, password, confirmPassword
            })

                .then(res =>{
                    localStorage.setItem('userId',JSON.stringify(res.data.id));
                    localStorage.setItem('firstName',JSON.stringify(res.data.firstName));
                    navigate(`/search`)
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
    // } else{
    //     alert("bruh pws need to match")
    // }
}
    
        

    const handleSubmit = (e) => {
        e.preventDefault();
        postRegistrationDetails();
        console.log({ firstName, lastName, userName, password, 
            confirmPassword
        });
        setFirstName("");
        setLastName("");
        setUserName("");
        setPassword("");
        setConfirmPassword("");

    };


    return (
        <div className=' registration_containter'>
        <form className="register p-4 mt-5" onSubmit={handleSubmit}>
            <h2 className='text-white mb-3'>Register</h2>
            <input 
                placeholder='First Name' 
                className='form-control  my-2' 
                type="text" 
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
            />
                {
                    errors?.firstName && (
                        <span className="text-danger">{errors.firstName?.message}</span>
                    )
                }
            <input 
                placeholder='Last Name' 
                className='form-control  my-2' 
                type="text" 
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
            />
                {
                    errors?.lastName && (
                        <span className="text-danger">{errors.lastName?.message}</span>
                    )
                }
            <input 
                placeholder='Username' 
                className='form-control  my-2' 
                type="text" 
                value={userName}
                required
                onChange={(e) => setUserName(e.target.value)}
            />
                {/* {
                    errors?.userName && (
                        <span className="text-danger">{errors.userName?.message}</span>
                    )
                } */}
            <input 
                placeholder='Password' 
                className='form-control  my-2' 
                type="password" 
                minLength={8}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
                {/* {
                    errors?.password && (
                        <span className="text-danger">{errors.password?.message}</span>
                    )
                } */}
            <input 
                placeholder='Confirm Password' 
                className='form-control  my-2' 
                type="password" 
                minLength={8}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className='btn btn-success mt-2'>Register</button>
        </form>
        </div>
    )
}

export default Registration