import React from "react";

function Welcome(props) {
    // Exemplo de componente com props
    switch (props.gender) {
        // Exemplo de renderização condicional
        case "homem":
            return <h1>Bem-vindo, Sr. {props.name}</h1>;
        case "mulher":
            return <h1>Bem-vinda, Sra. {props.name}</h1>;
        default:
            return <h1>Bem-vindo!</h1>;
    }
}

export default Welcome;