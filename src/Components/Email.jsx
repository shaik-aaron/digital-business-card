import React from "react";

function Message() {
    alert("It's an Email!");
}

export default function Email() {
    return (
        <button type="button" className="EmailButton" onClick={Message}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <p>Email</p>
        </button>
    )
}