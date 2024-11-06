// AppGestion.js
import React, { useState } from 'react'
import Nav from './Router/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListEtudiant from './Router/ListEtudiant'
import AddEtudiant from './Router/AddEtudiant'
import { EtudiantContext } from './Router/AddEtudiant' // Import context from AddEtudiant

export default function AppGestion() {
  const [etudiant, setetudiant] = useState([]); // Initialize etudiant array

  return (
    <div className="container">
      <EtudiantContext.Provider value={{ etudiant, setetudiant }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="/ListEtudiant" element={<ListEtudiant />} />
              <Route path="/AddEtudiant" element={<AddEtudiant />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </EtudiantContext.Provider>
    </div>
  );
}
