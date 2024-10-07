import { useEffect, useRef, useState } from "react"

export default function Formulaire() {
    const [FormValue, SetFormValue] = useState({})
    const inputName = useRef();
    const inputPrenom = useRef()
    const selectedCountry = useRef()
    const inputCondition = useRef()

    const handelChange = (e) => {
        const Target = e.target
        let id = Target.id
        let value = Target.value
        let type = Target.type
        if (type === 'checkbox') {
            value = Target.checked
        }
        //* switch (Target.type) {
        //*     case 'text':
        //*         value = e.target.value
        //*         break;
        //*     case 'checkbox':
        //*         value = e.target.checked
        //*         break;
        //*     case 'select-one':
        //*         console.log(id);
        //*         value = e.target.value
        //*         console.log(value);
        //*         break;
        //*     default:
        //*         break;
        //* }
        SetFormValue(prevState => {
            return { ...prevState, ...{ [id]: value } }
        })
    }

    const handelSubmit = (event) => {
        event.preventDefault()
        SetFormValue(
            {
                name: inputName.current.value,
                prenom: inputPrenom.current.value,
                country: selectedCountry.current.value,
                condition: inputCondition.current.checked,
            }
        )
    }

    useEffect(() => { //TODO POUR INITIALISER LES VALEUR
        inputName.current.value = "ben jeddi"
        inputPrenom.current.value = "zakaria"
        selectedCountry.current.value = "usa"
        inputCondition.current.checked = true

    }, [])

    return <div className="container my-5">
        <form>
            {JSON.stringify(FormValue)}
            <div className="mb-3">
                <label for="nom" className="form-label">Nom :</label>
                <input type="text" id="nom" className="form-control" ref={inputName} /> {/*onChange={handelChange}*/}
            </div>
            <div className="mb-3">
                <label for="prenom" className="form-label">Prenom :</label>
                <input type="text" id="prenom" className="form-control" ref={inputPrenom} /> {/*onChange={handelChange}*/}
            </div>
            <div className="mb-3">
                <select name="" id="country" className="form-select" ref={selectedCountry} > {/*onChange={handelChange}*/}
                    <option value="maroc">maroc</option>
                    <option value="france">france</option>
                    <option value="usa">usa</option>
                </select>
            </div>
            <div className="mb-3">
                <input type="checkbox" id="check" className="form-check-control me-3" ref={inputCondition} /> {/*onChange={handelChange}*/}
                <label for="check" className="form-check-control">Accepter les conditions</label>
            </div>
            <div className="mb-3">
                <input type="submit" className="btn btn-primary" value="Submit" onClick={handelSubmit} />
            </div>
        </form>
    </div>

}