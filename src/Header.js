import React from "react";
export default function Header (){
    return(
        <div class="header">
            <header>
                <h1>PG</h1>
                <div class="nav">
                <a className="nav title" href="/home">Home</a>
                <a className="nav title" href="/about">About</a>
                <a className="nav title" href="/project">Projects</a>
                <a className="nav title" href="/skill">Skills</a>
                <a className="nav title" href="/contact">Contact</a>

            </div>
            </header>       
        </div>
    )
}