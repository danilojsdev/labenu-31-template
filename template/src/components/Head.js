import React from "react";
import logo from "./img/logo.png";

export const Head = () => {
    return (
    <header className="header">
        <h1>Exercício aula 31</h1>
        <figure>
            <img src={logo} alt="logo Labenu" />
        </figure>                     
    </header>
    )
}