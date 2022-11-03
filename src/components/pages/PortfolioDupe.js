import React, { useState } from 'react';
import { projects } from '../../projects.js';
import ProjectCard from '../ProjectCard.js';


export default function Portfolio() {

  return (
    <div className="portfolio-container">
      {projects.map((project, i) => (
        <ProjectCard 
        key={i} 
        name={project.name} 
        technologies={project.technologies} 
        summary={project.summary} 
        github={project.github} 
        deployed={project.deployed}
        screenshot={project.screenshot}
        alt={project.alt}/>
      ))}
    </div> 
  )
}


  // return (
  //     <div className="portfolio-container">
  //       {projects.map((item, i) => (
  //         <a className="project-effect">
  //           <div className="project" key={i}>
  //             <p className="project-title">{item.name}</p>
  //             <div className="project-info">
  //               <p>{item.summary}</p>
  //               <div className="links">
  //                 <a href={item.github}>github</a>
  //                 <a href={item.deployed}>deployed</a>
  //               </div>
  //             </div>
  //           </div>
  //         </a>
  //     ))}
  //     </div> 

  // )

// return (
//   <div className="portfolio-container">
//     {projects.map((item, i) => (
//       <a href={item.github}>
//         <div className="project" key={i}>
//           <p>{item.name}</p>
//         </div>
//       </a>
//   ))}
//   </div> 
