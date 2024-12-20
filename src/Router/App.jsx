import { BrowserRouter, Routes , Route } from "react-router-dom";
import Layout from './pages/layout';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />} >
          <Route path="home" element={<Home/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}