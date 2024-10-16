import { useRef, useState } from "react"

export default function MyMasterFormulaire() {
    const nameValue = useRef('')
    const emailValue = useRef('')
    const countryValue = useRef('')
    const checkboxValue = useRef(false)

		const [Errors , setErrors] = useState([])
		const [Valid , setValid] = useState([])

		const ValidationForm = () => {
			let isValid = false;
			if (nameValue.current.value.trim() !== '' ) {
				isValid = true
				setValid(preValid =>{
					return  [...preValid = 'Structure name is valid']
				})
			}else{
				isValid = false
				setErrors(prevError =>{
					return [...prevError , 'Structure name is not valid']
				})
			}
			if (emailValue.current.value.trim() !== '' ) {
				isValid = true
				setValid(preValid =>{
					return  [...preValid = 'Structure email is valid']
				})
			}else{
				isValid = false
				setErrors(prevError =>{
					return [...prevError , 'Structure email is not valid']
				})
			}
			if (countryValue.current.value.trim() !== '' ) {
				isValid = true
				setValid(preValid =>{
					return  [...preValid = 'Country is selected']
				})
			}else{
				isValid = false
				setErrors(prevError =>{
					return [...prevError , 'Country is not selected']
				})
			}
			if (checkboxValue.current.checked) {
				isValid = true
				setValid(preValid =>{
					return  [...preValid = 'Condition is checked']
				})
			}else{
				isValid = false
				setErrors(prevError =>{
					return [...prevError , 'Condition is not checked']
				})
			}
			return isValid;
		}

		const handelSubmit = (e) => {
			e.preventDefault()
			ValidationForm()
		}

    return <>
			<div className="flex">
				<div className="w-1/2 bg-blue-500 h-23">
					<ul>
						{
							Valid.map((value , key) =>{
								return <li key={key}>{value}</li>
							})
						}
					</ul>
				</div>
				<div className="w-1/2 bg-red-500 h-23">
					<ul>
					{
						Errors.map((value , key) =>{
							return <li key={key}>{value}</li>
						})
					}
					</ul>
				</div>
			</div>
			
        <form class="max-w-sm mx-auto">
					<div class="mb-3">
							<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
							<input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" ref={nameValue} />
					</div>
					<div class="mb-3">
							<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
							<input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={emailValue} />
					</div>
					<div class="mb-3">
						<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
						<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={countryValue}>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</div>
					<div class="flex items-start mb-3">
							<div class="flex items-center h-5">
							<input id="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" ref={checkboxValue} />
							</div>
							<label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
					</div>
					<button onClick={handelSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </>
}