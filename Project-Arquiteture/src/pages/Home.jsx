

import Hero from '../componentes/Hero/Hero'
import Footer from '../componentes/Footer/Footer'
import Header from '../componentes/Header/Header'
import ProjectsList from '../componentes/projectsList/ProjectsList'


function Home (){
     return(
        <div>
           <Header/>
                <div className="container">
                     <Hero/>
                         <ProjectsList/> 
                </div>
           
             <Footer/>
        </div>
     )
}
export default Home