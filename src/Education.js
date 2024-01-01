import React from "react";

const Education = () => {
  return (
    <div>
      <section className="education" id="education">
        <h2 className="heading">
          My <span>Education</span>
        </h2>
        <p>My educational details are as follows.</p>

        <div className="education-container">
          <div className="education-box">
            <div className="edu-head">
              <img src="images/st.geroge_clg.png" alt="" />
              <div className="edu">
                <h1>St.George College of Management, Science & Nursing</h1>
                <h2>Bachelor of Computer Applications</h2>
                <h3>2023</h3>
              </div>
            </div>
            <h2>Grade : 8.81 CGPA</h2>
            <h3>
              I've earned a Bachelor's in Computer Applications, specializing in
              programming, web development, and databases. Practical projects
              and freelancing opportunities enriched my skills. Eager to apply
              my knowledge professionally, I'm well-versed in diverse aspects of
              computing and committed to continuous learning in the
              ever-evolving tech landscape.
            </h3>
          </div>

          <div className="education-box">
            <div className="edu-head">
              <img src="images/st.annes_clg.jpg" alt="" />
              <div className="edu">
                <h1>St.Anne's Pre-University College for Girl's</h1>
                <h2>[ EBAC ] Pre-University Course</h2>
                <h3>2020</h3>
              </div>
            </div>
            <h2>Grade : 73.83%</h2>
            <h3>
              I've done my II PUC at St.Anne's Pre-University College
              Ramurthynagar, where I studied EBAC.
            </h3>
          </div>

          <div className="education-box">
            <div className="edu-head">
              <img src="images/svs.png" alt="" />
              <div className="edu">
                <h1>Swamy Vivekananda English Medium High School</h1>
                <h2>High School</h2>
                <h3>2018</h3>
              </div>
            </div>
            <h2>Grade : 76.48%</h2>
            <h3>
              I've completed my High School at Swamy Vivekananda School, where I
              studied Science with Computer Application.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
