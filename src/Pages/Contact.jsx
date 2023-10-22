import React from "react";
import "../CSS/Contact.css";
export default function Contact() {
  return (
    <>
      <div className="section-contact">
        <h1 className="contact-title">Contact us</h1>
      </div>

      <div className="contact-area">
        <div className="form-area">
          <div className="form-1">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
            />

            <input type="text" id="" name="firstName" placeholder="Last name" />
          </div>
          <div className="form-1">
            <input type="text" id="firstName" placeholder="Phone" />

            <input type="text" id="firstName" placeholder="Services *" />
          </div>
          <textarea id="message" name="message" />
          <button type="submit" class="submit-button">
            Submit
          </button>
        </div>
      </div>
      <div className="tour-mission01">
        <div className="mission-details01">
          <h1>Why Book with us ?</h1>
          <p>Customer care available 24/7</p>
          <p>Free Travel Insurance </p>
          <p>Hand-picked Tours & Activitie</p>
        </div>
      </div>

      <div className="contact-mission1">
        <div className="">
          <h1>Get A Question ?</h1>
          <p>
            Do not hesitage to give us a call. We are an expert team and we are
            happy to talk to you
          </p>
          <p>holidayplanners@gmail.com </p>
          <p>+123 456 7890</p>
        </div>
      </div>
    </>
  );
}
