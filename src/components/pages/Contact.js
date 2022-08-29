import React from 'react';

//look at React Forms again in the coursework

export default function Contact() {

  return (
  <div className="contact-form">
    <input type="hidden" name="contact_number"/>
    <div className="user-info">
      <input type="text" name="user_name" className="name-input" id="contact-name" placeholder='name'></input>
      <input type="email" name="user_email" className="email-input" id="contact-email" placeholder='email'></input>
    </div>
    <div className="message-content">
      <input name="subject" className="subject-input" id="contact-subject" placeholder='subject'></input>
      <textarea name="message" className="message-input" id="contact-message" placeholder='message'></textarea>
    </div>
    <div className="send-button">
      <input type="submit" value="send" id="send-email"/>
    </div>
  </div>
  );
}
