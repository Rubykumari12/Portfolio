import React, { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
          // setName("");
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
            <input type="text" name="name" placeholder="Full Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              name="number"
              placeholder="Mobile Number"
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
