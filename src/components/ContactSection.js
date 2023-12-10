import React from "react";

function ContactSection(){
  return(
    <section className="contact-section-container" id="contact">
      <div className="contact-wrapper">
        <div className="contact-section">
        <div className="contact-content">
          <div className="contact-title">Send a message!</div>
          <div className="input-section">
            
            <div>
              <input className="email" placeholder="Email"/>
            </div>
            <div>
              <textarea className="message" placeholder="Message"></textarea>
            </div>        
          </div>
          <div>
              <button className="submit-btn">SUBMIT</button>
            </div>
          </div>
          </div>
        </div>
      </section>
  );
}

export default ContactSection;