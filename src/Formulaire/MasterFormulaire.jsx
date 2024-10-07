import { useRef, useState } from "react"

export default function MasterForm() {
	const nom = useRef('')
	const age = useRef('')
	const country = useRef('')
	const email = useRef('')
	const condition = useRef(false)

	const [FormValue , SetFormValue] = useState([])
	const [Errors , SetErrors] = useState([])

	const ValidForm = () => {
		let isValid = true
		if (nom.current.value.trim() === '') {
			SetErrors(prevent =>{
				return [...prevent , 'Nom est obligatoire']
			})
			isValid = false;
		}
		if (age.current.value.trim() === '') {
			SetErrors(prevent =>{
				return [...prevent , 'Age est obligatoire']
			})
			isValid = false;
		}
		if (country.current.value.trim() === '') {
			SetErrors(prevent =>{
				return [...prevent , 'Country est obligatoire']
			})
			isValid = false;
		}
		if (email.current.value.trim() === '') {
			SetErrors(prevent =>{
				return [...prevent , 'Email est obligatoire']
			})
			isValid = false;
		}
		if (condition.current.checked === false) {
			SetErrors(prevent =>{
				return [...prevent , 'Accept Condiion est obligatoire']
			})
			isValid = false;
		}
		return isValid;
	}


	const handelSubmit = (e) => {
		e.preventDefault()
		SetErrors([])
		ValidForm()
	}
	
	return <div className="container mt-5">
			<div className="alert bg-danger">
				<ul>
					{ Errors.length > 0 ? Errors.map((error,key) => <li key={key}>{error}</li>) : ''}
				</ul>
			</div>
			<form>
					<div class="mb-3">
							<label for="npm" class="form-label">Nom :</label>
							<input type="email" class="form-control" id="nom" aria-describedby="emailHelp"  ref={nom}/>
					</div>
					<div class="mb-3">
							<label for="age" class="form-label">Age :</label>
							<input type="text" class="form-control" id="age" ref={age}/>
					</div>
					<div class="mb-3">
						<label for="country" class="form-label">Country :</label>
						<select class="form-select" id="country" aria-label="Default select example" ref={country}>
							<option value="Maroc">Maroc</option>
							<option value="France">France</option>
							<option value="United State">United State</option>
						</select>
					</div>
					<div class="mb-3">
							<label for="Email" class="form-label">Email :</label>
							<input type="email" class="form-control" id="Email" ref={email}/>
					</div>
					<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="exampleCheck1" ref={condition}/>
							<label class="form-check-label" for="exampleCheck1" >Check me out</label>
					</div>
					<button type="submit" class="btn btn-primary" onClick={handelSubmit}>Submit</button>
			</form>
	</div>
}