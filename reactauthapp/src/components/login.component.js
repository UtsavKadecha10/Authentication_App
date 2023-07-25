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
        }).catch(error)
    }
}
