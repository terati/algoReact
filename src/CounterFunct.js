import React, { useState, useEffect } from 'react'
// import Button from './components/PrimaryButton'

function CounterFunct() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const alterNum = (e) => {
        setNum(e.target.value)
    }

    const settingNum = () => {
        setCount( (prev) => prev + Number(num) ) 
    }

    /*
    useEffect(() => {
        const interval = setInterval( () => { setCount(count => count - 1) }, 1000 )
        return () => {
            clearInterval(interval);
        }
    }, [])
    */

    useEffect(() => {
        console.log("Hit");
    }) 

    return (
        <div>

            {/* <Button /> */}

            <p> Counter Value: {count} </p>
            {/* <Button onClick={() => setCount((prev) => prev + 1)}> Increment by 1</Button> */}
            <button onClick={() => setCount((prev) => prev - 1)}> Decrement by 1</button>
            <button onClick={() => setCount(0)}> Reset </button>
            <input type="text" value={num} onChange={alterNum}/>
            <button onClick={ settingNum }> Increment by Input Value </button>
        </div>
    )
}

export default CounterFunct
