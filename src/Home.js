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
              {/* <i className="bx bxl-linkedin"></i> */}
              <GrLinkedinOption />
            </a>
            <a href="https://github.com/Rubykumari12" target="display">
              {/* <i className="bx bxl-github"></i> */}
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

      {/* linking javascript  */}
      <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

      {/* scroll reveal */}
      <script src="https://unpkg.com/scrollreveal"></script>

      {/* typed js  */}
      <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    </div>
  );
};

export default Home;
