import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const postLoginDetails = () => {
        fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
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
                    // Logs the username to the console
                    console.log(data.data);
                    // save the username to the local storage
                    localStorage.setItem("username", data.data.username);
                    // Navigates to the 2FA route
                    navigate("/search");
                }
            })
            .catch((err) => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postLoginDetails();
        console.log({ username, password });
        setPassword("");
        setUsername("");
    };


    return (
        <div className="login_container">
            <form className="login p-4 mt-5 d-block mx-auto" onSubmit={handleSubmit}>

            {/* <form className="login mt-5 w-50 mx-auto p-4 " onSubmit={handleSubmit}> */}
                <h2 className="text-white mb-3">Login</h2>
                <input
                    placeholder="Username"
                    className="form-control  my-2"
                    type="text"
                    value ={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
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
