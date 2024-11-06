import React from 'react'
import { Link , Outlet} from 'react-router-dom';
import AddEtudiant from './AddEtudiant';
import ListEtudiant from './ListEtudiant';

export default function Nav() {
  return <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to='/ListEtudiant' className="nav-link active" >List Etudiant</Link>
        </li>
        <li className="nav-item">
          <Link to='/AddEtudiant' className="nav-link active" >Add Etudiant</Link>
        </li>
      </ul>
      <div>
        <Outlet /> 
      </div>
    </>
}
