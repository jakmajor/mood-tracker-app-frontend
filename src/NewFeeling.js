import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function NewFeeling({ user, setUser }) {
    const [selectedColor, setSelectedColor] = useState("");
    const [text, setText] = useState("");
    let history = useHistory();

    const handleClick = (e) => {
        setSelectedColor(e.target.value)
    }

    const createFeelings = () => {
        fetch(`http://localhost:9292/feelings/${user.feeler.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                color: selectedColor,
                text: text
            }),
        })
        .then(response => response.json())
        .then(data => {
            setUser(data);
            history.push('/Profile')
        })
    }

    return (
        <div className="frosty-box">
            <button style={{ backgroundColor: "#6A57F3" }} className={`${selectedColor === "6A57F3" ? "selected" : ""} feelings-button`} value="6A57F3" onClick={handleClick}></button>
            <button style={{ backgroundColor: "#9B4CEF" }} className={`${selectedColor === "9B4CEF" ? "selected" : ""} feelings-button`} value="9B4CEF" onClick={handleClick}></button>
            <button style={{ backgroundColor: "#E64786" }} className={`${selectedColor === "E64786" ? "selected" : ""} feelings-button`} value="E64786" onClick={handleClick}></button>
            <button style={{ backgroundColor: "#E377AF" }} className={`${selectedColor === "E377AF" ? "selected" : ""} feelings-button`} value="E377AF" onClick={handleClick}></button>
            <button style={{ backgroundColor: "#EC866B" }} className={`${selectedColor === "EC866B" ? "selected" : ""} feelings-button`} value="EC866B" onClick={handleClick}></button>
            <button style={{ backgroundColor: "#FFCC47" }} className={`${selectedColor === "FFCC47" ? "selected" : ""} feelings-button`} value="FFCC47" onClick={handleClick}></button>
            <textarea placeholder="Describe your feeling..." onChange={(e) => setText(e.target.value)} />
            <button className="button filled-button" onClick={(e) => createFeelings()}>Submit</button>
        </div>
    );
}

export default NewFeeling;
