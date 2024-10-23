import { Link, Outlet } from "react-router-dom";
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';

export default function Layout() {
  return <>
        <nav className="nav justify-content-center  " >
          <Link to='/home' className="nav-link active">Home</Link>
          <Link to='/blogs' className="nav-link">Blogs</Link>
          <Link to='/contact' className="nav-link">Contact</Link>
        </nav>
        <div>
          <Outlet/>
        </div>
      </>
}