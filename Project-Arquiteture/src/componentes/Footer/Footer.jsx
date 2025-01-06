import './Footer.css'
import { Link } from 'react-router-dom'

//ASSETS//
import Brasil from '../../assets/Brasil.svg'
import Unidos from '../../assets/Unidos.svg'
import Face from '../../assets/Face.svg'
import Insta from '../../assets/Insta.svg'
import Twiter from '../../assets/Twiter.svg'
import Linke from '../../assets/Linke.svg'
import Logo from '../../assets/Logo.svg'



function Footer (){
     return (
         <footer>
             <div className="container">
                 <div className="d-flex "> 
                     <div className="footer-logo-col  ">
                          <img src={Logo} alt=""  className="footer-logo" /> 
                          <p>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                          <div className="d-flex social-links jc-b">
                             <a href="#" target="_blank">
                                <img src={Face} alt="" />
                             </a>
                             <a href="#" target="_blank">
                                <img src={Twiter} alt="" />
                             </a>
                             <a href="#" target="_blank">
                                <img src={Linke} alt="" />
                             </a>
                             <a href="#" target="_blank">
                                <img src={Insta} alt="" />
                             </a>
                          </div>
                         
                     </div>
                       <div className="d-flex">
                              <div className="footer-col">
                                  <h3>Pages</h3>
                                     <ul>
                                         <li><Link to="/">Home</Link></li>
                                         <li><Link to="/about">About</Link></li>
                                         <li><Link to="/projects">Projects</Link></li>
                                         <li><Link to="/contact">Contact</Link></li>
                                     </ul>
                              </div>
                              <div className="footer-col">
                                 <h3>Contact</h3>
                                     <p className="grey-1-col">R. Luis Fernades R Vincets</p>
                                     <p className="grey-1-col">suport@escola.com </p>
                                     <p className="grey-1-col">(14) 99756-1971</p>
                              </div>
                         </div>
                     </div>
                 <div className="d-flex jc-b footer-copy">
                      <p className="grey-1-color">Copyright © DNC - 2024</p>
                         <div className=" langs-area">
                             <img src={Brasil} alt="" />  
                             <img src={Unidos} alt="" />    
                         </div>
                      
                 </div> 
                       


             </div>
    </footer>
     )
}

export default Footer