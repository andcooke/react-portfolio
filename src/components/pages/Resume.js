import React from 'react';
import resume from '../../images/Andrew Cooke Resume.pdf';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiHandlebarsdotjs, SiMysql, SiGraphql, SiMongodb, SiSequelize, SiExpress } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { DiJavascript1, DiJqueryLogo, DiHeroku } from 'react-icons/di'


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

          <div className="skills">
            <div className="front-end">
              <FaHtml5/>
              <FaCss3Alt/>
              <DiJavascript1/>
              <DiJqueryLogo/>
              <FaBootstrap/>
              <SiHandlebarsdotjs/>
              <FaReact/>
            </div>
            <div className="back-end">
              <SiMysql/>
              <SiSequelize/>
              <SiGraphql/>
              <SiMongodb/>
              <IoLogoNodejs/>
              <SiExpress/>
              <DiHeroku/>
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
            <p><b>UT Austin Boot Camp</b><br></br><i>Full-Stack Coding Immersive Program</i> - 2022</p>

            <p><b>Sam Houston State University</b><br></br><i>Bachelor of Fine Arts - Photography - Cum Laude </i></p>
          </div>

          <div className="resume-button">
            <a href={resume} download className="download-button">download résumé</a>
          </div>
        </div>
      </div>
    </div>
  );
}


