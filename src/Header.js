import React, { useState } from "react";
import { FaFile } from "react-icons/fa6";

const Header = () => {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <FaFile id="portfolio-icon" />
        <a href="#" className="logo">
          Portfolio
        </a>

        <div className="navbar">
          <img
            id="list-icon"
            src={listOpen ? "/images/closeIcon.jpg" : "/images/listIcon.jpg"}
            onClick={() => setListOpen(!listOpen)}
          />
          <ul
            id="listOpen"
            className={`${"navbarList"} ${listOpen && "listOpen"}`}
            onClick={() => setListOpen(false)}
          >
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
