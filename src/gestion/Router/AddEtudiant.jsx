// import React, { createContext, useEffect, useRef, useState } from 'react'
// export const EtudiantContext = createContext()
// export default function AddEtudiant() {

//   const fullnameRef = useRef('')
//   const emailRef = useRef('')
//   const filiereRef = useRef('')

//   const [etudiant , setetudiant] = useState([{
//     fullname:'zakaria',
//     email:'zakaria@gmail.com  ',
//     filiere:'developpement'
//   }])

//   const handelSabmit = (e) =>{
//     e.preventDefault()
//     setetudiant((prevState)=>[
//       ...prevState,
//       { fullname:fullnameRef.current.value , email:emailRef.current.value , filiere:filiereRef.current.value }
//     ])
//     console.log(etudiant)
//   }

//   // useEffect(() => {
//   //   console.log(etudiant)
//   // }, [etudiant])
  
  
//   return <>
//       <EtudiantContext.Provider value={etudiant}>
//         <h1>Add Etudiant</h1>
//         <form className='mt-5'>
//           <div className="mb-3">
//             <label for="" className="form-label">Full Name</label>
//             <input type="text" className="form-control form-control-sm" id="" aria-describedby="FullNameHelp" ref={fullnameRef}/>
//             <div id="FullNameHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}/>
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div class="mb-3">
//             <label for="" class="form-label">Filiere</label>
//             <select class="form-select form-select-sm" name="" id="" ref={filiereRef}>
//               <option selected>Select Filiere</option>
//               <option value="developpement">Dev</option>
//               <option value="infographie">Inforgraphie</option>
//               <option value="reseaux">Reseaux</option>
//             </select>
//           </div>
//           <button type="submit" onClick={handelSabmit} className="btn btn-primary">Submit</button>
//         </form>
//         </EtudiantContext.Provider>
//   </>
// }

// AddEtudiant.js

import React, {createContext, useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const EtudiantContext = createContext();

export default function AddEtudiant() {
  const [idValue, setIdValue] = useState(1);
  const fullnameRef = useRef('')
  const emailRef = useRef('')
  const filiereRef = useRef('')

  const { etudiant, setetudiant } = useContext(EtudiantContext); // Access context
  const navigate = useNavigate()
  const handelSabmit = (e) => {
    e.preventDefault();
    setetudiant((prevState) => [
      ...prevState,
      {
        id: idValue,
        fullname: fullnameRef.current.value,
        email: emailRef.current.value,
        filiere: filiereRef.current.value,
      },
    ]);
    setIdValue((prevId) => prevId + 1);
    navigate('/ListEtudiant');
  };

  return (
    <EtudiantContext.Provider value={etudiant}>
      <h1>Add Etudiant</h1>
        <form className='mt-5'>
          <div className="mb-3">
            <label for="" className="form-label">Full Name</label>
            <input type="text" className="form-control form-control-sm" id="" aria-describedby="FullNameHelp" ref={fullnameRef}/>
            <div id="FullNameHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Filiere</label>
            <select class="form-select form-select-sm" name="" id="" ref={filiereRef}>
              <option selected>Select Filiere</option>
              <option value="developpement">Dev</option>
              <option value="infographie">Inforgraphie</option>
              <option value="reseaux">Reseaux</option>
            </select>
          </div>
          <button type="submit" onClick={handelSabmit} className="btn btn-primary">Submit</button>
      </form>
    </EtudiantContext.Provider>
  )
}