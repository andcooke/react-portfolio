import React from 'react';


export default function Portfolio() {
  
  let projects = [
    {
      name: "Baes",
      deployed: "https://loversnotfighters.herokuapp.com/",
      github: "https://github.com/andcooke/baes",
    },
    {
      name: "The Shadow Tome",
      deployed: "https://the-shadow-tome.herokuapp.com/",
      github: "https://github.com/andcooke/the-shadow-tome",
    },
    {
      name: "Git Me There",
      deployed: "https://andcooke.github.io/git-me-there/",
      github: "https://github.com/andcooke/git-me-there",
    },
    {
      name: "Tech Blog",
      deployed: "http://tech-tech-blog-blog.herokuapp.com/",
      github: "https://github.com/andcooke/tech-blog",
    },
    {
      name: "Work Day Scheduler",
      deployed: "https://andcooke.github.io/work-day-scheduler/",
      github: "https://github.com/andcooke/work-day-scheduler",
    },
    {
      name: "Weather Dashboard",
      deployed: "https://andcooke.github.io/weather-dashboard/",
      github: "https://github.com/andcooke/weather-dashboard",
    },
  ]

  return (
      <div className="portfolio-container">
        {projects.map((item, i) => (
          <a className="project-effect">
            <div className="project" key={i}>
              <p className="project-title">{item.name}</p>
              <div className="project-links">
                <div className="links">
                  <a href={item.github}>github</a>
                </div>
                <div className="links">
                  <a href={item.deployed}>deployed</a>
                </div>
              </div>
            </div>
          </a>
      ))}
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
