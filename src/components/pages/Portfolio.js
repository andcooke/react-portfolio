import React from 'react';


export default function Portfolio() {
  
  let projects = [
    {
      name: "Tech Blog",
      link: "https://github.com/andcooke/tech-blog",
    },
    {
      name: "The Shadow Tome",
      link: "https://github.com/andcooke/the-shadow-tome",
    },
    {
      name: "Work Day Scheduler",
      link: "https://github.com/andcooke/work-day-scheduler",
    },
    {
      name: "Git Me There",
      link: "https://github.com/andcooke/git-me-there",
    },
    {
      name: "Weather Dashboard",
      link: "https://github.com/andcooke/weather-dashboard",
    },
    {
      name: "Employee Tracker",
      link: "https://github.com/andcooke/employee-tracker",
    }
  ]

  return (
      <div className="portfolio-container">
        {projects.map((item, i) => (
          <a href={item.link}>
            <div className="project" key={i}>
                <p>{item.name}</p>
            </div>
          </a>
      ))}
      </div> 

  )
}
