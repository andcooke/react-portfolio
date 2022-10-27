import React, { useState } from 'react';

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
      setInfoStyle("visible");
    } else {
      setStyle("project");
      setTitleStyle("visible");
      setInfoStyle("hidden");
    }
  }
  
  let projects = [
    {
      name: "Baes",
      summary: "Full stack relationship app with social networking capabilities",
      deployed: "https://loversnotfighters.herokuapp.com/",
      github: "https://github.com/andcooke/baes",
    },
    {
      name: "The Shadow Tome",
      summary: "Full stack two-player turn-based fighting game",
      deployed: "https://the-shadow-tome.herokuapp.com/",
      github: "https://github.com/andcooke/the-shadow-tome",
    },
    {
      name: "Git Me There",
      summary: "Front-end travel site with third party APIs",
      deployed: "https://andcooke.github.io/git-me-there/",
      github: "https://github.com/andcooke/git-me-there",
    },
    {
      name: "Tech Blog",
      summary: "Full stack blog site with social networking capabilities",
      deployed: "http://tech-tech-blog-blog.herokuapp.com/",
      github: "https://github.com/andcooke/tech-blog",
    },
    {
      name: "Work Day Scheduler",
      summary: "Front-end site to ",
      deployed: "https://andcooke.github.io/work-day-scheduler/",
      github: "https://github.com/andcooke/work-day-scheduler",
    },
    {
      name: "Weather Dashboard",
      summary: "Front-end weather site with third party APIs",
      deployed: "https://andcooke.github.io/weather-dashboard/",
      github: "https://github.com/andcooke/weather-dashboard",
    },
  ]

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

  

  return (
    <div className="portfolio-container">
      {/* {projects.map((item, i) => ( */}
        <a className="project-effect">
          <div className={style} onClick={expandProject}>
            <p className={titleStyle}>Test</p>
            <div className={infoStyle}>
              <div className="project-info">
                <a className="back-button">{BsArrowLeftShort()}</a>
                <h3>title</h3>
              </div>
              <div className="links">
                <a>github</a>
                <a>deployed</a>
              </div>
            </div>
          </div>
        </a>
      {/* ))} */}
    </div> 

)
}


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
