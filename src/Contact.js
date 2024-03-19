import React, { useState,useRef } from 'react';
import './Contact.css'; // Stil dosyasını import edin

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState(''); 
  const [feedbackMessageType, setFeedbackMessageType] = useState(''); 
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Gönderen: ', name);
    console.log('Mesaj: ', message);
    emailjs
    .sendForm('service_cmss1ox', 'template_ev5o3m7', form.current, {
      publicKey: '-qcP6Cf1hVpF4vpzG',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setFeedbackMessage('Your message has been sent successfully!');
        setFeedbackMessageType('success'); 
      },
      (error) => {
        console.log('FAILED...', error.text);
        setFeedbackMessage('Failed to send the message. Please try again later.'); 
        setFeedbackMessageType('error'); 
      },
    );
    setName('');
    setMessage('');
  };
  

  return (
    <div className="contact-container"> 
    <div className="contact-image"></div> 
     <form onSubmit={handleSubmit} className="contact-form" ref={form}>
        
  <div className="input-row">
    <div className="input-group">
      <input
        type="text"
        id="name"
        placeholder='name'
        name="from_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
    <div className="input-group">
      
      <input
        type="text"
        id="surname"
        name="from_surname"
        
    placeholder='surname'
        required
      />
    </div>
  </div>
  <div className="input-row">
    <div className="input-group">
      
      <input
        type="text"
        id="subject"
        placeholder='subject'
        name="subject"
        required
      />
    </div>
    <div className="input-group">

      <input
        type="email"
        id="email"
        name="user_email"
        placeholder='e-mail'
        required
      />
    </div>
  </div>
  <div>
   
    <textarea
      id="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
      name="message"
      placeholder='text here'
    ></textarea>
  </div>
  <button type="submit" value="Send">SEND</button>
</form>
{feedbackMessage && (
        <div className={`feedback-message ${feedbackMessageType}`}>
          {feedbackMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
