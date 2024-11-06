import React, { useContext } from 'react'
import { EtudiantContext } from './AddEtudiant';

export default function EtudiantList() {
  const { etudiant } = useContext(EtudiantContext); // Access etudiant from context
  return (
    <div>
      <h2>List of Etudiants</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Filiere</th>
          </tr>
        </thead>
        <tbody>
          {etudiant.map((etudiant, index) => (
            <tr key={index}>
              <td>{etudiant.id}</td>
              <td>{etudiant.fullname}</td>
              <td>{etudiant.email}</td>
              <td>{etudiant.filiere}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        
      </ul>
    </div>
  )
}
