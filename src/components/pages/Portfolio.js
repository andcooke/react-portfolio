import React from 'react';


export default function Portfolio() {
  
  // let projects = [
  //   {
  //     name: "Baes",
  //     summary: "Full stack relationship app with social networking capabilities",
  //     deployed: "https://loversnotfighters.herokuapp.com/",
  //     github: "https://github.com/andcooke/baes",
  //   },
  //   {
  //     name: "The Shadow Tome",
  //     summary: "Full stack two-player turn-based fighting game",
  //     deployed: "https://the-shadow-tome.herokuapp.com/",
  //     github: "https://github.com/andcooke/the-shadow-tome",
  //   },
  //   {
  //     name: "Git Me There",
  //     summary: "Front-end travel site with third party APIs",
  //     deployed: "https://andcooke.github.io/git-me-there/",
  //     github: "https://github.com/andcooke/git-me-there",
  //   },
  //   {
  //     name: "Tech Blog",
  //     summary: "Full stack blog site with social networking capabilities",
  //     deployed: "http://tech-tech-blog-blog.herokuapp.com/",
  //     github: "https://github.com/andcooke/tech-blog",
  //   },
  //   {
  //     name: "Work Day Scheduler",
  //     summary: "Front-end site to ",
  //     deployed: "https://andcooke.github.io/work-day-scheduler/",
  //     github: "https://github.com/andcooke/work-day-scheduler",
  //   },
  //   {
  //     name: "Weather Dashboard",
  //     summary: "Front-end weather site with third party APIs",
  //     deployed: "https://andcooke.github.io/weather-dashboard/",
  //     github: "https://github.com/andcooke/weather-dashboard",
  //   },
  // ]

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
          <div className="project">
            <p className="project-title">Baes</p>
            <div className="project-info">
              <p>Baes is an app</p>
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
