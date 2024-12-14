import React from 'react'
import { Link, Outlet } from "react-router-dom"
import Home, { About, Contact } from './Pages';

export default function Layout() {
  return (<>
    <nav>
      <Link to="home">Home</Link><br />
      <Link to="about">About</Link><br />
      <Link to="contact">Contact</Link><br />
    </nav>
    <div className="mb-10">
      <Outlet />
    </div>
  </>
  )
}
