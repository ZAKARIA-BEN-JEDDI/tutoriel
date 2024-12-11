import React, { useRef ,useState} from "react"

export default function NewForm() {
  const emailRef = useRef("")
  const passsordRef = useRef("")
  const passsordConfirmRef = useRef("")
  const lastNameRef = useRef("")
  const firstNameRef = useRef("")
  const phoneRef = useRef("")
  const countryRef = useRef("")
  const conditionRef = useRef("")

  const [email ,setEmail ] = useState('') 
  const [password ,setpassword ] = useState('') 
  const [passwordconfirm ,setpasswordconfirm ] = useState('') 
  const [firstName ,setfirstName ] = useState('') 
  const [lastName ,setlastName ] = useState('') 
  const [phone ,setphone ] = useState('') 
  const [Country ,setCountry ] = useState('') 
  const [condition ,setcondition ] = useState('') 

  const handelChange = () =>{
    setEmail(emailRef.current.value)
    setpassword(passsordRef.current.value)
    setpasswordconfirm(passsordConfirmRef.current.value)
    setlastName(lastName.current.value)
    setfirstName(firstNameRef.current.value)
    setphone(phoneRef.current.value)
    setCountry(countryRef.current.value)
    setcondition(conditionRef.current.checked)
  }

  const handelSubmit = (e) =>{
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(email.trim === '' && emailRegex.test(email)){
      alert("email invalid")
      return 
    }
    if (password.trim === '' || passwordRegex.test(password)) {
      alert("password form invalid")
      return
    }
    if (lastName.trim ==='') {
      alert("Entrer Last Name")
      return
    }
    if (firstName.trim === '') {
      alert("Entrer First Name")
      return
    }
    if(phone.trim ==='' && (/^\+?[1-9]\d{1,14}$/).test(phone)){
      alert("Entrer un numero de telephone valid")
      return
    }
    if (Country.trim ==='') {
      alert("Choisir un country")
      return
    }
    if (condition.trim ==='') {
      alert("Accept condition")
      return
    }
    alert("Form valid")
  }
  return (
    <form class="max-w-md mx-auto mt-4" onSubmit={handelSubmit}>
      <div class="relative z-0 w-full mb-3 group">
        <input ref={emailRef} onChange={handelChange} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Email address</label>
      </div>
      <div class="relative z-0 w-full mb-3 group">
        <input ref={passsordRef} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Password</label>
      </div>
      <div class="relative z-0 w-full mb-3 group">
        <input ref={passsordConfirmRef} type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="floating_repeat_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Confirm password</label>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-3 group">
          <input ref={firstNameRef} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >First name</label>
        </div>
        <div class="relative z-0 w-full mb-3 group">
          <input ref={lastNameRef} type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Last name</label>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-3 group">
          <input ref={phoneRef} type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label for="floating_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Phone number (123-456-7890)</label>
        </div>
        <div class="relative z-0 w-full mt-2 mb-3 group">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-500 ">Select an option</label>
          <select id="countries" ref={countryRef}
            class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div class="relative z-0 w-full mt-2 mb-3 group">
          <div class="flex items-center mb-4">
            <input ref={conditionRef}  id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="checkbox-1" class="ms-2 text-sm font-medium text-gray-900 ">I agree to the terms and conditions</label>
          </div>
        </div>
      </div>
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  )
}