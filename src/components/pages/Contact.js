import React from 'react';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="user-info">
        <input className="name-input" id="contact-name" placeholder='name'></input>
        <input className="email-input" id="contact-email" placeholder='email'></input>
      </div>
      <div className="message-content">
        <input className="subject-input" id="contact-subject" placeholder='subject'></input>
        <textarea className="message-input" id="contact-message" placeholder='message'></textarea>
      </div>
      <div className="send-button">
        <button>Send</button>
      </div>
    </div>
  );
}


          