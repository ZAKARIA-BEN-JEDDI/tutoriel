import { useRef, useState } from "react"

export default function MonsterFormulaire(){

  const NameValue = useRef('')
  const EmailValue = useRef('')
  const MessageValue = useRef('')

  const [Errors , setErrors] = useState([])

  const handelSubmit = (event) =>{
    event.preventDefault()
    console.log(NameValue.current.value);
    console.log(EmailValue.current.value);
    console.log(MessageValue.current.value);
  }

  const handelchange = (event) => {
    event.preventDefault()
    // console.log(NameValue.current.value);
    // console.log(EmailValue.current.value);
    // console.log(MessageValue.current.value);
    ValidInput()
  }

  const ValidInput = () =>{
    setErrors([])
    if (MessageValue.current.value.trim().length < 10   ) {
      setErrors(preventvalue =>{
        return [...preventvalue , "Le message doit porte plus de 10 caractere !"];
      })
    }
  }

  return <>
    <div className="container mt-5">
      
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        {Errors.length && (
          Errors.map((item , key ) =>{
            return <li key={key}>{item}</li>
          })
        )
        }
      </div>
      
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input type="text" class="form-control" name="" id="" ref={NameValue} onChange={handelchange}/>
        <small class="form-text text-muted">Help text</small>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Email</label>
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="abc@mail.com" ref={EmailValue} onChange={handelchange}/>
        <small id="emailHelpId" class="form-text text-muted">Help text</small>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Message</label>
        <textarea class="form-control" ref={MessageValue} onChange={handelchange}>

        </textarea>
        <small id="" class="form-text text-muted">Help text</small>
      </div>
      <div class="row mb-3">
        <button className="btn btn-primary" onClick={handelSubmit}>Submit</button>
      </div>

    </div>

    </>
}