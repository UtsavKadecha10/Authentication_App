import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useCookies } from "react-cookie";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(['token']);
    const [msg, setMsg] = useState("");

    const handleLogin = async() => {
        const response = await axios.post('http://localhost:3000/login',{
            username,
            password
        }).then(resp =>{
            setMsg("Login Successfully!");
            let expires = new Date();
            expires.setTime(expires.getTime()+(1000*60*60))
            setCookie('token', resp.data.token, {path: '/', expires})
        }).catch(error =>{
            setMsg("Invalid username or password!!")
        });
        console.log(response);
    }
    return(
        <>
            <h3>Sign In</h3>
            <div className="mb-3">
                <label>User name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
            </div>

            <div className="mb-3 custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customeCheck1">
                    Remember me
                </label>
            </div>

            <div className="d-grid">
                <button onClick={handleLogin} className="btn btn-primary">
                    Submit
                </button>
            </div>

            <div className="mb-3">
                <label>{msg}</label>
            </div>

            <p className="forgot-password text-right">
                Forgot <a href='#'>password?</a>
            </p>
        </>
    )
}
export default Login;
