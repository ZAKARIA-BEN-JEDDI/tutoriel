import {useState} from 'react'
export default function Timer(){
  const [seconde ,setseconde] = useState(0)
  const date = new Date();
  let hour = date.getHours();
  let min = date.getUTCMinutes();
  return <>
    heure : {hour}
    minute : {min}
    seconde : {seconde}

    <button onClick={()=>{
      setseconde(prev => prev+1)
    }}>
      incrementer
    </button>
    <button onClick={()=>{
      if (seconde >0) {
        setseconde(prev => prev-1)
      }
    }}>
      decrementer
    </button>
    <button onClick={()=>{
      setseconde(0)
    }}>arreter</button>
  </>
}