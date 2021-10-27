import React from "react";
import { NavLink } from "react-router-dom";

function Home(){
    return (
        <div className="frosty-box">
            <h1>How are you feeling today?</h1>
            <button>+ Add feels</button>
        </div>
    );
}

export default Home;