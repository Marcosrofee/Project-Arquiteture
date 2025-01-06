import './ContactForm.css'
import Button from '../componentes/Button/Button'
import { useState, useEffect } from 'react'



function ContactForm(){
    const [inputValue, setInputValue] = useState(); // Starts as undefined

     const [formData, setFormData] =  useState({
         name:'',
             email:'',
                 messega:''
                })
   
     const [isFormValid, setIsFormValid] = useState(false)
     const [formSubmitLoading, setFormSubmitLoading] = useState(false)
     const [formSubimtted ,setFormSubmitted] = useState(false)

     const handleSubmit = async (e) => {
         e.preventDefault();
             if(isFormValid){
                 setFormSubmitLoading(true)
                 try{
                     const response = await fetch('https://api.web3forms.com/submit',{
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({...formData, access_key:"935087d0-cb4a-428c-ba4f-af6ac7707d03"})
                    
                   })  
                 if(response.ok){
                       setFormSubmitted(true)     
                   }else{
                    alert('Erro ao enviar!')
                   }
                 }   catch (e) {
                    alert ('Error:',e)
                 } finally{
                    setFormSubmitLoading(false)
                 }               
            }
        }   
     useEffect(() => { 
         const isValidEmail = (email) =>{
             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                 return  emailRegex.test(email)
         }
         const isValid = formData.name.trim() && 
                             formData.email.trim() &&
                             isValidEmail(formData.email) &&
                             formData.messega.trim()
                                     
                             setIsFormValid(isValid)
     },[formData])

     const handleChange = (e) => {
         const { name, value } = e.target;
             setFormData ({
                 ...formData,
                 [name]:value
             })
     }
    return(
         <div className="conctact-form d-flex fd-column al-center">
             <h2>We love meeting new people and helping them. </h2>
             <form onSubmit={handleSubmit} >
                 <div className="d-flex form-group"  >
                     <input
                         className="form-input"
                             type="text" 
                                 id="name"
                                     name="name"
                                         placeholder="Nome*"
                                     onChange={handleChange}    
                                 value={formData.name}      
                     /> 
                     
                      <input
                         className="form-input"
                             type="email"
                                 id="email"
                                     name="email"
                                         placeholder="E-mail*"
                                     onChange={handleChange} 
                                 value={formData.email}    

                     /> 
                 </div>

                 <div className="d-flex form-group">  
                      <textarea
                          className="form-input"
                              id="message"
                                 name="message"
                                     placeholder="Mensagem"
                                         rows="5">
                       </textarea>
                 </div>
                
                
                 <div className="al-center d-flex form-group ">
                     {formSubimtted && <p className="text-primary" ></p>}
                     <Button type="submit" buttonStyle="secondary" disabled={formSubmitLoading} >
                         Enviar
                     </Button>
                 </div>

             </form>
         </div>
     )
}

export default ContactForm