import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useContext } from 'react'
//PAGES//

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

//ULTIS//
import ScrollToTop from './Ultis/ScrollTop'
import { AppContext } from './Contexts/AppContext'

function App() {
 

  return (
     <Router>
       <ScrollToTop/>
       <Routes>
         < Route path="/" element={<Home/>} ></Route> 
         < Route path="/about" element={<About/>} ></Route> 
         < Route path="/projects" element={<Projects/>} ></Route> 
         < Route path="/contact" element={<Contact/>} ></Route> 
       </Routes>
    </Router>
  )
}

export default App
 