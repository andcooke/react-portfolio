import React from 'react';
import avatar from '../../images/avater-standin.png'

export default function About() {
  return (
    <div className="about-container">
      <img src={avatar} id="avatar" alt="a stand-in for a later drawing of myself"/>
      <p>Hello!<br></br><br></br> I am a front-end developer with a heavy interest in design and making the internet as accessible as possible. I’m a quick learner and innovative problem solver who is passionate about creating apps that have the ability to strengthen relationships between the world and the user.</p>
    </div>
  );
}
