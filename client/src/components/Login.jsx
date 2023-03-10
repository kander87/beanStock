import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const postLoginDetails = () => {

        axios.post('http://localhost:8000/api/login',{
            userName, password
        }

        )
        .then(res =>{
            localStorage.setItem('userId',JSON.stringify(res.data.id));
            localStorage.setItem('firstName',JSON.stringify(res.data.firstName));
            navigate(`/search`)
        })

            .catch((err) => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postLoginDetails();
        setPassword("");
        setUserName("");
    };


    return (
        <div className="login_container">
            <form className="login p-4 d-block" onSubmit={handleSubmit}>

            {/* <form className="login mt-5 w-50 mx-auto p-4 " onSubmit={handleSubmit}> */}
                <h2 className="text-white mb-3">Login</h2>
                <input
                    placeholder="Username"
                    className="form-control  my-2"
                    type="text"
                    value ={userName}
                    required
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    placeholder="Password"
                    className="form-control  my-2"
                    type="password"
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                    <button className="btn btn-success mt-2">Login</button>
                
            </form>
        </div>
    );
};

export default Login;
