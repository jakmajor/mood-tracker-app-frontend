import React, { useState } from "react";
import { Link } from "react-router-dom";
function LogIn({ setUser }) {


    const [name, setName] = useState("")
    const logIn = (data) => {
        let day = new Date(data.feelings[data.feelings.length - 1].created_at)
        let today = new Date()
        if (day.getDate() === today.getDate() && day.getFullYear() == today.getFullYear()) {
            window.location.pathname = '/Profile'
        } else {
            window.location.pathname = '/NewFeeling'
        }
        // console.log(day)
    }
    const getFeelers = () => {
        fetch(`http://localhost:9292/feelers/${name}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then(data => {
                logIn(data);
            })
    }
    return (
        <div className="frosty-box login-box">
            <h1 className="login-text">What is your name?</h1>
            <div className="login-input-wrapper">
                <input onChange={(e) => setName(e.target.value)} placeholder="Enter your name..." />
                <button onClick={() => getFeelers()} className="button login-button">+</button>
            </div>
        </div>
    );
}
// a lot of stuff
export default LogIn;