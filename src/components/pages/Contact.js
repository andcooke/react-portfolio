import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

//look at React Forms again in the coursework

export default function Contact() {

  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [hiddenState, setHiddenState] = useState(true);

  const { user_name, user_email, subject, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function hideToast () {
    setHiddenState(true);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c01fp3m', 'template_0759zjm', form.current, 'HLScYYxkOCDwDU0SN')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setFormState({user_name: "", user_email: "", subject: "", message: ""})
    setHiddenState(false);
    setTimeout(hideToast, 4000)
  }

  return (
  <form ref={form} onSubmit={sendEmail} className="contact-form">
    <div className="user-info">
      <input required type="text" value={user_name} name="user_name" className="name-input" id="contact-name" placeholder='name' onChange={handleChange}></input>
      <input required type="email" value={user_email} name="user_email" className="email-input" id="contact-email" placeholder='email' onChange={handleChange}></input>
    </div>
    <div className="message-content">
      <input name="subject" value={subject} className="subject-input" id="contact-subject" placeholder='subject' onChange={handleChange}></input>
      <textarea required name="message" type="text" value={message} className="message-input" id="contact-message" placeholder='message' onChange={handleChange}></textarea>
    </div>
    <div className="send-button">
      <p className= { hiddenState ? "hidden-toast" : ""}>sent! thanks!</p>
      <input type="submit" value="send" id="send-email"/>
    </div>
  </form>
  );
}
