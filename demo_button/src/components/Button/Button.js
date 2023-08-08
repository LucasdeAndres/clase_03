import React from "react";
import "./Button.css"

function Button(props) {
    return (
        <button className={props.clase}>{props.texto}</button>
    )
}

export default Button