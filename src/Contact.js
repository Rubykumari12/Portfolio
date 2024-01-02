import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  //---------------------for-name-number-validation---------------
  const handleNameInput = (e) => {
    const validationMessage = document.getElementById("validationNameInput");
    const regex = /^[A-Za-z\s]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setName(e.target.value);
      validationMessage.textContent = "";
    } else {
      validationMessage.textContent = "Only alphabets are allowed.";
      e.preventDefault(); // Prevent the invalid character from being entered
    }
  };

  const handleNumberInput = (e) => {
    const validationMessage = document.getElementById("validationNumberInput");
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setNumber(e.target.value);
      validationMessage.textContent = "";
    } else {
      validationMessage.textContent = "Only numbers are allowed.";
      e.preventDefault(); // Prevent the invalid character from being entered
    }
  };
  //-----------------------------------------------------------

  const message = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jd93v7g",
        "template_kvgovng",
        message.current,
        "Npe8MZMg9nVcSR_m7"
      )
      .then(
        () => {
          e.target.reset();
          setName("");
          toast.success("Your Message is sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#" ref={message} onSubmit={sendEmail}>
          <div className="input-box">
            <input
              id="validationNameInput"
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={handleNameInput}
              maxLength={"30"}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-box">
            <input
              id="validationNumberInput"
              type="text"
              name="number"
              placeholder="Mobile Number"
              value={number}
              onChange={handleNumberInput}
              maxLength={"10"}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
            />
          </div>
          <textarea
            id=""
            cols="30"
            rows="10"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </div>
  );
};

export default Contact;
