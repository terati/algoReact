import React, { useState } from 'react'

function FunctionBased() {
    const [message, setMessage] = useState("Initial Message Right Here")

    const changeMessage = () => {
        setMessage("This is the new message!");
    }

    return (
        <div>
            <p> This is a function based component</p>
            <p> {message} </p>
            <button onClick={changeMessage}> Press here pls </button>

        </div>
    )
}

export default FunctionBased
