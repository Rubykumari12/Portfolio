import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="skills" id="skills">
        <h2 className="heading">
          My <span>Skills</span>
        </h2>
        <p>
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </p>

        <div className="skills-container">
          <div className="skills-box">
            <h3>
              <span>Frontend</span>
            </h3>
            <img src="images/react.png" alt="" height="50" width="50" />
            <h2>React Js</h2>
            <img src="images/html.png" alt="" height="50" width="50" />
            <h2>HTML</h2>
            <img src="images/css.png" alt="" height="50" width="50" />
            <h2>CSS</h2>
            <img src="images/java-script.png" alt="" height="50" width="50" />
            <h2>JavaScript</h2>
          </div>

          <div className="skills-box">
            <h3>
              <span>Backend</span>
            </h3>
            <img src="images/nodejs.png" alt="" height="50" width="50" />
            <h2>Node Js</h2>
            <img src="images/expressjs.png" alt="" height="50" width="50" />
            <h2>Express Js</h2>
            <img src="images/mongoDB.png" alt="" height="50" width="50" />
            <h2>MongoDB</h2>
            <img src="images/MySQL.png" alt="" height="50" width="50" />
            <h2>MySQL</h2>
          </div>

          <div className="skills-box">
            <h3>
              <span>Others</span>
            </h3>
            <img src="images/github.png" alt="" height="50" width="50" />
            <h2>GitHub</h2>
            <img src="images/vs-code.png" alt="" height="50" width="50" />
            <h2>VS Code</h2>
            <img src="images/postman.png" alt="" height="50" width="50" />
            <h2>Postman</h2>
            <img src="images/java.png" alt="" height="50" width="50" />
            <h2>Java</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
