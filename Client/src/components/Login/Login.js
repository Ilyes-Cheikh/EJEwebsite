import React, { useState } from "react";
import "./login.css"
import "../../assets/css/general.css"
import { useHistory } from 'react-router-dom'
import logo from "../../assets/img/EJE 2.png"


const Axios = require('axios')

export default function Login() {

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [message, setMessage] = useState("")

    let history = useHistory()
    const isAuthen = (e) => {
        e.preventDefault();
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/checkToken",
            headers: {
                'Content-Type': "application/json",
                "x-access-token": localStorage.getItem("token")
            }
        }).then(res => {
            console.log(res)
            if (res.status === 200) {
                localStorage.setItem("loggedIn", "true")
                history.push("/admin")
            }
        })
    }
    const login = (e) => {
        Axios({
            method: "POST",
            data: {
                email: loginEmail,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/login",
        }).then((response) => {
            if (response.data.auth) {
                localStorage.setItem("token", response.data.token)
                console.log(response.data)
                isAuthen(e)
                setMessage('')

            }
            else {
                console.log(response.data)
                setMessage(response.data.message)
            }
        }
        )
    };
    return (

        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <div>
                        <img src={logo} className="logo" />
                        <h3 className="Login">Login</h3>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={(e) => { setLoginEmail(e.target.value) }} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => { setLoginPassword(e.target.value) }} />
                    </div>
                    <div type="submit" className="button" className="round-button secondry submit secondar-color" onClick={login}>Login</div>

                    <div className="message">{message}</div>

                </form>
            </div>

        </div>

    );
}
