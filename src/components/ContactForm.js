import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xpzgvowk");
  
  const contactForm = document.querySelector('#contact-form');

  if (state.succeeded) {
    contactForm.reset();
  }

  return (
    <section className="contact-section-container" id="contact">
      <div className="contact-wrapper">
        <div className="contact-section">
        <div className="contact-content">
          <div className="contact-title">Send a message!</div>
      <form id="contact-form" onSubmit={handleSubmit}>
      <div className='input-section'>
      <input
        className='email'
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
      />
      {/* <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> */}
      <textarea
        className='message'
        id="message"
        name="message"
        placeholder='Message'
      />
      
      {/* <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /> */}
      <div>
      <button className='submit-btn' type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
      </div>
    </form>
    </div>
    </div>
    </div>
    </section>
  );
}

export default ContactForm;