import React from 'react';
import resume from '../../images/resume.pdf';


export default function Resume() {

  return (
    <div className="resume-container">

      <div className="engineer-title">
        <h2>SOFTWARE ENGINEER</h2>
      </div>

      <div className="attributes">
        <div className="skills-container">
          <div className="resume-header">
            <h2>skills</h2>
          </div>
        </div>

        <div className="experience-container">
          <div className="resume-header">
            <h2>experience</h2>
          </div>

          <div className="experience">
          <p><b>Austin Independent School District</b> - 2014-2022</p> 
          <p><i>Art Teacher -- McCallum Fine Arts Academy</i></p> 
          {/* <p className="right-text">2014-2022</p> */}
          <li>Wrote and implemented curriculum for 5 different courses and 180+ students each year</li>
          
          <li>Started and grew the Digital Arts program, managing equipment, software, and curriculum</li>

          <li>Oversaw participation in regional and national competitions, garnering top awards annually</li>

          <li>Adapted all curriculum and instruction for online-learning during the covid-19 pandemic</li>
          </div>

        </div>

        <div className="education-container">
          <div className="resume-header">
            <h2>education</h2>
          </div>
          <div className="education">
            <p>
            UT Austin Boot Camp - Full-Stack Coding Immersive Program	2022	

            Sam Houston State University - Bachelor of Fine Arts, Photography, Cum Laude
            </p>
          </div>

          <div>
            <a href={resume} download className="download-button">download</a>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <a href={resume} download> download</a> */}
