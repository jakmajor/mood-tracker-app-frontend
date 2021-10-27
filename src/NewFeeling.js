import React, {useEffect, useState} from "react";

function NewFeeling({user}) {
    const [selectedColor, setSelectedColor] = useState("");
    const [text, setText] = useState("");
    
    const handleClick = (e) => {
        setSelectedColor(e.target.value)
        
    }
    
    const createFeelings = () => {
    fetch(`http://localhost:9292/feelings/${user.feeler.id}`,{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            color: selectedColor,
            text: text
        }),
    })
    }

    return (
        <div>
            <button value="6A57F3" onClick={handleClick}>stuff1</button>
            <button value="9B4CEF" onClick={handleClick}>stuff2</button>
            <button value="E64786" onClick={handleClick}>stuff3</button>
            <button value="E377AF" onClick={handleClick}>stuff4</button>
            <button value="EC866B" onClick={handleClick}>stuff5</button>
            <button value="FFCC47" onClick={handleClick}>stuff6</button>
            <input onChange={(e) => setText(e.target.value)} />
            <button onClick={(e) => createFeelings()}>Submit</button>
        </div>
    );
    }
    
    export default NewFeeling;
