import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="frosty-box">
            <h1>How are you feeling today?</h1>
            <Link to='/LogIn' className="button">+ Add feels</Link>
        </div>
    );
}

export default Home;