import React, { useState } from 'react';
import resume from '../../images/Andrew Cooke - Software Developer.pdf';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiHandlebarsdotjs, SiMysql, SiGraphql, SiMongodb, SiSequelize, SiExpress } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { DiJavascript1, DiJqueryLogo, DiHeroku } from 'react-icons/di'


export default function Resume() {

  const [skillsHeader, setSkillsHeader] = useState('skills');

  const handleMouseEnter = (label) => {
    setSkillsHeader(label);
  };

  const handleMouseLeave = () => {
    setSkillsHeader('skills');
 };

  return (
    <div className="resume-container">
      <div className="engineer-title">
        <h2>SOFTWARE DEVELOPER</h2>
      </div>

      <div className="attributes">
        <div className="skills-container">
          <div className="resume-header">
            <h2>{skillsHeader}</h2>
          </div>

          <div className="skills">
            <div className="front-end">
              <FaHtml5 
                className="icon"
                name="html"     
                onMouseEnter={() => {handleMouseEnter('HTML')}}
                onMouseLeave={handleMouseLeave}/>
              <FaCss3Alt 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('CSS')}}
                onMouseLeave={handleMouseLeave}/>
              <DiJavascript1 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('JavaScript')}}
                onMouseLeave={handleMouseLeave}/>
              <DiJqueryLogo 
                className="icon"                
                onMouseEnter={() => {handleMouseEnter('jQuery')}}
                onMouseLeave={handleMouseLeave}/>
              <FaBootstrap 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('Bootstrap')}}
                onMouseLeave={handleMouseLeave}/>
              <SiHandlebarsdotjs 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('Handlebars')}}
                onMouseLeave={handleMouseLeave}/>
              <FaReact 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('React')}}
                onMouseLeave={handleMouseLeave}/>
            </div>
            <div className="back-end">
              <SiMysql 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('MySQL')}}
                onMouseLeave={handleMouseLeave}/>
              <SiSequelize 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('Sequelize')}}
                onMouseLeave={handleMouseLeave}/>
              <SiGraphql 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('GraphQL')}}
                onMouseLeave={handleMouseLeave}/>
              <SiMongodb 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('MongoDB')}}
                onMouseLeave={handleMouseLeave}/>
              <IoLogoNodejs 
                className="icon"                
                onMouseEnter={() => {handleMouseEnter('Node.js')}}
                onMouseLeave={handleMouseLeave}/>
              <SiExpress 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('Express.js')}}
                onMouseLeave={handleMouseLeave}/>
              <DiHeroku 
                className="icon"
                onMouseEnter={() => {handleMouseEnter('Heroku')}}
                onMouseLeave={handleMouseLeave}/>
            </div>
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
            <p><b>UT Austin Boot Camp</b></p>
            <p><i>Full-Stack Coding Immersive Program</i> - 2022</p>

            <p><b>Sam Houston State University</b></p>
            <p><i>Bachelor of Fine Arts - Photography - Cum Laude </i></p>
          </div>

          <div className="resume-button">
            <a href={resume} download className="download-button">download r??sum??</a>
          </div>
        </div>
      </div>
    </div>
  );
}


