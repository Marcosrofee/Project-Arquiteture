
import './Button.css'

//ASSETS//
import Seta from '../../assets/Seta.svg'


function Button ({arrow, buttonStyle, loading, children, ...props}){
     return(
         <header>
             <div className="container">
             <button className={`button ${buttonStyle}`} {...props}>
                {children} {arrow && <img src={Seta} alt="" srcset="" /> }
              </button>
                 
             </div>
         </header>
     )
}
export default Button