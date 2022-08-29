import React from 'react';


export default function Portfolio() {
  
  let projects = [
    {
      name: "Tech Blog",
      link: "https://github.com/andcooke/tech-blog",
      description: 3,
    },
    {
      name: "The Shadow Tome",
      link: "https://github.com/andcooke/the-shadow-tome",
      description: 3,
    },
    {
      name: "Work Day Scheduler",
      link: "https://github.com/andcooke/work-day-scheduler",
      description: 3,
    },
    {
      name: "Git Me There",
      link: "https://github.com/andcooke/git-me-there",
      description: 3,
    },
    {
      name: "Weather Dashboard",
      link: "https://github.com/andcooke/weather-dashboard",
      description: 3,
    },
    {
      name: "Employee Tracker",
      link: "https://github.com/andcooke/employee-tracker",
      description: 3,
    }
  ]

  return (projects.map((item) => (
      <div className="portfolio-container">
        <p>{item.name}</p>
        <a href={item.link}>test</a>
      </div> 
    ))
  )
}
