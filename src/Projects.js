import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <div>
      <section className="projects" id="projects">
        <h2 className="heading">
          Latest <span>Projects</span>
        </h2>

        <div className="projects-container">
          <div className="projects-box">
            <img src="images/HomePage.jpg" alt="" height="300" width="500" />
            <div className="projects-layer">
              <h4>TimePiece Hub</h4>
              <p>
                Elevate your timekeeping experience with our web project
                dedicated to clocks and watches. Immerse yourself in a seamless
                blend of design and functionality. Explore precision, style, and
                innovation in every tick.
              </p>
              <a
                href="https://real-pink-camel-hose.cyclic.app"
                target="display"
              >
                {/* <i className="bx bx-link-external"></i> */}
                <BiLinkExternal className="icon-link" />
              </a>
            </div>
          </div>

          <div className="projects-box">
            <img src="images/Black-Jack.jpg" alt="" height="300" width="500" />
            <div className="projects-layer">
              <h4>Black-Jack</h4>
              <p>
                Dive into the thrill of our Blackjack Game website, where
                strategy meets excitement. Experience the classic card game with
                sleek design, engaging gameplay, and a chance to test your luck
                against the dealer.
              </p>
              <a
                href="https://github.com/Rubykumari12/Black-Jack"
                target="display"
              >
                <BiLinkExternal className="icon-link" />
              </a>
            </div>
          </div>

          <div className="projects-box">
            <img
              src="images/Passenger-counter.jpg"
              alt=""
              height="300"
              width="500"
            />
            <div className="projects-layer">
              <h4>Passenger-Counter</h4>
              <p>
                This is a passenger counter app which can be used at different
                transport stations to count number of passengers entered the
                station.
              </p>
              <a
                href="https://github.com/Rubykumari12/Passenger-Counter"
                target="display"
              >
                {/* <i className="bx bx-link-external"></i> */}
                <BiLinkExternal className="icon-link" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
