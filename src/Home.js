import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Web Developer.", "Programmer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Ruby Kumari G</h1>
          <h3>
            And I'm a <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#0ef" />
          </h3>
          <p>
            Passionate web developer dedicated to crafting visually appealing
            and user-friendly websites, utilizing a robust skill set in
            front-end and back-end technologies to deliver seamless and engaging
            online experiences. Enthusiastic about staying at the forefront of
            industry trends, I continuously strive to enhance my skills,
            incorporating the latest technologies and employing a meticulous eye
            for detail.
          </p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/ruby-kumari-g-70225029b/"
              target="display"
            >
              <GrLinkedinOption />
            </a>
            <a href="https://github.com/Rubykumari12" target="display">
              <FaGithub />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1MXogHfExsvG2oznhjm3I2XTAHCsGuL1u/view?usp=drivesdk"
            target="display"
            className="btn"
          >
            Download CV
          </a>
          <a href="#contact" className="btn1">
            Contact Me
          </a>
        </div>

        <div className="home-img">
          <div className="image">
            <img
              className="dp"
              src="images/home.jpg"
              alt=""
              width="400"
              height="390"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
