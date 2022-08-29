import React from 'react';


export default function Portfolio() {
  
  let projects = [
    {
      name: "Tech Blog"
    },
    {
      name: "The Shadow Tome" 
    },
    {
      name: "Work Day Scheduler"
    },
    {
      name: "Git Me There"
    },
    {
      name: "Weather Dashboard"
    },
    {
      name: "Employee Tracker"
    }
  ]

  return (projects.map((item) => (
      <div>
       <p>{item.name}</p>
      </div> 
    ))
  )
}
