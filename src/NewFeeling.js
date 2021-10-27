import React, {useState} from "react";



function NewFeeling() {
    const [selectedColor, setSelectedColor] = useState("");

const handleClick = (e) => {

}
    
    
    
    return (
        <div>
            <button id="color_button_1" onClick={handleClick}>stuff1</button>
            <button id="color_button_2" onClick={handleClick}>stuff2</button>
            <button id="color_button_3" onClick={handleClick}>stuff3</button>
            <button id="color_button_4" onClick={handleClick}>stuff4</button>
            <button id="color_button_5" onClick={handleClick}>stuff5</button>
            <button id="color_button_6" onClick={handleClick}>stuff6</button>
        </div>
    );
    }
    
    export default NewFeeling;