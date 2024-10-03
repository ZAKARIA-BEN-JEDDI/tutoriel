import { useEffect, useState } from "react";

export default function MasterState() {
    const [Firstname,setFirstname] = useState("");
    const [LastName,setLastName] = useState("");
    const [age,setAge] = useState(-2);

    useEffect( () =>{
        setAge(age =>{
            return age + 1
        })
    },[Firstname,LastName])
    
    return <>
            <div className="container text-center mt-5">
                <label htmlFor="">FirstName</label>
                <input type="text" id="var1" placeholder="FirstName" onChange={(ev) =>{ setFirstname(ev.target.value) }}/>
                <br /><br />
                <label htmlFor="">LastName</label>
                <input type="text" id="var2" placeholder="LastName" onChange={(e) => { setLastName(e.target.value) }} /> 
                <br /><br /><br />
                <h1>Bonjour <span className="text-primary">{Firstname}</span>  <span className="text-danger">{LastName}</span></h1>
                <h1 className="text-center">Vous avez <span>{age}</span> ans</h1>
            </div>
    </>
}