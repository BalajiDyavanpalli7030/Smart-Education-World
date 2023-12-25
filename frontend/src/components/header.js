import React from "react";
import speak from './speechUtils';
function Header(){
    return <>
        <header >
            <h1 onClick={() => speak("Smart Education World")}>Smart Education World
            <div></div>
            </h1>
            
        </header>
    </>
}


export default Header