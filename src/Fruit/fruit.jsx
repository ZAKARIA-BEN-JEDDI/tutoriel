import { useState } from "react"

export default function Fruit(){
    const [fruit,setFruit] = useState('')
    const [FruitList,setFruitList] = useState([])

    // const displayFruit = () => FruitList.map((fruit,fruitKey) => <li key={fruitKey}>{fruit}</li>)
    const displayFruit = () => FruitList.map((fruit, fruitKey) => <li key={fruitKey}>{fruit}</li>)

    const addFruit = () =>{
        let f = document.querySelector('#fruit').value
        setFruit(f)
    };

    // const addFruit = (e) => {
    //     setFruit(e.target.value)  // Vous mettez à jour le fruit en fonction de l'entrée utilisateur
    // }

    const handlSubmit = (e) => {
        e.preventDefault()
        setFruitList([...FruitList,fruit])
        // setFruit('')
    }

    return <>
        <form onSubmit={handlSubmit}>
            <input onChange={addFruit} type="text" id="fruit"/>
            <br />
            <br />
            <input type="submit" value='Submit' />
            {/* handlSubmit pour n'onvoyer pas le form on l'appele si le type est submit */}
        </form>
        <h1>La Liste des fruits :</h1>
        <ul>
            {displayFruit()}
        </ul>
    </>
}