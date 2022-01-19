import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import LinkedIn from '../../img/linkedin.png'

import './Contact.css'

const Contact = () => {
  const [sent, setSent] = useState(false)
  const formRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    emailjs.sendForm('service_gskv6cd', 'template_43jvevd', formRef.current, 'user_4xD2oZNtRImoNmKYBmnfN')
      .then((result) => {
          setSent(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contact">
      <div className="contact-bg"></div>
        <div className="contact-left">
        <div className="contact-left-wrapper">
          <h1 className="contact-title">
            Contact me
          </h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              +358 50 432 1869
            </div>
            <div className="contact-info-item">
              <img src={Email} alt="" className="contact-icon" />
              touko.lonka@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={Address} alt="" className="contact-icon" />
              Toinen linja 25 A 31, 00530 Helsinki
            </div>
            <div className="contact-info-item">
              <img src={LinkedIn} alt="" className="contact-icon" />
              <a
                href="https://www.linkedin.com/in/touko-lonka-4ab255191/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Touko Lonka
              </a>
            </div>
          </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>Send me a message!</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Subject" name="subject" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Send Message</button>
            {sent && <small>Message sent successfully!</small>}
          </form>
        </div>
    </div>
  );
};

export default Contact;
