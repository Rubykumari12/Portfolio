import React from "react";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-img">
          <div className="image1">
            <img src="images/home2.jpg" alt="" width="400" height="390" />
          </div>
        </div>

        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Frontend Developer!</h3>
          <p>
            I am a passionate web developer and designer with a creative mind
            and a love for building beautiful and functional websites. I enjoy
            bringing ideas to life through coding and design, and I'm always
            eager to learn and explore new technologies to create amazing online
            experiences.
          </p>
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
