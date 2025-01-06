
import AboutText from "../componentes/AboutText/AboutText"
import Banner from "../componentes/Banner/Banner"
import Footer from "../componentes/Footer/Footer"
import Header from "../componentes/Header/Header"





function About (){
    return(
       <div>
         <Header/>   
                  <Banner title="About" image="About.svg" />    
                      <div className="container">
                          <AboutText/>
                      </div>
                 <Footer/> 
       </div>
    )
}
export default About