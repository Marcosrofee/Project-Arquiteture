
import './Hero.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

//ASSETS//


function Hero (){
     return(
         <header>
             <div className="hero d-flex al-center">
                 <div className="hro-text ">
                     <h1>Let Your Home <br /> Be Inique </h1>
                         <p>There are many variations of the passages of 
                         lorem Ipsum fromavailable, majority.</p>
                         <Link>
                             <Button buttonStyle="secondary"  arrow>Get Started</Button>
                         </Link>     
                 </div>
                  
             </div>
         </header>
     )
}
export default Hero