import Banner from "../componentes/Banner/Banner"
import Footer from "../componentes/Footer/Footer"
import Header from "../componentes/Header/Header"
import ContactForm from "../ContactForm/ContactForm"


 function Contact (){
     return(
         <div>
             <Header/>
               <Banner title="Contact" image="Contact.svg" />
                 <div className="container">
                 
                    <ContactForm/>
                 </div>
        
              <Footer/>
         </div>
    )
}
export default Contact