import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home, { About, Contact } from './Pages2/Pages'
import Layout from './Pages2/Layout'

export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="home"  element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
