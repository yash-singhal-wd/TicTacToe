import { useState } from "react";

export default function Player({name, symbol}){
    //state definition and state changing
    const [userName, setUserName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }
    function handleChange(e){
        setUserName(e.target.value);
    }
    // conditional content
    let playerNameHTML = (<span className="player-name">{userName}</span>)
    let btnCaption = "Edit";
    if(isEditing){
        playerNameHTML = <input value={userName} onChange={handleChange}/>
        btnCaption="Save" 
    }


    return (
        <li>
            <span className="player">
               {playerNameHTML}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}