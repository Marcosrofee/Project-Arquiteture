import React from 'react';
import './ProjectsList.css';
import { useState, useEffect } from 'react';

//ASSETS
import Like from '../../assets/Like.svg'
import NoLike from '../../assets/NoLike.svg'

//UTILS//
import { getApiData } from "../../services/apiServices"
//COMPONENTES//
import Button from '../Button/Button'

function ProjectsList(){
     const[projects, setProjects] = useState() 
     const [favProjects, setFavProject] = useState([]) 
     const handleSavedProjects = (id) =>{
        setFavProject((prevFavProjects) =>{
            if (prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) =>  projectId !== id)
            }else{
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        } )
    }
     
    useEffect(() =>{
         const fetchData = async () =>{
             try{
                 const projectsResponse = await getApiData('projects')
                      setProjects(projectsResponse)
             }catch{
                 setProjects([])
             }
         }
         fetchData()
    },[])

    useEffect(() => {
        const savedProjects = JSON.parse(sessionStorage.getItem('faveProjects'));
        if (savedProjects) {
        setFaveProjects(savedProjects);
        }
        }, []);

     return (
         <div className="projects-section">
             <div className="projects-hero">
                 <h2>Follow Our Projects</h2>
                     <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
             </div>
             <div className="projects-grid">
                {
                   

                     projects?.map((project) => (
                         <div className="projects-card  d-flex al-center jc-center fd-column " key={project.id} >
                              <div className="thumb grey-color" 
                                 style={{backgroundImage:`url(${project.thumb})`}}>

                              </div>
                          <h3> {project.title} </h3>
                              <p>{project.subtitle}</p>
                              <Button  buttonStyle="unstled" onClick={() => handleSavedProjects(project.id)}>
                                  <img src={favProjects.includes(project.id) ? Like :  NoLike} alt="" srcset=""  />
                              </Button>
                               
                         </div>
                    ) )
                }
             </div>
            
                 
           
         </div>
);
};

export default ProjectsList;