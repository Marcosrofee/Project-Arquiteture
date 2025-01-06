import Banner from "../componentes/Banner/Banner"
import Footer from "../componentes/Footer/Footer"
import Header from "../componentes/Header/Header"
import ProjectsList from "../componentes/projectsList/ProjectsList"


 function Projects (){
     return(
         <div>
              <Header/>   
                  <Banner title="Projects" image="Projects.svg" />    
                      <div className="container">
                        <ProjectsList/>
                      </div>
                 <Footer/> 
        </div>
    )
}
export default Projects