import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

function LogIn({setUser, user}) {
    const [name, setName] = useState("")
    let history = useHistory();


    const logIn = (data) => {
        setUser(data)
        console.log(data)
        let day = new Date(data.feelings[data.feelings.length - 1].created_at)
        let today = new Date()
        if (day.getDate() === today.getDate() && day.getFullYear() == today.getFullYear()) {
            history.push('/Profile') //profile
        } else {
            history.push('/NewFeeling')
        }
        // console.log(day)
    }

    const getFeelers = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/feelers/${name}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            logIn(data);
        })
    }

    return (
        <div className="frosty-box login-box">
            <h1 className="login-text">What is your name?</h1>
            <div className="login-input-wrapper">
                <input onChange={(e) => setName(e.target.value)} placeholder="Enter your name..." />
                <button onClick={(e) => getFeelers(e)} className="button login-button">+</button>
            </div>
        </div>
    );
}


// a lot of stuff

export default LogIn;

