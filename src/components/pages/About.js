import React from 'react';
import avatar from '../../images/avater-standin.png'

export default function About() {
  return (
    <div className="about-container">
      <img src={avatar} id="avatar" alt="a stand-in for a later drawing of myself"/>
      <p>Hello, I don't really look like this. <br/><br/>
      I made this drawing to stand-in for a drawing I will make of myself later, so it just has to do for now. <br/><br/>
      Anyway, I'm into art, and design, and reading, and movies, and people. (Not necessarily in that order.) I've been learning software development lately, and am trying to get better at it. This is where I am right now. </p>
    </div>
  );
}
