import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

export default function User() {
  const [List, setList] = useState([])
  const [chercher, setChercher] = useState("")
  const motChercher = useRef("")
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => { setList(response.data) })
  }, [])

  const handelChange = () => {
    setChercher(motChercher.current.value)
  }
  return (<>
    <input type="text" ref={motChercher} onChange={handelChange} />

    <ul>
      {List.filter(tache => {
        return tache.title.includes(chercher);
      }).map((tache, key) => {
        return (
          <React.Fragment key={key}>
            <li>{tache.title}</li>
            <li>{tache.completed }</li>
          </React.Fragment>
        );
      })}
    </ul>


  </>)
}
