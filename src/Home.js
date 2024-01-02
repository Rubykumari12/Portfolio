import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Ruby Kumari G</h1>
          <h3>
            And I'm a <span className="multiple-text"></span>
          </h3>
          <p>
            I have completed Bachelor's of Computer Applications. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Assumenda tempora
            architecto tenetur vitae repellendus repudiandae molestias quod
            labore exercitationem nam sequi, ea dolorem, ullam qui laborum
            excepturi nobis nemo officiis beatae eveniet. Nisi beatae fuga, ex
            molestiae soluta cumque? Dolore temporibus, ipsam iusto sint tenetur
            perferendis.
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
            href="https://drive.google.com/file/d/1ABirb2cdP2YIOGdS5XyqPwCpNb5KEaXw/view?usp=drivesdk"
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
            <img src="images/home2.jpg" alt="" width="400" height="390" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
