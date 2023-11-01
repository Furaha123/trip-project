import React from "react";
import "../CSS/Contact.css";
import { useState } from "react";
export default function Contact() {
  const [dateReplied, setDateReplied] = useState("");
  const [reply, setReply] = useState("");
  const [dateSent, setDataSent] = useState("");

  const [message, setMessage] = useState("");

  const handleFormSubmit = () => {
    const formData = {
      dateReplied,
      reply,
      dateSent,
    };

    axios
      .post("https://holidayplanner.onrender.com/contact", formData)
      .then((response) => {
        console.log("Form data submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting form data: ", error);
      });
  };

  return (
    <>
      <div className="section-contact">
        <h1 className="contact-title">Contact us</h1>
      </div>
      <div className="contact-container-down">
        <form className="contact-area" onSubmit={handleFormSubmit}>
          <div className="form-area">
            <div className="form-1">
              <input
                type="text"
                id="dateReplied"
                name="firstName"
                placeholder=""
                value={dateReplied}
                onChange={(e) => setDateReplied(e.target.value)}
              />

              <input
                type="text"
                id=""
                name="reply"
                placeholder=""
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
            </div>
            <div className="form-1">
              <input
                type="text"
                id=""
                placeholder=""
                value={dateSent}
                onChange={(e) => setDataSent(e.target.value)}
              />
            </div>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" class="submit-button2">
              Submit
            </button>
          </div>
        </form>
        <div className="mission-div">
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
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you
              </p>
              <p>holidayplanners@gmail.com </p>
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
