import { Link } from "react-router-dom";
import { useState } from "react";
import './Header.css'

//ASSETS//
import Logo from '../../assets/Logo.svg'

//COMPONENTES//
import Button from "../Button/Button"

function Header (){
   const [ isOpen,setIsOpen]= useState(false)  
   const toggleMenu = () => {
    setIsOpen(!isOpen)
   }
     return(
         <header>
             <div className="container">
                 <div className="al-center d-flex jc-b">
                      <Link><img src={Logo} alt="" /></Link> 
                         <div className="mobile-menu">
                               <Button buttonStyle="secondary" onClick={toggleMenu}  >
                                Menu
                                </Button>
                         </div>  
                 </div>
                     <nav className={`${isOpen ? 'open' : '' }`}>
                         <Button onClick={toggleMenu}  buttonStyle="unstyled" className="mobile-menu close-btn"> 
                            X
                            </Button>
                         <ul className="d-flex ">
                             <li><Link to="/">Home</Link></li>
                             <li><Link to="/about">About</Link></li>
                             <li><Link to="/projects">Projects</Link></li>
                             <li><Link to="/contact">Contact</Link></li>
                         </ul>
                     </nav>
             </div>
         </header>
     )
}
export default Header