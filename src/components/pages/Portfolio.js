import React, { useState } from 'react';
import { projects } from '../../projects.js';


export function BsArrowLeftShort(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path fillRule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clipRule="evenodd" /></svg>;
}

export default function Portfolio() {

  const [style, setStyle] = useState("project")
  const [titleStyle, setTitleStyle] = useState("visible");
  const [infoStyle, setInfoStyle] = useState("hidden");

  const expandProject = () => {
    if (style === "project") {
      setStyle("expanded-project");
      setTitleStyle("hidden");
      setInfoStyle("visible")
      
    }
  }

  const minimizeProject = () => {
    if (style === "expanded-project") {
      setStyle("project");
      setTitleStyle("visible");
      setInfoStyle("hidden");
    }
  }

  return (
    <div className="portfolio-container">
      {projects.map((project, i) => (
        <a key={i} onClick={expandProject}>
          <div className={style}>
            <p className={titleStyle}>{project.name}</p>
            <div className={infoStyle}>
              <div className="project-details">
                <a className="back-button " onClick={minimizeProject}>{BsArrowLeftShort()}</a>
                <h3>{project.name}</h3>
              </div>
              <div className="project-techs">
                <p>{project.technologies}</p>
              </div>
              <div className="project-description"> 
                <p>{project.summary}</p>
              </div>
              <div className="links">
                <a href={project.github} target="_blank">github</a>
                <a href={project.deployed} target="_blank">deployed</a>
              </div>
            </div>
          </div>
        </a>
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
