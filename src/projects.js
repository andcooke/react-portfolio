import baes from '../src/images/baes.png'
import blog from '../src/images/blog.png'
import git from '../src/images/git.png'
import scheduler from '../src/images/scheduler.png'
import tome from '../src/images/tome.png'
import weather from '../src/images/weather.png'


export const projects = [
  {
    name: "Baes",
    technologies: "React | MongoDB | GraphQL",
    summary: "Full stack relationship app with social networking capabilities",
    deployed: "https://loversnotfighters.herokuapp.com/",
    github: "https://github.com/andcooke/baes",
    screenshot: baes, 
    alt: 'screenshot of the baes landing page',
  },
  {
    name: "The Shadow Tome",
    technologies: "JavaScript | Handlebars | MySQL",
    summary: "Full stack two-player turn-based fighting game",
    deployed: "https://the-shadow-tome.herokuapp.com/",
    github: "https://github.com/andcooke/the-shadow-tome",
    screenshot: tome, 
    alt: 'screenshot of the Shadow Tome landing page',
  },
  {
    name: "Git Me There",
    technologies: "HTML | CSS | JavaScript | Materialize",
    summary: "Front-end travel site with third party APIs",
    deployed: "https://andcooke.github.io/git-me-there/",
    github: "https://github.com/andcooke/git-me-there",
    screenshot: git, 
    alt: 'screenshot of the Git Me There landing page',
  },
  {
    name: "Tech Blog",
    technologies: "JavaScript | Handlebars | MySQL",
    summary: "Full stack blog site with social networking capabilities using an MVC structure",
    deployed: "http://tech-tech-blog-blog.herokuapp.com/",
    github: "https://github.com/andcooke/tech-blog",
    screenshot: blog, 
    alt: 'screenshot of the Tech Blog landing page',
  },
  {
    name: "Work Day Scheduler",
    technologies: "jQuery | JavaScript | HTML | CSS",
    summary: "Front-end scheduler site making use of local storage",
    deployed: "https://andcooke.github.io/work-day-scheduler/",
    github: "https://github.com/andcooke/work-day-scheduler",
    screenshot: scheduler, 
    alt: 'screenshot of the Work Day Scheduler landing page',
  },
  {
    name: "Weather Dashboard",
    technologies: "JavaScript | HTML | CSS | Bootstrap",
    summary: "Front-end weather site with third party APIs",
    deployed: "https://andcooke.github.io/weather-dashboard/",
    github: "https://github.com/andcooke/weather-dashboard",
    screenshot: weather, 
    alt: 'screenshot of the Weather Dashboard landing page',
  },
]