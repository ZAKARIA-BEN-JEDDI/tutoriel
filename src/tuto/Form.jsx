// function Form(props) {
//     return <>
//         <label>First Name</label>
        
//         <input type="text" placeholder={props.plc}  name={props.nameinput} />
        
//     </>
// }

// export default Form

import React, { useState } from "react";
/*
export default function FavoriteColor() {
    const [color, setColor] = useState("red");
    return (
    <>
    <h1>My favorite color is {color}!</h1>
    <button
        type="button"
        onClick={() => setColor("blue")}
    >Blue</button>
    <button
        type="button"
        onClick={() => setColor("red")}
    >Red</button>
    <button
        type="button"
        onClick={() => setColor("pink")}
    >Pink</button>
    <button
        type="button"
        onClick={() => setColor("green")}
    >Green</button>
    </>
    );
}
*/

export default function Counter() {
    const [number,setNumber] = useState(0)
    return <>
        <h1>Le nombre est {number}</h1>
        <button onClick={ ()=>{
            setNumber(previousNumber =>{
                return previousNumber + 1
            })
        }
        }>Accrementer</button>
        <button onClick={ ()=>{
            setNumber(0)
        }

        }>Reset</button>
    </>
}